using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Demo.ApplicationCore.DTOs
{
    public class InputTerm
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
    }

    public class Term : InputTerm
    {
        public int Id { get; set; }
    }
}
