
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

        [HttpGet()]
        public ActionResult<IEnumerable<Record>> GetAuthors()
        {
            return _context.Records.ToList();
        }
    }
}

