using System;
using System.Data.SqlClient;
using System.Security.Cryptography;
using System.Text;
using Microsoft.ApplicationBlocks.Data;
using System.Data;
using System.Drawing;

namespace emosphere
{
    public partial class TerapiBilgileri : System.Web.UI.Page
    {


        string connectionString = (string)System.Configuration.ConfigurationSettings.AppSettings["ConnectionString"];
        protected void Page_Load(object sender, EventArgs e)
        {
            if(ddlSorguHasta.SelectedValue=="" && ddlSorguTerapist.SelectedValue == "")
            {
                ddlSorguHastaDoldur();
                ddlSorguTerapiOdalarıDoldur();
                ddlSorguTerapiTipiDoldur();
                ddlSorguTerapistDoldur();
            }
           

            if (!IsPostBack)
            {
                ddlHastaDoldur();
                ddlTerapiOdalarıDoldur();
                ddlTerapiTipiDoldur();
                ddlTerapistDoldur();
                if (Request.QueryString["TerapiNo"] != null)
                {
                    int TerapiNo = Convert.ToInt32(Request.QueryString["TerapiNo"]);
                    btnKaydet.Visible = false;
                    btnGuncelle.Visible = true;
                    btnSil.Visible = true;
                    var ds = TerapiDetayGetir(TerapiNo);
                    TumAlanlariDoldur(TerapiNo, ds);
                    GirisTabiniAktifEt();
                }
            }
        }
        public void TumAlanlariDoldur(int TerapiNo, DataSet ds)
        {


            if (ds.Tables[0].Rows.Count > 0)
            {
                hdnTerapiNo.Value = TerapiNo.ToString();
                txtTerapiAd.Text = ds.Tables[0].Rows[0]["TerapiAdi"].ToString();
                ddlHasta.SelectedValue = ds.Tables[0].Rows[0]["UserID"].ToString();
                ddlTerapist.SelectedValue = ds.Tables[0].Rows[0]["TheraphistId"].ToString();
                ddlTerapiOda.SelectedValue = ds.Tables[0].Rows[0]["TherapyRoomID"].ToString();
                ddlTerapiTipi.SelectedValue = ds.Tables[0].Rows[0]["TherapyCategoryID"].ToString();
                ddlTerapiDurumu.SelectedValue = ds.Tables[0].Rows[0]["ProgressStatus"].ToString();
                txtBasTarihi.Text = ds.Tables[0].Rows[0]["StartDate"].ToString();
                txtBitTarihi.Text = ds.Tables[0].Rows[0]["EndDate"].ToString();
                txtNot1.Text = ds.Tables[0].Rows[0]["FeedbackText"].ToString();
                txtNot2.Text = ds.Tables[0].Rows[0]["ConsiderationPoint"].ToString();
            }
        }
        public void ddlHastaDoldur()
        {
            ddlHasta.DataSource = SqlHelper.ExecuteDataset(connectionString, "SP_USER_BILGILERI_GETIR");
            ddlHasta.DataTextField = "Name";
            ddlHasta.DataValueField = "Id";
            ddlHasta.DataBind();
            ddlHasta.Items.Add(new System.Web.UI.WebControls.ListItem("Seçiniz", "0"));
            ddlHasta.Items.FindByValue("0").Selected = true;            
        }

        public void ddlTerapistDoldur()
        {
            ddlTerapist.DataSource = SqlHelper.ExecuteDataset(connectionString, "SP_TERAPIST_BILGILERI_GETIR");
            ddlTerapist.DataTextField = "Name";
            ddlTerapist.DataValueField = "Id";
            ddlTerapist.DataBind();
            ddlTerapist.Items.Add(new System.Web.UI.WebControls.ListItem("Seçiniz", "0"));
            ddlTerapist.Items.FindByValue("0").Selected = true;
        }
        public void ddlTerapiTipiDoldur()
        {
            ddlTerapiTipi.DataSource = SqlHelper.ExecuteDataset(connectionString, "SP_TERAPI_TIPLERI_GETIR");
            ddlTerapiTipi.DataTextField = "Name";
            ddlTerapiTipi.DataValueField = "Id";
            ddlTerapiTipi.DataBind();
            ddlTerapiTipi.Items.Add(new System.Web.UI.WebControls.ListItem("Seçiniz", "0"));
            ddlTerapiTipi.Items.FindByValue("0").Selected = true;
        }
        public void ddlTerapiOdalarıDoldur()
        {
            ddlTerapiOda.DataSource = SqlHelper.ExecuteDataset(connectionString, "SP_TERAPI_ODALARI_GETIR");
            ddlTerapiOda.DataTextField = "Name";
            ddlTerapiOda.DataValueField = "Id";
            ddlTerapiOda.DataBind();
            ddlTerapiOda.Items.Add(new System.Web.UI.WebControls.ListItem("Seçiniz", "0"));
            ddlTerapiOda.Items.FindByValue("0").Selected = true;
        }

