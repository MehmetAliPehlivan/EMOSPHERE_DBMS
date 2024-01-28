/* function OnDblClick(listbox,textbox,valuetextbox)
{
 var value=listbox.options[listbox.selectedIndex].value;
 var text=listbox.options[listbox.selectedIndex].text;
 var obj=document.getElementsByName(textbox)[0];obj.value=text;
 document.getElementsByName(valuetextbox)[0].value=value;
 listbox.style.visibility='hidden'
 obj.focus()
 
}  */
//ayhang, 03/07/2006
function trimString(str) {
    str = this != window ? this : str;
    return str.replace(/^\s+/g, '').replace(/\s+$/g, '');
}

function OnDblClick(ClientSideFunction, listbox, textbox, valuetextbox, valuetextbox2) {
    var textBox = document.getElementsByName(textbox)[0];
    var listbox = document.getElementsByName(listbox)[0];
    var hiddenTextBox = document.getElementsByName(valuetextbox)[0];
    var hiddenTextBox2 = document.getElementsByName(valuetextbox2)[0];

    var value = listbox.options[listbox.selectedIndex].value;
    var text = listbox.options[listbox.selectedIndex].text;
    textBox.value = text;

    var value1 = "";
    var value2 = "";
    var i = value.indexOf("--")
    if (i > 0) {
        value = value.replace(/^\s+|\s+$/g, '');
        value1 = value.substr(0, i)
        if ((i + 1) < (value.length - 1)) value2 = value.substr(i + 2, value.length - 1)
        value = value1;
    }
    var value3 = "";
    var value4 = "";
    var j = value.indexOf("=")
    if (j > 0) {
        value3 = value.substr(0, j)
        if ((j + 1) < (value.length - 1)) value4 = value.substr(j + 1, value.length - 1)
        value = value3;
    }
    if (hiddenTextBox2 != null) {
        //alert('musteri');
        if (document.getElementById('Musteri:_ctl1:txtOdemeVadesi') != null) {
            //var value_array=value.split("-");
            //var value1=value_array[0];
            //var value2=value_array[1];
            hiddenTextBox.value = value1;
            hiddenTextBox2.value = "";
        }
        else hiddenTextBox.value = value;
    }
    else hiddenTextBox.value = value;

    //if (value2 != '') alert("Bu müşteri efatura müşterisidir.\n" + value2);
    if (value2 != "") setTimeout(function () { alert("Bu müşteri efatura müşterisidir.\n" + value2) }, 20);
    if (value4 != "") setTimeout(function () { alert("Bu müşteriye E-Arşiv kapsamında " + value4 + "  adresine fatura e-mail olarak gönderilecektir.E-mail adresinin doğruluğunu ve fatura bildirim talebini müşteriden teyit ediniz.E-mail olarak gönderilmesi istenmiyorsa veya mail adresi yanlışsa lütfen müşteri kartından güncelleyiniz.") }, 20);

    if (hiddenTextBox2 == null) {
        //alert('HesapKodu kontrolu');
        var textBox2 = document.getElementById('txtHesapKoduGetir');
        if (textBox2 != null) {
            //alert('Hesap Getirilecek');
            if (document.getElementById('HesapKodu_hdHesapID') != null) {
                var hesapno = document.getElementById('HesapKodu_hdHesapID').value;
                //alert(hesapno);
                if (hesapno != null && hesapno != '0') textBox2.value = hesapno;
            }
        }
    }

    //alert('ayhan');
    //alert('İlk'+ objControl.HiddenTextBox2+' - '+hiddenTextBox2.value);

    listbox.style.visibility = 'hidden';
    textBox.focus();
    if (ClientSideFunction != "undefined") {
        eval(ClientSideFunction + '()')
    }

    //CekSenet Sayfasi ICIN
    //if(document.getElementById('txtCiroBilgileri')!=null)
    //{
    //if(document.getElementById('rtbnCekKimin_0').checked)
    //   document.getElementById('txtCiroBilgileri').value=text;
    //}
    // alert('OnDblClick'+hiddenTextBox.value);
}

