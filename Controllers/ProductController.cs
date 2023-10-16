using Airbnb_Clone_Project.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Airbnb_Clone_Project.Controllers
{
    public class ProductController : Controller
    {
        DBSportStoreEntities1 db = new  DBSportStoreEntities1();
        // GET: Product
        public ActionResult Index()
        {
            return View(db.Products.ToList());
        }
        public ActionResult Create()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Create(Product pro)
        {
            db.Products.Add(pro);
            db.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}