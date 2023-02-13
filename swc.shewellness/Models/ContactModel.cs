using System.ComponentModel.DataAnnotations;
using System.Xml.Linq;

namespace swc.shewellness.Models
{
    public class ContactModel
    {
        public string Name { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        public string Message { get; set; }

    }
}