function OnDblClick2(listbox, textbox, valuetextbox) {

    var txtTextBox = document.getElementsByName(textbox)[0];
    var listBoxObj = document.getElementsByName(listbox)[0];
    var hiddenTextBox = document.getElementsByName(valuetextbox)[0];

    var value = listBoxObj.options[listBoxObj.selectedIndex].value;
    var text = listBoxObj.options[listBoxObj.selectedIndex].text;
    txtTextBox.value = text;

    var value1 = "";
    var value2 = "";
    var i = value.indexOf("--")
    if (i > 0) {
        value = value.replace(/^\s+|\s+$/g, '');
        value1 = value.substr(0, i)
        if ((i + 1) < (value.length - 1)) value2 = value.substr(i + 2, value.length - 1)
        value = value1;
    }
    var value3 = "";
    var value4 = "";
    var j = value.indexOf("=")
    if (j > 0) {
        value = value.replace(/^\s+|\s+$/g, '');
        value3 = value.substr(0, j)
        if ((j + 1) < (value.length - 1)) value4 = value.substr(j + 1, value.length - 1)
        value = value3;
    }
    hiddenTextBox.value = value;

    //if (value2 != '') alert("Bu müşteri efatura müşterisidir.\n" + value2);
    if (value2 != "") setTimeout(function () { alert("Bu müşteri efatura müşterisidir.\n" + value2) }, 20);
    if (value4 != "") setTimeout(function () { alert("Bu müşteriye E-Arşiv kapsamında " + value4 + "  adresine fatura e-mail olarak gönderilecektir.E-mail adresinin doğruluğunu ve fatura bildirim talebini müşteriden teyit ediniz.E-mail olarak gönderilmesi istenmiyorsa veya mail adresi yanlışsa lütfen müşteri kartından güncelleyiniz.") }, 20);

    listBoxObj.style.visibility = 'hidden'
    txtTextBox.focus()
    //alert('hiddentextbox value:'+hiddenTextBox.value);
    var hiddenMenu = document.getElementById('hdMenuMusteriNo');
    hiddenMenu.value = value;

}
function OnDblClick3(listbox, textbox, valuetextbox) {
    var txtTextBox = document.getElementsByName(textbox)[0];
    var listBoxObj = document.getElementsByName(listbox)[0];
    var hiddenTextBox = document.getElementsByName(valuetextbox)[0];

    var value = listBoxObj.options[listBoxObj.selectedIndex].value;
    var text = listBoxObj.options[listBoxObj.selectedIndex].text;
    txtTextBox.value = text;
    hiddenTextBox.value = value;
    listBoxObj.style.visibility = 'hidden'
    txtTextBox.focus()
    //alert(valuetextbox[0]+' hidden textbox value: '+hiddenTextBox.value);
}


function OnClick(hidden, listboxName) {
    var listbox = document.getElementsByName(listboxName)[0];

    if (listbox != null) {
        if (hidden == true) {
            listbox.style.visibility = 'hidden'
            return
        }
        if (listbox.style.visibility == 'hidden') {
            listbox.style.visibility = 'visible'
        }
        else {
            listbox.style.visibility = 'hidden'
        }
    }

}

/*Musteri controlunde, giriş yapılan textboxn değerini kontrol eder
Bu metod textboxın değeri değiştikçe çağrılır.
Giriş yapılan textboxın değeri "" olursa hiddenTextBox (musterino)
değeri "" olarak atanır. Eğer SubeVisible ise 
txtTextBox.OnTextBoxEmpty nın içerdiği
fonksiyon çağrılır. Servera gidilir.

OnTextBoxEmpty
*/
function OnPropertyChange(listbox, textbox, valuetextbox, subeId) {
    var txtTextBox = document.getElementsByName(textbox)[0];
    var listBoxObj = document.getElementsByName(listbox)[0];
    var hiddenTextBox = document.getElementsByName(valuetextbox)[0];
    //var hiddenTextBox2=document.getElementsByName(OdemeVadesi)[0];
    var cmbSube = document.getElementsByName(subeId)[0];
    if (txtTextBox.value == "") {
        hiddenTextBox.value = "";
        //alert(listBoxObj.parentNode.id)
        //listBoxObj.parentNode.title=""	



        if (txtTextBox.SubeVisible == "True") {
            //eval(txtTextBox.OnTextBoxEmpty);
            var i = 0;
            var itemCount = cmbSube.options.length
            for (i = 0; i < itemCount; i++) cmbSube.options[0] = null
        }
    }

    FindElement(listBoxObj, txtTextBox)
    var hiddenMenu = document.getElementsByName('hdMenuMusteriNo')[0];
    try {
        hiddenMenu.value = hiddenTextBox.value;
    }
    catch (e) { }
    //var hiddenMenu2=document.getElementsByName('txtVadeTarihi:Textbox')[0];
}


