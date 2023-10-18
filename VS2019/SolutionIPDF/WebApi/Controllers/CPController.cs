using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web;
using System.Web.Http;

namespace WebApi.Controllers
{
    public class CPController : ApiController
    {
        // GET: api/CP
        public List<cp_cordoba> Get()
        {
            List<cp_cordoba> olist = new List<cp_cordoba>();

            using (sistemaEscolarEntities db = new sistemaEscolarEntities())

            {
                olist = db.cp_cordoba.ToList();
            }
            return olist;
        }

        // GET: api/CP/5
        public cp_cordoba Get(int id)
        {
            cp_cordoba oItem = new cp_cordoba();
            using (sistemaEscolarEntities db = new sistemaEscolarEntities())
            {
                oItem = db.cp_cordoba.Find(id);
            }
            return oItem;
        }

        // POST: api/CP
        public void Post([FromBody] cp_cordoba value)
        {
            using (sistemaEscolarEntities db = new sistemaEscolarEntities())
            {
                db.cp_cordoba.Add(value);
                db.SaveChanges();
            }
        }

        // PUT: api/CP/5
        public void Put(int id, [FromBody] cp_cordoba value)
        {
            using (sistemaEscolarEntities db = new sistemaEscolarEntities())
            {
                cp_cordoba oItem = db.cp_cordoba.Find(id);

                // Actualizar campos de la entidad existente
                oItem.CP = value.CP;
                oItem.Provincia = value.Provincia;
                oItem.Localidad = value.Localidad;

                db.Entry(oItem).State = EntityState.Modified;
                db.SaveChanges();
            }
        }

        // DELETE: api/CP/5
        public void Delete(int id)
        {
            using (sistemaEscolarEntities db = new sistemaEscolarEntities())
            {
                cp_cordoba oItem = db.cp_cordoba.Find(id);
                db.cp_cordoba.Remove(oItem);
                db.SaveChanges();
            }
        }
    }
}
