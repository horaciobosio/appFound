using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace appFund.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FundingController : ControllerBase
    {
       
        private readonly ILogger<FundingController> _logger;

        public FundingController(ILogger<FundingController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Funding> Get()
        {
            DalFunding dalaux = new DalFunding();

            return dalaux.GetAsync();
        }
    }
}