function FindElement(listBoxObj, textBoxObj) {
    var i = 0;
    var len = listBoxObj.options.length;
    var fncOnPropertyChange = textBoxObj.onpropertychange;
    var textLen = textBoxObj.value.length
    var re = textBoxObj.value.toUpperCase()
    var foundArray = null


    //alert(re)
    for (i = 0; i < len; i++) {
        if (listBoxObj.options.item(i).innerText.search(re) != -1)
        //if (listBoxObj.options.item(i).innerText.substr(0,textLen).toUpperCase()==)
        {

            listBoxObj.selectedIndex = i;
            //listBoxObj.style.visibility="visible"

            //textBoxObj.value = listBoxObj.options.item(i).innerText;

            break;

        }

    }
}

function Select(objName) {
    var obj = document.getElementsByName(objName)[0];
    try {
        obj.focus();
        obj.select();
    }
    catch (e) { }

}

function OnMenuMusteriSet(objControl, controlID) {
    var hiddenMenu = document.getElementsByName('hdMenuMusteriNo')[0];
    var hiddenTextBox = null;
    var str = controlID + ':hdMusteriNo';

    hiddenTextBox = document.getElementsByName(str)[0];
    //alert('OnMenuMusteriSet'+'-'+hiddenMenu.value+'-'+hiddenTextBox.value);
    hiddenMenu.value = hiddenTextBox.value;
}
function OnHesapKoduSet(objControl, controlID) {
    var hiddenMenu = document.getElementsByName('hdMenuMusteriNo')[0];
    var hiddenTextBox = null;

    var str = controlID + ':hdHesapID';

    //alert (str);
    //alert(document.getElementById(str));
    hiddenTextBox = document.getElementById(str);

    //alert('OnHesapKoduSet'+'-'+hiddenMenu.value+'-'+hiddenTextBox.value);
    hiddenMenu.value = hiddenTextBox.value;
    //alert('OnHesapKoduSet'+'-'+hiddenMenu.value+'-'+hiddenTextBox.value);

}

//ayhang, 03/07/2006
function OdemeTarihiHesapla(faturatarihi, gun) {
    var today = new Date(faturatarihi);
    //alert (today+'+'+gun);
    //today.setDate(today.getDate() + gun);
    today.setTime(today.getTime() + gun * 1000 * 60 * 60 * 24)
    var Year = takeYear(today);
    var Month = leadingZero(today.getMonth() + 1);
    var Day = leadingZero(today.getDate());

    function takeYear(theDate) {
        var x = theDate.getYear();
        var y = x % 100;
        y += (y < 38) ? 2000 : 1900;
        return y;
    }

    function leadingZero(nr) {
        if (nr < 10) nr = "0" + nr;
        return nr;
    }
    return (Day + '/' + Month + '/' + Year);
}

//ayhang, 03/07/2006
function TarihFormat(tarih, format) {
    function zp(n) { return n < 10 ? ("0" + n) : n; }

    var tarih_array = tarih.split("/");
    var DD = tarih_array[0];
    var MM = tarih_array[1];
    var YYYY = tarih_array[2];

    format = format.replace(/DD/, DD);
    format = format.replace(/MM/, MM);
    format = format.replace(/YYYY/, YYYY);
    //alert(tarih+'>'+format);
    return format;
}

//ayhang, 03/07/2006
function OnMenuOdemeVadesiSet(objControl, controlID) {

    var hiddenMenu2 = null;//Olası Vade Tarihi
    hiddenMenu2 = document.getElementsByName('txtVadeTarihi:Textbox')[0];

    var hiddenTextBox2 = null;//Hesaplanan Vade Gün Sayisi
    //var str2=controlID+':_ctl1:txtOdemeVadesi';

    hiddenTextBox2 = document.getElementById('Musteri:_ctl1:txtOdemeVadesi');
    //alert('OnMenuOdemeVadesiSet'+'-'+hiddenMenu2.value+'-'+hiddenTextBox2.value);
    //alert(hiddenMenu2!=null);
    if (hiddenMenu2 != null) {
        //alert(hiddenTextBox2.value!='');
        if (hiddenTextBox2 != null) {
            if (hiddenTextBox2.value != '') {
                //Kesilecek Fatura Tarihi
                var hiddenMenu3 = null;
                hiddenMenu3 = document.getElementsByName('txtFisTarihi:Textbox')[0];
                if (hiddenMenu3.value != null) {
                    var a = TarihFormat(hiddenMenu3.value, 'MM/DD/YYYY');
                    var b = hiddenTextBox2.value;
                    hiddenMenu2.value = OdemeTarihiHesapla(a, b)
                };
            }
        }
        /*GELEN GENEL ISTEK ÜZERİNE :)
        else
        {hiddenMenu2.value=''};*/
    };
}
