﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using NewsApp.DataAccess;

namespace Repositories.Migrations
{
    [DbContext(typeof(NewsAppContext))]
    [Migration("20191008134349_initial")]
    partial class initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("Entities.Subscription", b =>
                {
                    b.Property<Guid>("Id");

                    b.Property<int>("Category");

                    b.Property<DateTime>("Created");

                    b.Property<string>("Email");

                    b.HasKey("Id");

                    b.ToTable("Subscriptions");
                });

            modelBuilder.Entity("Entities.SubscriptionNewsSend", b =>
                {
                    b.Property<Guid>("Id");

                    b.Property<DateTime>("Created");

                    b.Property<string>("NewsId");

                    b.Property<Guid>("SubscriptionId");

                    b.HasKey("Id");

                    b.ToTable("SubscriptionNewsSends");
                });
#pragma warning restore 612, 618
        }
    }
}