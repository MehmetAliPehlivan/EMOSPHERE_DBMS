using System;
using System.Data.SqlClient;
using System.Security.Cryptography;
using System.Text;
using Microsoft.ApplicationBlocks.Data;
using System.Data;
using System.Drawing;

namespace emosphere
{
    public partial class KullaniciGirisi : System.Web.UI.Page
    {
  
        string connectionString = (string)System.Configuration.ConfigurationSettings.AppSettings["ConnectionString"];
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {

                if (Request.QueryString["UserNo"] != null)
                {
                    int UserNo = Convert.ToInt32(Request.QueryString["UserNo"]);
                    btnKaydet.Visible = false;
                    btnGuncelle.Visible = true;
                    btnSil.Visible = true;
                    var ds = KullaniciDetayGetir(UserNo);
                    TumAlanlariDoldur(UserNo, ds);
                    GirisTabiniAktifEt();
                }
            }
        }
        public void TumAlanlariDoldur(int UserNo, DataSet ds)
        {


            if (ds.Tables[0].Rows.Count > 0)
            {
               
                ddlCinsiyet.SelectedValue = ds.Tables[0].Rows[0]["CinsiyetNo"].ToString();
                hdnKullaniciNo.Value = UserNo.ToString();                
                txtAd.Text = ds.Tables[0].Rows[0]["ad"].ToString();
                txtSoyad.Text = ds.Tables[0].Rows[0]["Soyad"].ToString();
                txtEmail.Text = ds.Tables[0].Rows[0]["Email"].ToString();
                txtTel.Text = ds.Tables[0].Rows[0]["Ceptel"].ToString();
                txtAdres.Text = ds.Tables[0].Rows[0]["Adres"].ToString();
                txtDogumTarihi.Text = ds.Tables[0].Rows[0]["DogumTarihi"].ToString();
                txtProfilResmi.Text = ds.Tables[0].Rows[0]["Resim"].ToString();

            }
        }
        public DataSet KullaniciDetayGetir(int UserNo)
        {
            return SqlHelper.ExecuteDataset(connectionString, "SP_KULLANICI_GENEL_BILGILERI_DETAY_GETIR", UserNo);
        }
        protected void btnKaydet_Click(object sender, EventArgs e)
        {
            string ad = txtAd.Text;
            string soyad = txtSoyad.Text;
            string email = txtEmail.Text;
            string sifre = Sifrele(txtSifre.Text);
            string dogumTarihi = txtDogumTarihi.Text;
            int cinsiyet = Convert.ToInt32( ddlCinsiyet.SelectedValue);
            string adres = txtAdres.Text;
            string Ceptel = txtTel.Text;
            string profilResmi = txtProfilResmi.Text;

            hdnKullaniciNo.Value=  KayitEkle(ad, soyad, email, Ceptel, sifre, dogumTarihi, cinsiyet, adres, profilResmi);
            lblMesaj.Text = "Kayıt Başarı ile tamamlandı";
            lblMesaj.ForeColor = Color.Green;
            btnGuncelle.Visible = true;
            btnSil.Visible = true;
            GirisBilgileriTemizle();
            GirisTabiniAktifEt();
        }
        public void GirisBilgileriTemizle()
        {
            txtAd.Text = "";
            txtSoyad.Text = "";
            txtEmail.Text = "";
            txtTel.Text = "";
            txtAdres.Text = "";
            txtSifre.Text = "";
            txtProfilResmi.Text = "";
            txtDogumTarihi.Text = "";
            ddlCinsiyet.SelectedIndex = 0;
        }
        private string KayitEkle(string ad, string soyad, string email,string Ceptel, string sifre, string dogumTarihi, int cinsiyet, string adres, string profilResmi)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
               return (string) SqlHelper.ExecuteScalar(connectionString, "SP_KULLANICI_GENEL_BILGILERI_KAYDET", ad, soyad, email, Ceptel, sifre, adres, dogumTarihi, cinsiyet,  profilResmi);
            }
        }
        private void KayitGuncelle(int KullaniciNo,string ad, string soyad, string email,string Ceptel, string sifre, string dogumTarihi, int cinsiyet, string adres, string profilResmi)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlHelper.ExecuteNonQuery(connectionString, "SP_KULLANICI_GENEL_BILGILERI_GUNCELLE", KullaniciNo, ad, soyad, email, Ceptel, sifre, adres,dogumTarihi, cinsiyet, profilResmi);
            }
        }
        private void KayitSil(int KullaniciNo)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlHelper.ExecuteNonQuery(connectionString, "SP_KULLANICI_GENEL_BILGILERI_SIL", KullaniciNo);
            }
        }
        protected void btnFiltreTemizle_Click(object sender, EventArgs e)
        {
            ddlSorguCinsiyet.SelectedIndex = 0;    
            txtSorguAd.Text = "";
            txtSorguSoyad.Text = "";
            txtSorguEmail.Text = "";             
            SorguTabiniAktifEt();
        }
        protected void btnSorguEkrani_Click(object sender, EventArgs e)
        {
            
            dgKullanicilar.DataSource = KullaniciSorgula(txtSorguAd.Text, txtSorguSoyad.Text,txtSorguEmail.Text,Convert.ToInt32( ddlSorguCinsiyet.SelectedValue));
            dgKullanicilar.DataBind();
            dgKullanicilar.Visible = true;
            SorguTabiniAktifEt();


        }
        public DataSet KullaniciSorgula(string Ad, string Soyad, String Email, int Cinsiyet)
        {
            return SqlHelper.ExecuteDataset(connectionString, "SP_KULLANICI_GENEL_BILGILERI_LISTELE", Ad,Soyad,Email,Cinsiyet);
        }
        private void SorguTabiniAktifEt()
        {

            divKullaniciSorgulama.Attributes.Remove("class");
            divKullaniciSorgulama.Attributes.Add("class", "tab-pane fade in active");
            divGenelBilgiler.Attributes.Remove("class");
            divGenelBilgiler.Attributes.Add("class", "tab-pane fade");
            liGenelBilgilerTab.Attributes.Remove("class");
            lisorgulama.Attributes.Add("class", "active");
        }
        private void GirisTabiniAktifEt()
        {
            divGenelBilgiler.Attributes.Remove("class");
            divGenelBilgiler.Attributes.Add("class", "tab-pane fade in active");
            divKullaniciSorgulama.Attributes.Remove("class");
            divKullaniciSorgulama.Attributes.Add("class", "tab-pane fade");
            lisorgulama.Attributes.Remove("class");
            liGenelBilgilerTab.Attributes.Add("class", "active");
        }

        private string Sifrele(string plainText)
        {
            using (SHA256 sha256 = SHA256.Create())
            {
                byte[] hashedBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(plainText));

                StringBuilder builder = new StringBuilder();
                for (int i = 0; i < hashedBytes.Length; i++)
                {
                    builder.Append(hashedBytes[i].ToString("x2"));
                }

                return builder.ToString();
            }
        }

        protected void btnSil_Click(object sender, EventArgs e)
        {
            if(hdnKullaniciNo.Value=="" || hdnKullaniciNo.Value=="0")
            {
                lblMesaj.Text = "kullanici seçimi yapılmamış veya kullanıcı kaydedilmemiş olabilir. ";
                lblMesaj.ForeColor = Color.Red;
            }
            else
            {
                KayitSil(int.Parse(hdnKullaniciNo.Value));
                lblMesaj.Text = "kayıt başarı ile silindi";
                lblMesaj.ForeColor = Color.Green;
                GirisTabiniAktifEt();
            }
           
        }

        protected void btnGuncelle_Click(object sender, EventArgs e)
        {
            if (hdnKullaniciNo.Value == "" || hdnKullaniciNo.Value == "0")
            {
                lblMesaj.Text = "kullanici seçimi yapılmamış veya kullanıcı kaydedilmemiş olabilir. ";
                lblMesaj.ForeColor = Color.Red;
            }
            else
            {
                string ad = txtAd.Text;
                string soyad = txtSoyad.Text;
                string email = txtEmail.Text;
                string sifre = Sifrele(txtSifre.Text);
                string dogumTarihi = txtDogumTarihi.Text;
                int cinsiyet = Convert.ToInt32(ddlCinsiyet.SelectedValue);
                string adres = txtAdres.Text;
                string profilResmi = txtProfilResmi.Text;
                string Ceptel = txtTel.Text;
                KayitGuncelle(int.Parse(hdnKullaniciNo.Value),ad,soyad,email, Ceptel,sifre, dogumTarihi,cinsiyet,adres,profilResmi);
                lblMesaj.Text = "kayıt başarı ile güncellendi";
                lblMesaj.ForeColor = Color.Green;
                GirisTabiniAktifEt();
            }
        }
    }
}