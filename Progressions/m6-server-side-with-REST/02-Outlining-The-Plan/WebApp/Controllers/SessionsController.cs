using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using WebApp;
using WebApp.Models;

namespace WebApp.Controllers
{
    [Produces("application/json")]
    [Route("rest/Sessions")]
    public class SessionsController : Controller
    {
        private readonly MyDbContext _context;

        public SessionsController(MyDbContext context)
        {
            _context = context;
        }

        // GET: api/Sessions
        [HttpGet]
        public IEnumerable<SessionRec> GetSessionRecs()
        {
            Thread.Sleep(200);// artificial delay for UI
            if (_context.SessionRecs.ToList().Count == 0)
            {
                InitSessionsData();
            }

            return _context.SessionRecs;
        }

        private void InitSessionsData()
        {
            string file;
            var assembly = Assembly.GetEntryAssembly();
            string[] resources = assembly.GetManifestResourceNames(); // debugging purposes only to get list of embedded resources
            using (var stream = assembly.GetManifestResourceStream("WebApp.Data.sessions.json"))
            {
                using (var reader = new StreamReader(stream))
                {
                    file = reader.ReadToEnd();
                }
            }
            List<SessionRec> sessionRecs = JsonConvert.DeserializeObject<SessionRec[]>(file).ToList();
            foreach (var session in sessionRecs)
            {
                _context.SessionRecs.Add(session);
            }
            _context.SaveChanges();
            return;
        }

        // GET: api/Sessions/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetSessionRec([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var sessionRec = await _context.SessionRecs.SingleOrDefaultAsync(m => m.Id == id);

            if (sessionRec == null)
            {
                return NotFound();
            }

            return Ok(sessionRec);
        }

        // PUT: api/Sessions/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSessionRec([FromRoute] int id, [FromBody] SessionRec sessionRec)
        {
            await Task.Delay(1000); // force the UI to show the saving message (not production necessary)

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != sessionRec.Id)
            {
                return BadRequest();
            }

            _context.Entry(sessionRec).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException xx)
            {
                if (!SessionRecExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            //return NoContent();
            return Ok(sessionRec);
        }

        // POST: api/Sessions
        [HttpPost]
        public async Task<IActionResult> PostSessionRec([FromBody] SessionRec sessionRec)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.SessionRecs.Add(sessionRec);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSessionRec", new { id = sessionRec.Id }, sessionRec);
        }

        // DELETE: api/Sessions/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSessionRec([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var sessionRec = await _context.SessionRecs.SingleOrDefaultAsync(m => m.Id == id);
            if (sessionRec == null)
            {
                return NotFound();
            }

            _context.SessionRecs.Remove(sessionRec);
            await _context.SaveChangesAsync();

            return Ok(sessionRec);
        }

        private bool SessionRecExists(int id)
        {
            return _context.SessionRecs.Any(e => e.Id == id);
        }
    }
}