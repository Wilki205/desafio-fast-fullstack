namespace FastChallenge.API.Models;
using Microsoft.AspNetCore.Authorization; 

[Authorize]
public class Presenca
{
    public int ColaboradorId { get; set; }
    public Colaborador Colaborador { get; set; } = null!;

    public int WorkshopId { get; set; }
    public Workshop Workshop { get; set; } = null!;
}