using System;
using System.Collections.Generic;

namespace API.Entities
{
    public class Record
    {
        public int Id { get; set; }
        public string Date {get; set; }
        public string Name { get; set; }
        public int Value {get; set; }
        public string Category { get; set; }
        public string Type {get; set; }
    }
}