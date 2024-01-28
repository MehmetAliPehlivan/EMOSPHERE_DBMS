
window.onbeforeprint = (function () {

    try {
        pnlSorguKriter.style.visibility = "hidden";
        //pnlSorguKriter.className="noprint"
        divMenu.style.display = "none";
        pnlSorguSonuc.style.previousWidth = pnlSorguSonuc.style.width
        // pnlSorguSonuc.style.width="100%"
        //	  
        /* var td=document.getElementsByTag("TD")
          var i=0
          var len=td.length
           for(i=0;i<len;i++)
           {
            td[i].className="smallFont"
           }*/

        pnlSorguSonuc.style.top = 0;
        //  pnlSorguSonuc.className="print";
        pnlSorguSonuc.style.position = "absolute"

        dgSorguSonuc.style.width = "100%"
        dgSorguSonuc.style.previousWidth = dgSorguSonuc.style.width
    } catch (e) {
        //alert("Print Hatasi")
    }

});


window.onafterprint = (function () {
    try {
        pnlSorguKriter.className = ""
        pnlSorguKriter.style.visibility = "visible";
        divMenu.style.display = "";
        pnlSorguSonuc.style.top = 100;
        pnlSorguSonuc.style.width = pnlSorguSonuc.style.previousWidth
        pnlSorguSonuc.style.position = "relative"
        document.body.className = ""
        pnlSorguSonuc.media = "screen"
        dgSorguSonuc.media = "screen"
        dgSorguSonuc.style.width = dgSorguSonuc.style.previousWidth
    } catch (e) {
        //alert("Print Hatasi"+e.message)
    }

});


/*function IsServerSide()  //btnSorgulaya basildiginda yeni pencere acmasi için bunun bir rapor sayfasi olmasi gerekir.
{									//bunu da tabloadinin Xls,Html veya PDF olmasindan anlayabiliriz
	var tabloAdi=ExcelTabloAdiOku();    
	if (tabloAdi=="Xls" || tabloAdi=="Html" || tabloAdi=="Pdf" ) return true;
	return false;	
}  */

function ExceleAktar2() {
    ExceleAktar(ExcelTabloAdiOku())
    return false;
}
window.onload = (function () {

    //*********
    WindowLoadMetodu();
    //***********

    //btnSorgulaya basildiginda yeni ekran açmasi için
    try {
        var tabloAdi = ExcelTabloAdiOku();
        if (tabloAdi == "Xls" || tabloAdi == "Html" || tabloAdi == "Pdf") {
            document.forms[0].btnSorgula.attachEvent("onclick", ExceleAktar2)
        }
    }
    catch (e) {
    }

});
function WindowLoadMetodu() {
    window.onerror = onerror;

    var obj = document.body.getElementsByTagName("DIV");
    for (var i = 0, j = obj.length; i < j; i++) {
        if (obj[i].id == null) continue;
        if (obj[i].id.indexOf("ValidationSummary1") > -1) {  //alert('2');
            obj[i].innerText = '';
            break;
        }
    }
}
window.onerror = (function (msg, url, lineNum) {
    //alert("JavaScript Hatasi Olustu:\n" + msg + "\n" + "Satir:" + lineNum)
    console.log("JavaScript Hatasi Olustu:\n" + msg + "\n" + "Satir:" + lineNum)
});

function InitialValidate() {
    Page_ClientValidate(); alert(Page_IsValid)
}

function __obisDoPostBack(doc, eventTarget, eventArgument) {


    //		var doc=document
    var theform = doc.forms[0];

    var x1, x2

    if (doc.getElementById("__EVENTTARGET") != "undefined" && doc.getElementById("__EVENTTARGET") != null) {
        x1 = doc.getElementById("__EVENTTARGET")
        x2 = doc.getElementById("__EVENTARGUMENT")
    }
    else {
        x1 = doc.createElement("<input type='hidden'>");
        x2 = doc.createElement("<input type='hidden'>");
        x1.id = "__EVENTTARGET";
        x1.name = "__EVENTTARGET";

        x2.id = "__EVENTARGUMENT";
        x2.name = "__EVENTARGUMENT";

        theform.appendChild(x1);
        theform.appendChild(x2);
    }

    x1.value = eventTarget;
    x2.value = eventArgument;
    theform.submit();


	/*	else
		{
		alert("jjk")
		eval__doPostBack( eventTarget, eventArgument)
		}*/

}

