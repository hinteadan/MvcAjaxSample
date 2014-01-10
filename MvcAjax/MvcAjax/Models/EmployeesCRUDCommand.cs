using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MvcAjax.Models
{
    public class EmployeesCRUDCommand
    {
        public Employee[] ToAdd { get; set; }
        public Employee[] ToRemove { get; set; }
        public Employee[] ToUpdate { get; set; }
    }
}