        public void ddlSorguHastaDoldur()
        {
            ddlSorguHasta.DataSource = SqlHelper.ExecuteDataset(connectionString, "SP_USER_BILGILERI_GETIR");
            ddlSorguHasta.DataTextField = "Name";
            ddlSorguHasta.DataValueField = "Id";
            ddlSorguHasta.DataBind();
            ddlSorguHasta.Items.Add(new System.Web.UI.WebControls.ListItem("Seçiniz", "0"));
            ddlSorguHasta.Items.FindByValue("0").Selected = true;
        }

        public void ddlSorguTerapistDoldur()
        {
            ddlSorguTerapist.DataSource = SqlHelper.ExecuteDataset(connectionString, "SP_TERAPIST_BILGILERI_GETIR");
            ddlSorguTerapist.DataTextField = "Name";
            ddlSorguTerapist.DataValueField = "Id";
            ddlSorguTerapist.DataBind();
            ddlSorguTerapist.Items.Add(new System.Web.UI.WebControls.ListItem("Seçiniz", "0"));
            ddlSorguTerapist.Items.FindByValue("0").Selected = true;
        }
        public void ddlSorguTerapiTipiDoldur()
        {
            ddlSorguTerapiTipi.DataSource = SqlHelper.ExecuteDataset(connectionString, "SP_TERAPI_TIPLERI_GETIR");
            ddlSorguTerapiTipi.DataTextField = "Name";
            ddlSorguTerapiTipi.DataValueField = "Id";
            ddlSorguTerapiTipi.DataBind();
            ddlSorguTerapiTipi.Items.Add(new System.Web.UI.WebControls.ListItem("Seçiniz", "0"));
            ddlSorguTerapiTipi.Items.FindByValue("0").Selected = true;
        }
        public void ddlSorguTerapiOdalarıDoldur()
        {
            ddlSorguTerapiOda.DataSource = SqlHelper.ExecuteDataset(connectionString, "SP_TERAPI_ODALARI_GETIR");
            ddlSorguTerapiOda.DataTextField = "Name";
            ddlSorguTerapiOda.DataValueField = "Id";
            ddlSorguTerapiOda.DataBind();
            ddlSorguTerapiOda.Items.Add(new System.Web.UI.WebControls.ListItem("Seçiniz", "0"));
            ddlSorguTerapiOda.Items.FindByValue("0").Selected = true;
        }
        public DataSet TerapiDetayGetir(int TerapiNo)
        {
            return SqlHelper.ExecuteDataset(connectionString, "SP_KULLANICI_TERAPI_BILGILERI_DETAY_GETIR", TerapiNo);
        }
        protected void btnKaydet_Click(object sender, EventArgs e)
        {
            

            hdnTerapiNo.Value = KayitEkle(
                    Convert.ToInt32( ddlHasta.SelectedValue), 
                    txtTerapiAd.Text,
                    Convert.ToInt32(ddlTerapiTipi.SelectedValue),
                    Convert.ToInt32(ddlTerapiOda.SelectedValue),
                    txtBasTarihi.Text,
                    txtBitTarihi.Text,
                    Convert.ToInt32(ddlTerapiDurumu.SelectedValue),
                    txtNot1.Text, 
                    txtNot2.Text, Convert.ToInt32(ddlTerapist.SelectedValue));
            lblMesaj.Text = "Kayıt Başarı ile tamamlandı";
            lblMesaj.ForeColor = Color.Green;
            btnGuncelle.Visible = true;
            btnSil.Visible = true;
            GirisBilgileriTemizle();
            GirisTabiniAktifEt();
        }
   
