function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);


function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function P7_autoLayers() { //v1.2 by PVII
 var g,b,k,f,args=P7_autoLayers.arguments;
 var a = parseInt(args[0]);if(isNaN(a))a=0;
 if(!document.p7setc) {p7c=new Array();document.p7setc=true;
  for (var u=0;u<10;u++) {p7c[u] = new Array();}}
 for(k=0; k<p7c[a].length; k++) {
  if((g=MM_findObj(p7c[a][k]))!=null) {
   b=(document.layers)?g:g.style;b.visibility="hidden";}}
 for(k=1; k<args.length; k++) {
  if((g=MM_findObj(args[k])) != null) {
   b=(document.layers)?g:g.style;b.visibility="visible";f=false;
   for(j=0;j<p7c[a].length;j++) {
    if(args[k]==p7c[a][j]) {f=true;}}
  if(!f) {p7c[a][p7c[a].length++]=args[k];}}}
}
function myOpenWindow(winURL, winName, winFeatures, winObj)
{
  var theWin; // this will hold our opened window 
  alert(winObj);
  // first check to see if the window already exists
  if (winObj != null)
  {
    // the window has already been created, but did the user close it?
    // if so, then reopen it. Otherwise make it the active window.
    if (!winObj.closed) {
      winObj.focus();
      return winObj;
    } 
    // otherwise fall through to the code below to re-open the window
  }

  // if we get here, then the window hasn't been created yet, or it
  // was closed by the user.
  theWin = window.open(winURL, winName, winFeatures); 
  return theWin;
} 

function MM_showHideLayers() { //v3.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v='hide')?'hidden':v; }
    obj.visibility=v; }
}

function IMenuListele(form, xmldocument){
	IMenuList = xmldocument.documentElement.selectNodes("//IMenu");
	for (i=0; i <IMenuList.length; i++){	
		var oOption=new Option();
		oOption.value=IMenuList.item(i).attributes(0).text;
		oOption.text=IMenuList.item(i).attributes(1).text;
		form.lboxIMenu.options.add(oOption);
	}					
}
  
function IIMenuListele(form, xmldocument, IMenuSelected){
	topLevel = xmldocument.documentElement.selectNodes("//IMenu[@IMenuNo='"+IMenuSelected+"']");
	IslemList=topLevel.item(0).childNodes;
	for (i=form.lboxIIMenu.options.length-1; i >=0; i--){
		form.lboxIIMenu.options.remove(i); 
	}
	for (i=form.lboxIslem.options.length-1; i >=0; i--){
		form.lboxIslem.options.remove(i); 
	}
	for (i=0; i <IslemList.length; i++){	
		var oOption=new Option();
		oOption.value=IslemList.item(i).attributes(0).text;
		oOption.text=IslemList.item(i).attributes(1).text;
		form.lboxIIMenu.options.add(oOption);
	}
}
			
function IslemListele(form, xmldocument, IIMenuSelected){
	topLevel = xmldocument.documentElement.selectNodes("//IIMenu[@IIMenuNo='"+IIMenuSelected+"']");
	IIMenuList=topLevel.item(0).childNodes;
	for (i=form.lboxIslem.options.length-1; i >=0; i--){
		form.lboxIslem.options.remove(i); 
	}
	for (i=0; i <IIMenuList.length; i++){	
		var oOption=new Option();
		oOption.value=IIMenuList.item(i).attributes(2).text;
		oOption.text=IIMenuList.item(i).attributes(0).text+' - '+IIMenuList.item(i).attributes(1).text;
		form.lboxIslem.options.add(oOption);
	}
}


function IMenuYaz(form, xmldocument){
	IMenuList = xmldocument.documentElement.selectNodes("//IMenu");
       
        document.write('<div id="siteharitasi" name="siteharitasi" style=position:absolute;top:470px;left:10px;visibility:"hidden">');
	for (j=0; j <IMenuList.length; j++){	
				
              document.write('<br><b>'+ IMenuList.item(j).attributes(1).text + '</b>');
                IIMenuYaz(form, xmldocument, IMenuList.item(j).attributes(0).text);
              
	}
	document.write('</div>');					
}
  
