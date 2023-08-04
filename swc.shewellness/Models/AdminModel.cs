using System.ComponentModel.DataAnnotations;
using System.Xml.Linq;

namespace swc.shewellness.Models
{
    public class AdminModel
    {
        public string? Username { get; set; }
        public string? Password { get; set; }
    }
    public class SendEmailViewModel
    {
        public string? EmailList { get; set; }
        public string? Subject { get; set; }
        public string? Month { get; set; }
        public string? Date { get; set; }
        public string? ImageOne { get; set; }
        public string? ImageTwo { get; set; }
        public string? Heading { get; set; }
        public string? Subheading { get; set; }
        public string? Description { get; set; }
        public string? Resources { get; set; }

    }
}