using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.Models
{
    public class SessionRec
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string SpeakersNameCsv { get; set; }
        public int InterestLevel { get; set; }
    }
}
