using Demo.ApplicationCore.DTOs;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Demo.ApplicationCore.Interfaces
{
    public interface IFindForAsync<TResult, TKey> where TResult : class
    {
        Task<TResult> FindAsync(TKey key);
    }
}
