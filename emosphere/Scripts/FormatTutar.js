
var dSep2Java = "."; // JavaScript decimal Seperator S.Y.
// Sedef, 12.10.2004: Uygulamanın TL çalışması için myDPlaces = 0 yapıldı.
var myDPlaces = 2 ;
var myDPlaces2Oran = 2 ; //Ozan'ın istegi ve dilegi üzerine eklenmistir.:-)) S.Y.
var myDPlacesIscilikBirimFiyati = 5;
var mythousandSeperator='.';
var mydecimalSeperator=',';

function  format_val_tutar(z,seperator,decimalseperator,decimalplaces)
{

var x=z.value;
x = format_strVal_tutar(x,seperator,decimalseperator,decimalplaces);
return x;
}
function  format_val_iscilik_birim_fiyati(z,seperator,decimalseperator,decimalplaces)
{
myDPlaces=myDPlacesIscilikBirimFiyati
var x=z.value;
x = format_strVal_tutar(x,seperator,decimalseperator,decimalplaces);
return x;
}
function format_strVal_tutar(strToFormat, seperator,decimalseperator,decimalplaces)
{

if (strToFormat.length <= 3) return strToFormat;

var x=strToFormat;
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
	return x ;
			 }

if(( x.indexOf(seperator)  >  x.indexOf(decimalseperator)) && 
	 (x.indexOf(decimalseperator) != -1)) {
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


/*if (x.indexOf(decimalseperator)==-1){
   
   var dPalces = parseInt(decimalplaces)  ;
   x += decimalseperator;
   
   for(i=0; i< dPalces;i++) 
		x += "0";
     
}*/
   
if (x.indexOf(decimalseperator)!=-1){

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

x = RoundStrTutar(x);

if(negatif)
	x="-"+x;

return x;
}  
//-------------------------------------------------------------------------------------------------------------------//
// Şenay 13.09.2004 : 123.456.678,25 şeklindeki değerlerin  round(2) decimal değerini döndürür. YTL için  kullanılacak.
// DIKKAT !! ASPX Sayfalarında JavaStript kullanarak Hesaplama Yaparken Kullanılır!!
// ÖRNEK GNL/WebForm1.aspx
//------------------------------------------------------------------------------------------------------------------- //
function RunStrToDecimal(str,thousandSeperator,decimalSeperator)
{
	var sonucArr1=str.split(thousandSeperator);
	var sonuc1 = sonucArr1.join('');
	var myDecimals = Math.pow(10,myDPlaces);
	
	var sonucArr2 = sonuc1.split(decimalSeperator);
	var sonuc2 = parseFloat(sonucArr2.join(dSep2Java)); // decimal seperator in JScript
		
	//javaSript te round fonksiyonu sadece İnt e yuvarlama yapıyor..	
	//  if(Math.round(sonuc2) != 1)
	//  sonuc = Math.round(sonuc2) +  Math.round((sonuc2 - Math.round(sonuc2))*myDecimals)/myDecimals;  
    //  else     
      sonuc = Math.round(sonuc2*myDecimals)/myDecimals;

			
	//alert("Me:" + sonuc);
	if (isNaN(sonuc)) sonuc=0;
	
	return sonuc;
}



//-------------------------------------------------------------------------------------------------------------------//
// Şenay 13.12.2004 : Oran'larla ilgili formatlama yapabilmek için oluşturuldu.
//------------------------------------------------------------------------------------------------------------------- //
function RunStrToDecimal2Oran(str,thousandSeperator,decimalSeperator)
{
	var sonucArr1=str.split(thousandSeperator);
	var sonuc1 = sonucArr1.join('');
	var myDecimals = Math.pow(10,myDPlaces2Oran);
	
	var sonucArr2 = sonuc1.split(decimalSeperator);
	var sonuc2 = parseFloat(sonucArr2.join(dSep2Java)); // decimal seperator in JScript
		
	//javaSript te round fonksiyonu sadece İnt e yuvarlama yapıyor..	
	sonuc = Math.round(sonuc2) +  Math.round((sonuc2 - Math.round(sonuc2))*myDecimals)/myDecimals;  
			
	//alert("Me:" + sonuc);
	if (isNaN(sonuc)) sonuc=0;
	
	return sonuc;
}

function RunStrToDecimalIscilikBirimFiyati(str,thousandSeperator,decimalSeperator)
{
	var sonucArr1=str.split(thousandSeperator);
	
	var sonuc1 = sonucArr1.join('');
	//alert(sonuc1);
	var myDecimals = Math.pow(10,myDPlacesIscilikBirimFiyati);
	//alert(myDecimals);
	var sonucArr2 = sonuc1.split(decimalSeperator);
	//alert(sonucArr2);
	var sonuc2 = parseFloat(sonucArr2.join(dSep2Java)); // decimal seperator in JScript
	//	alert(sonuc2);
	//javaSript te round fonksiyonu sadece İnt e yuvarlama yapıyor..	
	sonuc = Math.round(sonuc2) +  Math.round((sonuc2 - Math.round(sonuc2))*myDecimals)/myDecimals;  
			
	//alert("Me:" + sonuc);
	if (isNaN(sonuc)) sonuc=0;
	
	return sonuc;
}
function StrToDecimal(str, thousandSeperator, decimalSeperator)
{
	return RunStrToDecimal(str, thousandSeperator, decimalSeperator);
}

function StrToDecimalIscilikBirimFiyati(str)
{
	return RunStrToDecimalIscilikBirimFiyati(str, mythousandSeperator, mydecimalSeperator);
}

function StrToDecimalBirimFiyat(str)
{
	return RunStrToDecimalIscilikBirimFiyati(str, mythousandSeperator, mydecimalSeperator);
}
//-----------------------------------------------------
// Şenay 13.12.2004 : Oran'larla ilgili formatlama yapabilmek için oluşturuldu.
//-----------------------------------------------------
function StrToDecimal2Oran(str, thousandSeperator, decimalSeperator)
{
	return RunStrToDecimal2Oran(str, thousandSeperator, decimalSeperator);
}


function StrToDecimal(str)
{
	return RunStrToDecimal(str, '.', ',')
}


//-----------------------------------------------------
// Şenay 13.12.2004 : Oran'larla ilgili formatlama yapabilmek için oluşturuldu.
//-----------------------------------------------------
function StrToDecimal2Oran(str)
{
	return RunStrToDecimal2Oran(str, '.', ',');
}







// Şenay 13.09.2004 
// DIKKAT !! ASPX Sayfalarında Saysal hesaplamalar yapıldıktan sonra Bulunan Sonucu Formatlı
// bir şekilde görüntülemek için kullanılır. ÖRNEK GNL/WebForm1.aspx
 function RunDecimalToStr(nValue,thousandSeperator,decimalSeperator)
{
	//alert("nValue: " + nValue);
	var sValue = new String(nValue); 
	
	var sonucArr = sValue.split(dSep2Java);
	var sonuc = sonucArr.join(decimalSeperator);
	
	sonuc = format_strVal_tutar(sonuc,thousandSeperator,decimalSeperator,myDPlaces);
		
	//alert("This is my Sonuc: " + sonuc);
	return sonuc;
	
}
function RunIscilikBirimFiyatiToStr(nValue,thousandSeperator,decimalSeperator)
{
	//alert("nValue: " + nValue);
	var sValue = new String(nValue); 
	
	var sonucArr = sValue.split('.');
	var sonuc = sonucArr.join(',');
	sonuc = format_strVal_tutar(sonuc,'.',',',5);
		
	//alert("This is my Sonuc: " + sonuc);
	return sonuc;
	
}
function DecimalToStr(nValue,thousandSeperator,decimalSeperator)
{
	return RunDecimalToStr(nValue, thousandSeperator, decimalSeperator)
}
function DecimalToStr(nValue)
{
	return RunDecimalToStr(nValue, '.', ',')
}
function IscilikBirimFiyatiToStr(nValue)
{
	return RunIscilikBirimFiyatiToStr(nValue, '.', ',')
}
// ---------------------------------------------------------------------------------------------------------------------//
// Sedef, 29.09.2004
// JavaScript decimal tipinden bir değer alıp, bunu decimal'den sonra myDPlaces kadar basamak olacak şekilde Round yapıp,
// sonucu yine JavaScript decimal tipinden bir değer olarak döndürür.
// Örn: dValue=1234567,8191 --> Dönen değer=1234567,82
function RoundDecimal(dValue){

	var katsayi = Math.pow(10, myDPlaces) ;
	return Math.round(dValue * katsayi) / katsayi;
}
// ---------------------------------------------------------------------------------------------------------------------//

// ---------------------------------------------------------------------------------------------------------------------//
// Sedef, 29.09.2004
// JavaScript decimal tipinden bir değer alıp, bunu decimal'den sonra myDPlaces kadar basamak olacak şekilde Round yapıp,
// sonucu yine JavaScript decimal tipinden bir değer olarak döndürür.
// Örn: dValue=1234567,8191 --> Dönen değer=1234567,82
function RoundIscilikBirimFiyat(dValue){
	var katsayi = Math.pow(10,5) ;
	return Math.round(dValue * katsayi) / katsayi;
}
// ---------------------------------------------------------------------------------------------------------------------//


function RoundStrTutar(xValue)
{
    var  sValue = new String(xValue);    
	var  nValue = StrToDecimal(sValue); //1.000.000,4944 şeklindeki sayıları round eder.
	var  sValue  = new String(nValue); //1000000.50
	
	var sonuc1 = sValue.split(dSep2Java);
	sValue = sonuc1.join(mydecimalSeperator);
	
	//alert('sValue' + sValue) ;
	
	/**/	
	var last =0;
	var format = "";
	
	if (sValue.indexOf(mydecimalSeperator)==-1){
		last = sValue.length - 1;
		format = sValue.substr(0,last+2);}
	else {	
		last = sValue.indexOf(mydecimalSeperator) - 1;
		format = sValue.substr(0,last+1);}
	
	
	if ( format.length > 3)
	{   var len = format.length;
   		var rem = len % 3;
		last=last - 2;	
			
		if ( rem==0 ){
		 for (j =last  ; j > rem +1   ; j= j-3) {
		  	sValue= sValue.substr(0,j) + mythousandSeperator  + sValue.substr(j)
	  		}
		}
		else{
		 for (j =last  ; j > rem-2   ; j= j-3) {
			sValue= sValue.substr(0,j) + mythousandSeperator + sValue.substr(j)

		  }
	    }	
    }
    
    
    
//alert ('sValueSon : ' + sValue)	;
return sValue;
	
}


//17/09/2004 -Zeynep
//verilen HTML objesini bizim settinglere göre formatlayıp "value" prppertysine set eder.
function FormatObje(obj)
{
	//ParseFloat dan sonra çağrıldığı düşünülüyor.
	
	var nValue=obj.value;
	var nValue2=StrToDecimal(nValue,'',dSep2Java)      
	var nValue2=DecimalToStr(nValue,mythousandSeperator,mydecimalSeperator);
  
	obj.value=nValue2;  //YTL_Ref													
	
}

// ---------------------------------------------------------------------------------------------------------------------//

function ToplamHedefHesapla()
{

	var Toplam;
	Toplam = document.getElementById('txtToplam').value;
	document.getElementById('txtToplam').value = parseInt(document.getElementById('txtOcak').value)
											   + parseInt(document.getElementById('txtSubat').value)
											   + parseInt(document.getElementById('txtMart').value)
											   + parseInt(document.getElementById('txtNisan').value)
											   + parseInt(document.getElementById('txtMayis').value)
											   + parseInt(document.getElementById('txtHaziran').value)
											   + parseInt(document.getElementById('txtTemmuz').value)
											   + parseInt(document.getElementById('txtAgustos').value)
											   + parseInt(document.getElementById('txtEylul').value)
											   + parseInt(document.getElementById('txtEkim').value)
											   + parseInt(document.getElementById('txtKasim').value)
											   + parseInt(document.getElementById('txtAralik').value);
}

