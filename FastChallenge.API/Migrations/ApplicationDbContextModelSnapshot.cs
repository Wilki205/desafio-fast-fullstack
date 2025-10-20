using System;
using FastChallenge.API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace FastChallenge.API.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "9.0.10");

            modelBuilder.Entity("FastChallenge.API.Models.Colaborador", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Colaboradores");
                });

            modelBuilder.Entity("FastChallenge.API.Models.Presenca", b =>
                {
                    b.Property<int>("ColaboradorId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("WorkshopId")
                        .HasColumnType("INTEGER");

                    b.HasKey("ColaboradorId", "WorkshopId");

                    b.HasIndex("WorkshopId");

                    b.ToTable("Presencas");
                });

            modelBuilder.Entity("FastChallenge.API.Models.Workshop", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("DataRealizacao")
                        .HasColumnType("TEXT");

                    b.Property<string>("Descricao")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Workshops");
                });

            modelBuilder.Entity("FastChallenge.API.Models.Presenca", b =>
                {
                    b.HasOne("FastChallenge.API.Models.Colaborador", "Colaborador")
                        .WithMany("Presencas")
                        .HasForeignKey("ColaboradorId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("FastChallenge.API.Models.Workshop", "Workshop")
                        .WithMany("Presencas")
                        .HasForeignKey("WorkshopId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Colaborador");

                    b.Navigation("Workshop");
                });

            modelBuilder.Entity("FastChallenge.API.Models.Colaborador", b =>
                {
                    b.Navigation("Presencas");
                });

            modelBuilder.Entity("FastChallenge.API.Models.Workshop", b =>
                {
                    b.Navigation("Presencas");
                });
#pragma warning restore 612, 618
        }
    }
}