        private string KayitEkle(int KullaniciNo, string TerapiAdi, int TerapiTipi, int TerapiOdasi, string BasTarihi, string BitTarihi, int TerapiDurumu, string not1, string not2, int terapistId)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                return (string)SqlHelper.ExecuteScalar(connectionString, "SP_KULLANICI_TERAPI_BILGILERI_KAYDET", KullaniciNo, TerapiAdi, TerapiTipi, TerapiOdasi, BasTarihi, BitTarihi, TerapiDurumu, not1, not2, terapistId);
            }
        }
        public void GirisBilgileriTemizle()
        {
            txtTerapiAd.Text = "";
            txtBasTarihi.Text = "";
            txtBitTarihi.Text = "";
            txtNot1.Text = "";
            txtNot2.Text = "";
            ddlHasta.SelectedValue = "0";
            ddlTerapiTipi.SelectedValue = "0" ;
            ddlTerapiOda.SelectedValue = "0" ;
            ddlTerapiDurumu.SelectedValue = "0";
        }
        private void KayitGuncelle(int TerapiId, int KullaniciNo, string TerapiAdi, int TerapiTipi, int TerapiOdasi, string BasTarihi, string BitTarihi, int TerapiDurumu, string not1, string not2, int terapistId)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlHelper.ExecuteNonQuery(connectionString, "SP_KULLANICI_TERAPI_BILGILERI_GUNCELLE", TerapiId, KullaniciNo, TerapiAdi, TerapiTipi, TerapiOdasi, BasTarihi, BitTarihi, TerapiDurumu, not1, not2, terapistId);
            }
        }
        private void KayitSil(int TerapiId)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlHelper.ExecuteNonQuery(connectionString, "SP_KULLANICI_TERAPI_BILGILERI_SIL", TerapiId);
            }
        }
        protected void btnFiltreTemizle_Click(object sender, EventArgs e)
        {
            ddlSorguTerapiOda.SelectedValue = "0";
            ddlSorguTerapiTipi.SelectedValue = "0";
            ddlSorguTerapist.SelectedValue = "0" ;
            ddlSorguHasta.SelectedValue = "0";
            txtSorguTerapiAdi.Text = "";
           
            SorguTabiniAktifEt();
        }
        protected void btnSorguEkrani_Click(object sender, EventArgs e)
        {

            dgTerapiler.DataSource = TerapiSorgula(
                Convert.ToInt32( ddlSorguHasta.SelectedValue) , 
                Convert.ToInt32(ddlSorguTerapist.SelectedValue),
                txtSorguTerapiAdi.Text,
                Convert.ToInt32(ddlSorguTerapiTipi.SelectedValue),
                Convert.ToInt32(ddlSorguTerapiOda.SelectedValue));
            dgTerapiler.DataBind();
            dgTerapiler.Visible = true;
            SorguTabiniAktifEt();


        }
        public DataSet TerapiSorgula(int Hasta, int terapist, String TerapiAdi, int TerapiTipi, int TerapiOdasi)
        {
            return SqlHelper.ExecuteDataset(connectionString, "SP_KULLANICI_TERAPI_BILGILERI_LISTELE", Hasta, terapist, TerapiAdi, TerapiTipi, TerapiOdasi);
        }
        private void SorguTabiniAktifEt()
        {

            divSorgulama.Attributes.Remove("class");
            divSorgulama.Attributes.Add("class", "tab-pane fade in active");
            divGenelBilgiler.Attributes.Remove("class");
            divGenelBilgiler.Attributes.Add("class", "tab-pane fade");
            liGenelBilgilerTab.Attributes.Remove("class");
            lisorgulama.Attributes.Add("class", "active");
        }
        private void GirisTabiniAktifEt()
        {
            divGenelBilgiler.Attributes.Remove("class");
            divGenelBilgiler.Attributes.Add("class", "tab-pane fade in active");
            divSorgulama.Attributes.Remove("class");
            divSorgulama.Attributes.Add("class", "tab-pane fade");
            lisorgulama.Attributes.Remove("class");
            liGenelBilgilerTab.Attributes.Add("class", "active");
        }


        protected void btnSil_Click(object sender, EventArgs e)
        {
            if (hdnTerapiNo.Value == "" || hdnTerapiNo.Value == "0")
            {
                lblMesaj.Text = "terapi seçimi yapılmamış veya kaydedilmemiş olabilir. ";
                lblMesaj.ForeColor = Color.Red;
            }
            else
            {
                KayitSil(int.Parse(hdnTerapiNo.Value));
                lblMesaj.Text = "kayıt başarı ile silindi";
                lblMesaj.ForeColor = Color.Green;
                GirisTabiniAktifEt();
            }

        }

        protected void btnGuncelle_Click(object sender, EventArgs e)
        {
            if (hdnTerapiNo.Value == "" || hdnTerapiNo.Value == "0")
            {
                lblMesaj.Text = "terapi seçimi yapılmamış veya  kaydedilmemiş olabilir. ";
                lblMesaj.ForeColor = Color.Red;
            }
            else
            {
                
                KayitGuncelle(int.Parse(hdnTerapiNo.Value), 
                    Convert.ToInt32(ddlHasta.SelectedValue),
                    txtTerapiAd.Text,
                    Convert.ToInt32(ddlTerapiTipi.SelectedValue),
                    Convert.ToInt32(ddlTerapiOda.SelectedValue),
                    txtBasTarihi.Text,
                    txtBitTarihi.Text,
                    Convert.ToInt32(ddlTerapiDurumu.SelectedValue),
                    txtNot1.Text,
                    txtNot2.Text, Convert.ToInt32(ddlTerapist.SelectedValue));
                lblMesaj.Text = "kayıt başarı ile güncellendi";
                lblMesaj.ForeColor = Color.Green;
                GirisTabiniAktifEt();
            }
        }
    }
}