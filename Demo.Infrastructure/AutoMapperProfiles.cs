using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using Entities = Demo.ApplicationCore.Entities;
using Dtos = Demo.ApplicationCore.DTOs;
namespace Demo.Infrastructure
{
    public class AutoMapperProfiles
    {
        public class TermProfile : Profile
        {
            public TermProfile()
            {
                CreateMap<Entities.Term, Dtos.Term>();
                CreateMap<Dtos.InputTerm, Entities.Term>();
            }
        }
    }
}
