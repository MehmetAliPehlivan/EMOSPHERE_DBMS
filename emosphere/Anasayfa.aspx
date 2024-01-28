<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Anasayfa.aspx.cs" Inherits="emosphere.Anasayfa" %>

<!DOCTYPE html>
<head >
    <title>Anasayfa</title>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" />
    <link href="../css/bootstrap.css" rel="stylesheet" />
    <link href="../Scripts/jquery-ui-1.12.1/jquery-ui.min.css" rel="stylesheet" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <script src="../Scripts/jquery-1.11.1.min.js"></script>
    <script src="../Scripts/jquery-ui-1.12.1/jquery-ui.js"></script>
    <script src="../Scripts/bootstrap.js"></script>
 
</head>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
      	<DIV style="LEFT: 40%; WIDTH: 100%; POSITION: absolute; TOP: 50%; HEIGHT: 100%" ms_positioning="GridLayout">
           
            <asp:Button ID="btnKullaniciGirisi" runat="server" Text="Kullanıcı İşlemleri"  CssClass="btn btn-success" OnClick="btnKullaniciGirisi_Click"/>
             <asp:Button ID="btnTerapiGirisi" runat="server" Text="Terapi İşlemleri" CssClass="btn btn-info"  OnClick="btnTerapiGirisi_Click" />
        </div>
    </form>
</body>
</html>
