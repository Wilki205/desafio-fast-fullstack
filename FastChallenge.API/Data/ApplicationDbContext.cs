using FastChallenge.API.Models;
using Microsoft.EntityFrameworkCore;
namespace FastChallenge.API.Data;
public class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : DbContext(options)
{
    public DbSet<Colaborador> Colaboradores { get; set; } = null!;
    public DbSet<Workshop> Workshops { get; set; } = null!;
    public DbSet<Presenca> Presencas { get; set; } = null!;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Presenca>()
            .HasKey(p => new { p.ColaboradorId, p.WorkshopId });
    }
}