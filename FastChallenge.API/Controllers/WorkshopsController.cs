using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FastChallenge.API.Data;
using FastChallenge.API.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FastChallenge.API.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class WorkshopsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public WorkshopsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/workshops
        [HttpGet]
        public async Task<ActionResult<IEnumerable<WorkshopDto>>> GetWorkshops()
        {
            var workshops = await _context.Workshops
                .Select(w => new WorkshopDto
                {
                    Id = w.Id,
                    Nome = w.Nome,
                    DataRealizacao = w.DataRealizacao,
                    Descricao = w.Descricao,
                    Colaboradores = w.Presencas
                        .Select(p => new ColaboradorDto
                        {
                            Id = p.Colaborador.Id,
                            Nome = p.Colaborador.Nome
                        })
                        .ToList()
                })
                .ToListAsync();

            return Ok(workshops);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<WorkshopDto>> GetWorkshop(int id)
        {
            var workshop = await _context.Workshops
                .Include(w => w.Presencas)
                .ThenInclude(p => p.Colaborador)
                .FirstOrDefaultAsync(w => w.Id == id);

            if (workshop == null)
                return NotFound();

            var dto = new WorkshopDto
            {
                Id = workshop.Id,
                Nome = workshop.Nome,
                DataRealizacao = workshop.DataRealizacao,
                Descricao = workshop.Descricao,
                Colaboradores = workshop.Presencas
                    .Select(p => new ColaboradorDto
                    {
                        Id = p.Colaborador.Id,
                        Nome = p.Colaborador.Nome
                    })
                    .ToList()
            };

            return Ok(dto);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutWorkshop(int id, Workshop workshop)
        {
            if (id != workshop.Id)
                return BadRequest();

            _context.Entry(workshop).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Workshops.Any(e => e.Id == id))
                    return NotFound();
                else
                    throw;
            }

            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<Workshop>> PostWorkshop(Workshop workshop)
        {
            _context.Workshops.Add(workshop);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetWorkshop), new { id = workshop.Id }, workshop);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWorkshop(int id)
        {
            var workshop = await _context.Workshops.FindAsync(id);
            if (workshop == null)
                return NotFound();

            _context.Workshops.Remove(workshop);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
    public class WorkshopDto
    {
        public int Id { get; set; }
        public string Nome { get; set; } = string.Empty;
        public DateTime DataRealizacao { get; set; }
        public string Descricao { get; set; } = string.Empty;
        public List<ColaboradorDto> Colaboradores { get; set; } = new();
    }

    public class ColaboradorDto
    {
        public int Id { get; set; }
        public string Nome { get; set; } = string.Empty;
    }
}
