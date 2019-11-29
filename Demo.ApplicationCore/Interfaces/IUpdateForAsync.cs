using Demo.ApplicationCore.DTOs;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Demo.ApplicationCore.Interfaces
{
    public interface IUpdateForAsync<T, TKey> where T : class
    {
        Task<OperationResult> UpdateAsync(TKey key, T entityToUpdate);
    }
}
