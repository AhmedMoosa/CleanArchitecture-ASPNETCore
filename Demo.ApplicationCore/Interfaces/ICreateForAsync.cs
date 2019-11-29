using Demo.ApplicationCore.DTOs;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Demo.ApplicationCore.Interfaces
{
    public interface ICreateForAsync<T> where T : class
    {
        Task<OperationResult> CreateAsync(T entityToCreate);
    }
}
