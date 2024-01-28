    function PWBelgeGoster(tableName, fieldName, fieldValue,UploadMi,EklensinMi) {

        //TOKEN :PAPERWORK SUNUCUSUNDA YARDIMCI UYGULAMA İLE ÜRETİLEN VE AUTHENTICATION İŞLEMİNİ GEÇMEYİ SAĞLAYAN KEY    

        //UploadMi: Belge yüklenmesine izin verilsin mi
        //EklensinMi: 111 numaralı kira anlaşması kaydedilmedi ise bu parametre ile paperworkte kayıt oluşturulur.
        var params = "CARD_NAME" + "|" + tableName + "|" + fieldName + "|" + fieldValue + "|" + UploadMi + "|" + EklensinMi
        window.open("../GNL/PWViewer.aspx?params=" + params)
    }
