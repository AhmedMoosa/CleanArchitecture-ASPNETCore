using AutoMapper;
using Demo.ApplicationCore.Interfaces.Services;
using Demo.Infrastructure.Data;
using Demo.Infrastructure.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace Demo.Infrastructure
{
    public static class InfrastructureStartup
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services, Action<DbContextOptionsBuilder> options)
        {
            //Register DbContext
            services.AddDbContext<TermsContext>(options);

            //Register AutoMapper 
            services.AddAutoMapper(typeof(AutoMapperProfiles) /* You can add more Assembly profiles*/);

            //Register Application Services
            services.AddTransient<ITermsService, TermsService>();

            return services;
        }
    }
}
