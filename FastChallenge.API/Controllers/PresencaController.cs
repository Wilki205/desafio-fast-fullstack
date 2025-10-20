using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FastChallenge.API.Data;
using FastChallenge.API.Models;
using Microsoft.AspNetCore.Authorization;

namespace FastChallenge.API.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class PresencaController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public PresencaController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> AdicionarPresenca([FromBody] PresencaDto presencaDto)
        {
            var colaboradorExiste = await _context.Colaboradores.AnyAsync(c => c.Id == presencaDto.ColaboradorId);
            var workshopExiste = await _context.Workshops.AnyAsync(w => w.Id == presencaDto.WorkshopId);

            if (!colaboradorExiste || !workshopExiste)
            {
                return NotFound("Colaborador ou Workshop não encontrado.");
            }

            var presencaJaExiste = await _context.Presencas
                .AnyAsync(p => p.ColaboradorId == presencaDto.ColaboradorId && p.WorkshopId == presencaDto.WorkshopId);

            if (presencaJaExiste)
            {
                return Conflict("Este colaborador já está registrado neste workshop.");
            }

            var presenca = new Presenca
            {
                ColaboradorId = presencaDto.ColaboradorId,
                WorkshopId = presencaDto.WorkshopId
            };

            _context.Presencas.Add(presenca);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Presença registrada com sucesso." });
        }
    }

    public class PresencaDto
    {
        public int ColaboradorId { get; set; }
        public int WorkshopId { get; set; }
    }
}