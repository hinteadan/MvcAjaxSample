﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MvcAjax.Models;

namespace MvcAjax.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public JsonResult MapArray(Employee[] employees)
        {
            return Json(new { isSuccess = true, mvcManagedToBindThis = employees });
        }

        [HttpPost]
        public JsonResult ProcessEmployees(EmployeesCRUDCommand command)
        {
            return Json(new { isSuccess = true, mvcManagedToBindThis = command });
        }
    }
}
