using System;
using System.IO;

namespace appFund
{
   public class Funding
    {
        public int Id { get; set; }
        public string StartDate { get; set; }
        public string EndDate { get; set; }
        public int Amount { get; set; }
        public string Summary { get; set; }
        public string Status { get; set; }
    }

}
