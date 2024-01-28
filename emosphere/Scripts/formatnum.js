function  format_val(z,seperator,decimalseperator)
{

var x=z.value
var y = parseInt(x);
var isNotNum = false;
var AfterPoint = "";
var con = 0;
var last =0;
var format = "";
var negatif=false;

if(typeof(seperator)=="undefined")
   seperator="."
   
 if(typeof(decimalseperator)=="undefined")
    decimalseperator=",";

for (j = 0; j < x.length; j++) {
    if ((x.substring(j,j+1) != "0") &&
        (x.substring(j,j+1) != "1") &&
        (x.substring(j,j+1) != "2") &&
        (x.substring(j,j+1) != "3") &&
        (x.substring(j,j+1) != "4") &&
        (x.substring(j,j+1) != "5") &&
        (x.substring(j,j+1) != "6") &&
        (x.substring(j,j+1) != "7") &&
        (x.substring(j,j+1) != "8") &&
        (x.substring(j,j+1) != "9") &&
        (x.substring(j,j+1) != ".") &&
        (x.substring(j,j+1) != ",") &&
        (x.substring(j,j+1) != "-")){
	isNotNum = true;
    }
}

if (isNotNum)  {
   //alert("Sayisal olmayan bir değer girdiniz. Lütfen girdiginiz değeri kontrol ediniz! " + y);
	//z.select();
	//z.focus();  
	return x ;
			 }

if(( x.indexOf(seperator)  >  x.indexOf(decimalseperator)) && 
	 (x.indexOf(decimalseperator) != -1)) {

	//alert("Yanlis Format " + y) 
	//z.focus();
	return x;	
}

if (x.lastIndexOf(decimalseperator)!=x.indexOf(decimalseperator)){

	//alert("Yanlis Format " + y) 
	//z.focus();
	return x;
}

if(x.indexOf("-")!=-1 && x.length==1){
		return x;
}



if (x.indexOf(seperator)!=-1){


if (x.indexOf(decimalseperator)==-1){


 
	for (j = x.length - 1 ; j >-1; j--) {

	if (con >2){  
	
		if (x.substr(j,1) != seperator){
			//alert("Yanlis Format " + y) 
			//z.focus();
			return x;	}

		else 
			con=0
			}				
	
	else {
		if ((x.substr(j,1) == "0") ||
        	(x.substr(j,1) == "1") ||
        	(x.substr(j,1) == "2") ||
        	(x.substr(j,1) == "3") ||
       		(x.substr(j,1) == "4") ||
        	(x.substr(j,1) == "5") ||
        	(x.substr(j,1) == "6") ||
        	(x.substr(j,1) == "7") ||
        	(x.substr(j,1) == "8") ||
        	(x.substr(j,1) == "9")){
		con=con+1;	
			}
		else{

	//	alert("Yanlis Format " + y) 
	
		//z.focus();
		return x;}
	//else
	}
	//for
	}
	//if
	}
else{
	for (j =x.indexOf(decimalseperator) - 1 ; j >-1 ; j--) {

	if (con >2){  
	
		if (x.substr(j,1) != seperator){
			//alert("Yanlis Format " + y) 
		//	z.focus();
			return x;}

		else {
			con=0;
			}	
		}	
	else {
		if ((x.substr(j,1) == "0") ||
        	(x.substr(j,1) == "1") ||
        	(x.substr(j,1) == "2") ||
        	(x.substr(j,1) == "3") ||
       		(x.substr(j,1) == "4") ||
        	(x.substr(j,1) == "5") ||
        	(x.substr(j,1) == "6") ||
        	(x.substr(j,1) == "7") ||
        	(x.substr(j,1) == "8") ||
        	(x.substr(j,1) == "9")){
		con=con+1;	
			}
		else{

		//alert("Yanlis Format " + y)
		//	z.focus(); 
			return x;}
	}
	}
}
}
else
{
//Eger negatif bir sayi ise "-"  yokken formatlanacak sonra - basina eklenecek
if(x.indexOf("-") != -1)
{
		negatif=true;
		x=x.substr(1,x.length-1);
}
	if (x.indexOf(decimalseperator)==-1){
		last = x.length - 1;
		format = x.substr(0,last+2);}
	else {	
		last = x.indexOf(decimalseperator) - 1;
		format = x.substr(0,last+1);}
		

	//format = x.substr(0,last+2);
	
	if ( format.length > 3)
		{ var len = format.length;
   		var rem = len % 3;
		last=last - 2;		
		if ( rem==0 ){
		 for (j =last  ; j > rem +1   ; j= j-3) {
						
			x= x.substr(0,j) + seperator + x.substr(j)
	 
		}
			}
		else{
		
		 for (j =last  ; j > rem-2   ; j= j-3) {
			x= x.substr(0,j) + seperator + x.substr(j)

		}
	}	
}
//else	
}
if(negatif)
	x="-"+x;


return x;
}  

function ParseFloat(value)
		{
			  var regExp=/,/g
			  value =value.replace(regExp,"");
			  value =Math.round(parseFloat(value))
			  
			if (isNaN(value))
			{
			  value = "0";
			}   
			return value;
		}
		
function ParseFloatYTL(value)
		{
			value =value.replace(".","")
			var regExp=/,/g
			value =value.replace(regExp,".");	
			value =parseFloat(value);
			  
			if (isNaN(value))
			{
			  value = "0";
			}   
			return value;
		}

function NumberFormatYTL(obj)
{
obj.value=Math.round(parseFloat(obj.value)*100)/100
var x=obj.value
obj.value=x.replace(".",",")
  try{
	obj.value=format_val(obj,".",",")										
	}catch(e)
	{
	}
}

function NumberFormatYTL6(obj)
{
obj.value=Math.round(parseFloat(obj.value)*1000000)/1000000
var x=obj.value
obj.value=x.replace(".",",")
  try{
	obj.value=format_val(obj,".",",")										
	}catch(e)
	{
	}
}

function NumberFormat(obj)
{
obj.value=ParseFloat(obj.value)
var x=obj.value

  try{
	obj.value=format_val(obj,",",".")												
	}catch(e)
	{
	}
}

function NumberFormat2(obj)
{
obj.value=ParseFloat(obj.value)
var x=obj.value
	
  try{
	obj.value=format_val(obj,",",".")												
	}catch(e)
	{
	}
}

function NumberFormat22(obj)
{

obj.value=Math.round(parseFloat(obj.value)*1000)/1000
var x=obj.value
	
  try{
	obj.value=format_val(obj,"",".")												
	}catch(e)
	{
	}
		
		
}


function OpenWindow(redirectStr)
{
var newWindow=window.open(redirectStr,
			null, "height=600,width=800,status=yes,toolbar=no,menubar=no,resizable =yes,scrollbars=yes ");
return newWindow;			
}