/*serivste kullaniliyo..PNLHeader tarafindan*/
function OpenClose(obj) {

    var parent = eval(obj.element)

    if (obj.status == "on") {

        obj.src = "../images/chevronDown.gif"
        obj.status = "off"
        parent.style.display = "none"
        return
    }
    if (obj.status == "off") {

        obj.src = "../images/chevronUp.gif"
        obj.status = "on"
        parent.style.display = ""
    }

}

function ChangeColor(obj)			 //datagriddeki rowa tiklandiginda rengin degismesi için
{
    if (event.ctrlKey) {
        alert("Kayit Sayisi:" + (obj.parentElement.rows.length - 1) + " \n (Dip toplam varsa 1 çikariniz)")
        return
    }
	/*if(event.shiftKey)
	{
	    var body=		  document.body.outerHTML.length
	    var st=document.forms[0].__VIEWSTATE.value.length
	    var p=Math.round(st/body *100)
		alert("Body          :"+body+" byte\nView State :"+st+" byte\n"+"Oran :%"+p)
		return
	}   */

    if (obj.rowIndex == 0) return

    if (obj.bgColor == "#c3d6e6") {
        obj.className = obj.oldClassName
        obj.bgColor = "transparent";
    }
    else {
        obj.bgColor = "#c3d6e6"
        obj.oldClassName = obj.className
        obj.className = ""
    }
    //alert(obj.bgColor)

}
function ChangeCursor() {
    alert('deneme')
    //document.body.style.cursor='progress'
}

/*****************************************************************************/
// Sedef, 23.06.2004: Verilen bir stringin sag ve solundaki bosluklar trim edilmis halini döndürür.
function trimStr(item) {
    tmp = new String(item);
    if (tmp.indexOf(" ") != -1) {
        if (tmp.indexOf(" ") == 0) {
            tmp = tmp.substring(1, tmp.length);
            trimStr(tmp);
        }
    }
    if (tmp.lastIndexOf(" ") != -1) {
        if (tmp.lastIndexOf(" ") >= tmp.length - 1) {
            tmp = tmp.substring(0, tmp.length - 1);
            trimStr(tmp);
        }
    }
    return tmp;
}
/*****************************************************************************/
// Sedef, 07.02.2005: Bu fonksiyon FormatTutar.js dosyasindaydi. O dosya NumberBox tarafindan kullaniliyor. 
// GnlMainForm'dan türeyen tüm sayfalar Print.js dosyasini include ettiginden fonksiyon bu dosyaya alinarak 
// tüm sayfalarin kullanabilmesi saglaniyor. 
function OpenWindow(redirectStr) {
    var newWindow = window.open(redirectStr,
        null, "height=700,width=1000,status=yes,toolbar=no,menubar=no,resizable =yes,scrollbars=yes ");
    return newWindow;
}
/*****************************************************************************/


function OBISDG_Tumunusec(ChekBoxName, DgName, AnaChekUID) {
    if (document.getElementById(DgName) != null) {

        var dgCheName = AnaChekUID;
        //alert (dgCheName);
        //alert(AnaChekUID);
        var j = document.getElementById(DgName).rows.length
        //alert(j);
        for (var i = 2; i <= j; i++) {

            var str = DgName + ":_ctl" + (i) + ":" + ChekBoxName;
            //alert(str);

            var obj = document.getElementById(str);
            //alert(obj);

            if (obj != null) {
                obj.checked = document.getElementById(dgCheName).checked;//true;
            }
        }

    }

}
