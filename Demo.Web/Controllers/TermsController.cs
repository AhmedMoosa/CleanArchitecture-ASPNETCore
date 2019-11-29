using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Threading.Tasks;
using Demo.ApplicationCore.DTOs;
using Demo.ApplicationCore.Interfaces.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Demo.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TermsController : ControllerBase
    {
        private readonly ITermsService _termsService;
        public TermsController(ITermsService termsService)
        {
            _termsService = termsService;
        }
        // GET: api/Terms
        [HttpGet]
        public async Task<IActionResult> Get(int currentPage = 0)
        {
            var result = _termsService.GetAll();
            return await GetPagedData(result, currentPage);
        }

        private async Task<IActionResult> GetPagedData(IQueryable<Term> data, int currentPage = 0)
        {
            var pageSize = 5;
            currentPage = currentPage >= 0 ? currentPage : 0;
            var startIndex = pageSize * currentPage;
            var pagedData = await data
                .Skip(startIndex)
                .Take(pageSize)
                .ToListAsync();

            if (currentPage <= 1)
            {
                var pagesCount = Math.Ceiling(Convert.ToDecimal(data.Count()) / Convert.ToDecimal(pageSize));
                return Ok(new { Success = true, Data = pagedData, pagesCount });
            }
            return Ok(new { Success = true, Data = pagedData });
        }

        // GET: api/Terms/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetBy(int id)
        {
            var selectedTerm = await _termsService.FindAsync(id);
            return Ok(new { success = true, data = selectedTerm });
        }

        // POST: api/Terms
        [HttpPost]
        public async Task<IActionResult> Post(InputTerm value)
        {
            if (ModelState.IsValid)
            {
                var result = await _termsService.CreateAsync(value);
                return Ok(result);
            }
            return Ok(new { Success = false, Message = getErrorMessages() });
        }

        private string getErrorMessages()
        {
            var msg = string.Join(',', ModelState.Values.SelectMany(v => v.Errors.Select(e => e.ErrorMessage)));
            return msg;
        }

        // PUT: api/Terms/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, InputTerm value)
        {
            if (ModelState.IsValid)
            {
                var result = await _termsService.UpdateAsync(id, value);
                return Ok(result);
            }
            return Ok(new { Success = false, Message = getErrorMessages() });
        }

        // DELETE: api/Terms/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _termsService.DeleteAsync(id);
            return Ok(result);
        }
    }
}
