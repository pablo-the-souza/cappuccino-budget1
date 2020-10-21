
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace CourseLibrary.API.Controllers
{
    [ApiController]
    [Route("api/records")]
    public class RecordsController : ControllerBase
    {
        private readonly DataContext _context;

        public RecordsController(DataContext context)
        {
            _context = context;
        }
        
        [HttpGet]
        public ActionResult<IEnumerable<Record>> GetRecords()
        {
            return _context.Records.ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<Record> GetRecordById(int id)
        {
            return _context.Records.Find(id);
        }

        [HttpPost]
        public ActionResult<Record> AddRecord([FromBody] Record record)
        {
            _context.Records.Add(record);
            _context.SaveChanges();

            return Ok();
        }
    }
}

