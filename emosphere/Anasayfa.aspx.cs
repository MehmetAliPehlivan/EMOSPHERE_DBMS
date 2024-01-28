using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace emosphere
{
    public partial class Anasayfa : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            

        }

        protected void btnKullaniciGirisi_Click(object sender, EventArgs e)
        {
            Response.Redirect("KullaniciGirisi.aspx" );
        }

        protected void btnTerapiGirisi_Click(object sender, EventArgs e)
        {
            Response.Redirect("TerapiBilgileri.aspx");
        }
    }
}