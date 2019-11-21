using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OrderManagement.Models;

namespace OrderManagement.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class MachineryController : ControllerBase
    {
        private readonly Settings _settings;
        public MachineryController(
            Settings settings
        )
        {
            _settings = settings;
        }
        
        [HttpPost]
        [AllowAnonymous]
        public IEnumerable<Machinery> All()
        {
            OrdersTrackingContext context = HttpContext.RequestServices.GetService(typeof(OrdersTrackingContext)) as OrdersTrackingContext;
            return context.GetAllMachineryOrders().ToArray();
            
            
        }
    }
   
}