function IIMenuYaz(form, xmldocument, IMenuSelected){
	topLevel = xmldocument.documentElement.selectNodes("//IMenu[@IMenuNo='"+IMenuSelected+"']");
	IslemList=topLevel.item(0).childNodes;
	
	for (i=0; i <IslemList.length; i++){	
				
document.write('<br>&nbsp;&nbsp;&nbsp;&nbsp;<b>'+IslemList.item(i).attributes(1).text +'</b>');
IslemYaz(form, xmldocument, IslemList.item(i).attributes(0).text);
	}
}
			
function IslemYaz(form, xmldocument, IIMenuSelected){
	topLevel = xmldocument.documentElement.selectNodes("//IIMenu[@IIMenuNo='"+IIMenuSelected+"']");
	IIMenuList=topLevel.item(0).childNodes;
        var yaz;
	var bosluk;

        
	bosluk='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
        document.write('<table border=0 width=800 cellspacing=-5 cellpadding=-5>');
	for (k=0; k <IIMenuList.length; k++){	
                //uzunluk = IIMenuList.item(k).attributes(1).text.length;
		yaz= '[<a href=Javascript:pencereAc("'+IIMenuList.item(k).attributes(2).text.replace("#","*")+'")'+		

	     		       		
            	'><font size=1>'+
	               IIMenuList.item(k).attributes(1).text+
		       '('+IIMenuList.item(k).attributes(0).text+')</font></a>]'
                
		if(k%2==0){			
	            document.write('<tr width=800 height=20><td width=400>'+bosluk+yaz+'</td>');
		}
		else{
		   
		    document.write('<td width=400>'+'' + yaz+'</td></tr>');

		}
        }
        document.write('</table>');
	

}




function IMenuIslemNoluArray(form, xmldocument){
	IMenuList = xmldocument.documentElement.selectNodes("//IMenu");
       
       for (j=0; j <IMenuList.length; j++){	
				
              IIMenuIslemNoluArray(form, xmldocument, IMenuList.item(j).attributes(0).text);
              
	}
}
  
function IIMenuIslemNoluArray(form, xmldocument, IMenuSelected){
	topLevel = xmldocument.documentElement.selectNodes("//IMenu[@IMenuNo='"+IMenuSelected+"']");
	IslemList=topLevel.item(0).childNodes;
	
	for (i=0; i <IslemList.length; i++){	
          IslemNoluArray(form, xmldocument, IslemList.item(i).attributes(0).text);
	}
}

var myMenu=new Array;
function IslemNoluArray(form, xmldocument, IIMenuSelected){
	topLevel = xmldocument.documentElement.selectNodes("//IIMenu[@IIMenuNo='"+IIMenuSelected+"']");
	IIMenuList=topLevel.item(0).childNodes;
      
	var myLink;	
	var myIslem;	

        myMenu[50000]="Bu işlem numaralı sayfa mevcut değildir!";
	for (k=0; k <IIMenuList.length; k++){	
           myLink=IIMenuList.item(k).attributes(2).text.replace("#","*");
	   myIslem=IIMenuList.item(k).attributes(0).text;
	   myMenu[myIslem]=myLink;
  	     		      						
        }


}
			function pencereAc(theURL){				
				newW=screen.width-10;
				newH=screen.height-80;
				var popUp = window.open(theURL, '' ,"toolbar=no,location=no,status=yes,menubar=no,scrollbars=yes,resizable=yes,top=0,left=0,width="+ newW +",height="+ newH);	
		
				popUp.focus();
			}



function myOpenWindow(winURL, winName, winFeatures, winObj)
{
  try{
  var theWin; // this will hold our opened window 
  //alert(winObj);
 // alert(winObj.document.title);
  // first check to see if the window already exists

  if (winObj != null)
  {
    // the window has already been created, but did the user close it?
    // if so, then reopen it. Otherwise make it the active window.


    if (!winObj.closed) 
    {
    
		//alert('Acik');
		if(winObj.document.title=='.:: Birmot - Otonet ::.')
		{
			winObj.focus();
			return winObj;
		}
		else
		{
			 theWin = window.open(winURL, winName, winFeatures); 
			 theWin.focus();
			 return theWin;
		}
      
    } 
   
    
    
    
    // otherwise fall through to the code below to re-open the window
  }
  // if we get here, then the window hasn't been created yet, or it
  // was closed by the user.
 // alert('yeni acacak');
  theWin = window.open(winURL, winName, winFeatures); 
  theWin.focus();
  return theWin;
  }
  catch (err)
  {
    var theWin2 ;
    theWin2 = window.open(winURL, winName, winFeatures); 
    theWin2.focus();
	return theWin2;
	
} 
return theWin;
}
