using System.ComponentModel.DataAnnotations;
using System.Xml.Linq;

namespace swc.shewellness.Models
{
    public class ContactModel
    {

        [Required]
        [Display(Name = "First Name")]
        public string FirstName { get; set; }

        [Required]
        [Display(Name = "Last Name")]
        public string LastName { get; set; }

        [Required]
        [EmailAddress]
        [Display(Name = "Email")]
        public string EmailAddress { get; set; }

        [Required]
        [Display(Name = "What would you like to know?")]
        public string Message { get; set; }

}
}