using System.Text.Json;
using System.Text.Json.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace appFound
{
    public class DalFunding
    {
        public IEnumerable<Funding> GetAsync()
        {
           
            string jsonString = File.ReadAllText("../appFound/MockData/MockDataFunding.json");

            return JsonSerializer.Deserialize<IEnumerable<Funding>>(jsonString);
        }
    }
}
