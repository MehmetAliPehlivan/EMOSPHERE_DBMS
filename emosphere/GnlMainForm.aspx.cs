using System;
using System.Web;
using System.Web.UI;
using System.Web.Security;

namespace OBIS_UI_GNL
{
    public interface IConfirm
    {
        void Confirm();
    }
 
    public class GNLMainForm : System.Web.UI.Page
    {
   
        #region Web Form Designer generated code
        override protected void OnInit(EventArgs e)
        {       
            InitializeComponent();
            base.OnInit(e);       
        }

       
        private void InitializeComponent()
        {
            Page.Init += Page_Init;
            this.Load += new System.EventHandler(this.Page_Load);

        }

        private const string AntiXsrfTokenKey = "__AntiXsrfToken";
        private const string AntiXsrfUserNameKey = "__AntiXsrfUserName";
        private string _antiXsrfTokenValue;
        protected void Page_Init(object sender, EventArgs e)
        {
            //First, check for the existence of the Anti-XSS cookie
            var requestCookie = Request.Cookies[AntiXsrfTokenKey];
            Guid requestCookieGuidValue;

            //If the CSRF cookie is found, parse the token from the cookie.
            //Then, set the global page variable and view state user
            //key. The global variable will be used to validate that it matches in the view state form field in the Page.PreLoad
            //method.
            if (requestCookie != null
            && Guid.TryParse(requestCookie.Value, out requestCookieGuidValue))
            {
                //Set the global token variable so the cookie value can be
                //validated against the value in the view state form field in
                //the Page.PreLoad method.
                _antiXsrfTokenValue = requestCookie.Value;

                //Set the view state user key, which will be validated by the
                //framework during each request
                Page.ViewStateUserKey = _antiXsrfTokenValue;
            }
            //If the CSRF cookie is not found, then this is a new session.
            else
            {
                //Generate a new Anti-XSRF token
                _antiXsrfTokenValue = Guid.NewGuid().ToString("N");

                //Set the view state user key, which will be validated by the
                //framework during each request
                Page.ViewStateUserKey = _antiXsrfTokenValue;

                //Create the non-persistent CSRF cookie
                var responseCookie = new HttpCookie(AntiXsrfTokenKey)
                {
                    //Set the HttpOnly property to prevent the cookie from
                    //being accessed by client side script
                    HttpOnly = true,

                    //Add the Anti-XSRF token to the cookie value
                    Value = _antiXsrfTokenValue
                };

                //If we are using SSL, the cookie should be set to secure to
                //prevent it from being sent over HTTP connections
                if (FormsAuthentication.RequireSSL &&
                Request.IsSecureConnection)
                    responseCookie.Secure = true;

                //Add the CSRF cookie to the response
                Response.Cookies.Set(responseCookie);
            }

            Page.PreLoad += GNLMainForm_Page_PreLoad;
        }
        protected void GNLMainForm_Page_PreLoad(object sender, EventArgs e)
        {
            //During the initial page load, add the Anti-XSRF token and user
            //name to the ViewState
            if (!IsPostBack)
            {
                //Set Anti-XSRF token
                ViewState[AntiXsrfTokenKey] = Page.ViewStateUserKey;

                //If a user name is assigned, set the user name
                ViewState[AntiXsrfUserNameKey] =
                Context.User.Identity.Name ?? String.Empty;
            }
            //During all subsequent post backs to the page, the token value from
            //the cookie should be validated against the token in the view state
            //form field. Additionally user name should be compared to the
            //authenticated users name
            else
            {
                //Validate the Anti-XSRF token
                if ((string)ViewState[AntiXsrfTokenKey] != _antiXsrfTokenValue
                || (string)ViewState[AntiXsrfUserNameKey] !=
                (Context.User.Identity.Name ?? String.Empty))
                {
                    throw new InvalidOperationException("Validation of Anti-XSRF token failed.");
                }
            }
        }
        #endregion
   
        private void Page_Load(object sender, System.EventArgs e)        {
         
        }


        private void ShowMessage(string mesaj, bool confirm)
        {
            mesaj = mesaj.Replace("'", "");
            mesaj = mesaj.Replace(Environment.NewLine, "");
            string msgScript = "<script language=javascript>alert('" + mesaj + "')</script>";
            if (confirm)
            {
                msgScript = "<script language=javascript>if (confirm('" + mesaj + "'))" + GetPostBackEventReference(this, "Confirm") + "</script>";
            }

            RegisterStartupScript("Mesaj", msgScript);
        }
        protected void ConfirmationBox(string mesaj, string olay)
        {
            mesaj = mesaj.Replace("'", "");
            mesaj = mesaj.Replace(Environment.NewLine, "");
            string msgScript = "<script language=javascript>alert('" + mesaj + "')</script>";
            msgScript = "<script language=javascript>if (confirm('" + mesaj + "')) __doPostBack('" + olay + "','Confirm')</script>";
            RegisterStartupScript("Mesaj", msgScript);
        }
        protected void ShowConfirmationBox(string mesaj)
        {
            ShowMessage(mesaj, true);

        }
        protected void ShowMessageBox(string mesaj)
        {
            ShowMessage(mesaj, false);
        }
        protected void ShowMessageBox(string mesaj1, string mesaj2)
        {
            mesaj1 = mesaj1.Replace("'", "");
            mesaj1 = mesaj1.Replace(Environment.NewLine, "");

            mesaj2 = mesaj2.Replace("'", "");
            mesaj2 = mesaj2.Replace(Environment.NewLine, "");

            string msgScript = "<script language=javascript>";
            if (mesaj1 != "")
                msgScript = msgScript + "alert('" + mesaj1 + "');";
            if (mesaj2 != "")
                msgScript = msgScript + " alert('" + mesaj2 + "') ";

            msgScript = msgScript + "</script>";


            RegisterStartupScript("Mesaj", msgScript);
        }

     


    
    }
}

