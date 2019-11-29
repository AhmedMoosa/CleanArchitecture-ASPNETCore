using AutoMapper;
using AutoMapper.QueryableExtensions;
using Demo.ApplicationCore.DTOs;
using Demo.ApplicationCore.Interfaces.Services;
using Demo.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities = Demo.ApplicationCore.Entities;
namespace Demo.Infrastructure.Services
{
    public class TermsService : ITermsService
    {
        private readonly TermsContext _context;
        private IMapper _mapper;
        public TermsService(TermsContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<OperationResult> CreateAsync(InputTerm entityToCreate)
        {
            var newTerm = _mapper.Map<Entities.Term>(entityToCreate);
            await _context.Terms.AddAsync(newTerm);
            await _context.SaveChangesAsync();
            return OperationResult.Succeeded();
        }

        public async Task<OperationResult> DeleteAsync(int key)
        {
            var selectedTerm = await _context.Terms.FindAsync(key);
            if (selectedTerm != null)
            {
                _context.Terms.Remove(selectedTerm);
                await _context.SaveChangesAsync();
                return OperationResult.Succeeded();
            }
            return OperationResult.NotFound();
        }

        public async Task<Term> FindAsync(int key)
        {
            var selectedTerm = await _context.Terms.FindAsync(key);
            return selectedTerm != null ? _mapper.Map<Term>(selectedTerm) : null;
        }

        public IQueryable<Term> GetAll()
        {
            var result = _context.Terms
                .OrderByDescending(t => t.Id)
                .ProjectTo<Term>(_mapper.ConfigurationProvider);
            return result;
        }

        public async Task<OperationResult> UpdateAsync(int key, InputTerm entityToUpdate)
        {
            var selectedTerm = await _context.Terms.FindAsync(key);
            if (selectedTerm != null)
            {
                var updatedTerm = _mapper.Map<Entities.Term>(entityToUpdate);
                updatedTerm.Id = key;
                _context.Entry(updatedTerm).State = EntityState.Modified;
                await _context.SaveChangesAsync();
                return OperationResult.Succeeded();
            }
            return OperationResult.NotFound();

        }
    }
}
