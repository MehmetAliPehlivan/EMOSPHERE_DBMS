function ExcelTabloAdiOku(){
	var objExcelTabloAdi=document.all.hdExcelTabloAdi;
	if (objExcelTabloAdi==null) return "Empty";
	else return objExcelTabloAdi.value;	
}



function ExceleAktar(tabloAdi)
{   
      	
      	//S.Y. 12.08.2005	
		if (typeof(Page_Validators) != "undefined"){
			Page_ClientValidate();
			if(Page_IsValid == false)
			return;
		   }
		   
    //var hdExcelTabloAdi=ExcelTabloAdiOku();    
    //alert(tabloAdi);
    if (tabloAdi=="Empty") return;
    if (tabloAdi=="Xls" || tabloAdi=="Html" || tabloAdi=="Pdf" )
    {
		
		
		/*for(var i=0;i<document.scripts.length ;i++)
		{
			alert(document.scripts[i].src)
		}   */
		var win= window.open();
		
		
		var newDoc=win.document;
		win.Page_ValidationVer=10
		newDoc.Page_ValidationVer=10
		
		//win.clientInformation="dummy"
		


		newDoc.Aktar=true;
		newDoc.write("<body>");
		//newDoc.write(func)
		//var html=document.body.innerHTML
		var html=document.forms[0].outerHTML
		html="<script language=javascript>var clientInformation=20</script>" +html
		newDoc.write(html)		
		newDoc.write("</body>");
		
		newDoc.forms[0].onsubmit=null
		
		var theform = newDoc.forms[0];
		var x1=newDoc.createElement("<input type='hidden'>");		
		x1.id="Excel";
		x1.name="Excel";
		x1.value=tabloAdi;
		theform.appendChild(x1);
		
		__obisDoPostBack(newDoc,'btnSorgula','')
		//newDoc.exec('btnSorgula','')
		
		return;
		

		
/*		var objDgSorguSonuc=document.all.dgSorguSonuc;
		if (objDgSorguSonuc !=null) return;
		
*/	
	// __obisDoPostBack('btnSorgula','');
		/*if (typeof(__doPostBack)=="undefined")
		else __doPostBack("btnSorgula","");
		return;*/
		
		 //__doPostBack("btnSorgula","");
    }
	
	try{		  //objeyi bulamazsa
	var obj= eval(tabloAdi)
	}catch(e)
	{
		return;
	}
	//if (typeof(obj)=="undefined") return
	//alert(tabloAdi)
	/*=============================Okan A. 28-11-2011 Kapatıldı =====================
    var  sHTML =obj.outerHTML//window.document.getElementById(tabloAdi).outerHTML
    ===============================Okan A. 28-11-2011 Kapatıldı=====================*/
      
      var exApp,exWbook
      
      try{
	 var exApp = new ActiveXObject("Excel.Application");
		exWbook = exApp.WorkBooks.Add
			exApp.Visible = true
     
	}catch(e)
	{
	 alert(e.message)
		alert("Excel objesi yaratilamadi. Tarayicinizin Menüsünden 'Tools->Internet Options->Security->Internet->Custom Level->ActiveX Controls and Plug-ins' bölümünde yer alan güvenlik ayarlarindan Initilaize and script Activex controls not marked as safe enable edilmesi veya yeterli olmaz ise diger 'ActiveX Controls and Plug-ins' basligi altindakileri prompt(ilk olarak size sorulur) veya dogrudan enable yaparak çalisir hale getirebilirsiniz! ")
		return
	}
	/*=======================================================================
	===============================28.11.2011 Okan A. Oluşturuldu ===========
	=========================================================================*/
	 var x = obj.rows
	 for (i = 0; i < x.length; i++) {
        var y = x[i].cells

        for (j = 0; j < y.length; j++) {
            exApp.Cells(i + 1, j + 1).Value = y[j].innerText
        }
    }
    /*=======================================================================
	===============================28.11.2011 Okan A. Oluşturuldu ===========
	=========================================================================*/
	 
	 //exWbook=exApp.WorkBooks.Add
	 //var exWbook = exApp.Workbooks(1).Worksheets(1);
	 //exWbook.Worksheets(1).Text=sHTML
     //exApp.Visible = true
    
     //var sheet=exWbook.Worksheets.Add
   //   exWbook.HTMLProject.HTMLProjectItems("Sheet1").Text =sHTML
   /*=============================Okan A. 28-11-2011 Kapatıldı===========
     exWbook.HTMLProject.HTMLProjectItems("Sheet1").Text =sHTML
      ==========================Okan A. 28-11-2011 Kapatıldı================*/
      
    /*  if(typeof("document.ExceleAktarExt")!="undefined")
                       ExceleAktarExt(exWbook)
       else alert ("jjkjkkkkkkkkkk")*/
       /*===================================okan a 28-11-2011 Kapatıldı======
      exWbook.HTMLProject.RefreshDocument(true)
      ===================================okan a 28-11-2011 Kapatıldı======*/
																	
     
     
      //else alert("jjj")                 

/*exWbook.Cells(1, 1).Value = "First Cell";
exWbook.Cells(1, 2).Value = "Second Cell";
exWbook.Cells(1, 3).Value = "Third Cell";
exWbook.Cells(1, 4).Value = "Fourth Cell";
exWbook.Cells(1, 5).Value = "Fifth Cell";
      */
      		
}