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
    [Route("rest/Speakers")]
    public class SpeakersController : Controller
    {
        private readonly MyDbContext _context;

        public SpeakersController(MyDbContext context)
        {
            _context = context;
        }


        // GET: api/Speakers
        [HttpGet]
        public IEnumerable<SpeakerRec> GetSpeakerRecs()
        {
            
            if (_context.SpeakerRecs.ToList().Count == 0)
            {
                InitSpeakersData();
            }

            Thread.Sleep(200);// artificial delay for UI

            return _context.SpeakerRecs;
        }

        private void InitSpeakersData()
        {
            string file;
            var assembly = Assembly.GetEntryAssembly();
            string[] resources = assembly.GetManifestResourceNames(); // debugging purposes only to get list of embedded resources
            using (var stream = 
                assembly.GetManifestResourceStream("WebApp.Data.speakers.json"))
            {
                using (var reader = new StreamReader(stream))
                {
                    file = reader.ReadToEnd();
                }
            }
            List<SpeakerRec> speakerRecs = JsonConvert.DeserializeObject<SpeakerRec[]>(file).ToList();
            foreach (var speaker in speakerRecs)
            {
                _context.SpeakerRecs.Add(speaker);
            }
            _context.SaveChanges();
            return;
        }

        // GET: api/Speakers/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetSpeakerRec([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var speakerRec = await _context.SpeakerRecs.SingleOrDefaultAsync(m => m.Id == id);

            if (speakerRec == null)
            {
                return NotFound();
            }

            return Ok(speakerRec);
        }

        // PUT: api/Speakers/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSpeakerRec([FromRoute] int id, [FromBody] SpeakerRec speakerRec)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != speakerRec.Id)
            {
                return BadRequest();
            }

            _context.Entry(speakerRec).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SpeakerRecExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Speakers
        [HttpPost]
        public async Task<IActionResult> PostSpeakerRec([FromBody] SpeakerRec speakerRec)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.SpeakerRecs.Add(speakerRec);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSpeakerRec", new { id = speakerRec.Id }, speakerRec);
        }

        // DELETE: api/Speakers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSpeakerRec([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var speakerRec = await _context.SpeakerRecs.SingleOrDefaultAsync(m => m.Id == id);
            if (speakerRec == null)
            {
                return NotFound();
            }

            _context.SpeakerRecs.Remove(speakerRec);
            await _context.SaveChangesAsync();

            return Ok(speakerRec);
        }

        private bool SpeakerRecExists(int id)
        {
            return _context.SpeakerRecs.Any(e => e.Id == id);
        }
    }
}