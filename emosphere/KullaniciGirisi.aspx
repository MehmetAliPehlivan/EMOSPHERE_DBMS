<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="KullaniciGirisi.aspx.cs" Inherits="emosphere.KullaniciGirisi" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Kayıt Formu</title>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" />
    <link href="../css/bootstrap.css" rel="stylesheet" />
    <link href="../Scripts/jquery-ui-1.12.1/jquery-ui.min.css" rel="stylesheet" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <script src="../Scripts/jquery-1.11.1.min.js"></script>
    <script src="../Scripts/jquery-ui-1.12.1/jquery-ui.js"></script>
    <script src="../Scripts/bootstrap.js"></script>
    <script>
        $(function () {
            $("#<%=txtDogumTarihi.ClientID %>").datepicker({
                dateFormat: 'dd-mm-yy',
                changeMonth: true,
                changeYear: true,
                yearRange: '-100:+0'
            });
        });
    </script>
</head>
<body>
    <form id="form1" runat="server">

        <asp:HiddenField ID="hdnKullaniciNo" runat="server" />
        <div class="container" style="margin-top: 100px; margin-bottom: 50px">
            <asp:Label ID="lblMesaj" runat="server" Text=""></asp:Label>
            <div class="row">
                <ul class="nav nav-tabs" id="sampleTabs">
                    <li runat="server" id="liGenelBilgilerTab" role="presentation" class="active"><a data-toggle="tab" href="#divGenelBilgiler">Kullanici Girişi</a></li>
                    <li runat="server" id="lisorgulama" role="presentation"><a data-toggle="tab" href="#divKullaniciSorgulama">Kullanici Sorgulama</a></li>

                </ul>
                <div class="tab-content">
                    <div runat="server" class="tab-pane fade in active" id="divGenelBilgiler">
                        <div class="row well">
                            <div class="col-md-6">
                                <div runat="server" class="col-md-12 " >
                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <label for="lblAd">Adi:</label>
                                            <asp:TextBox ID="txtAd" runat="server" CssClass="form-control"></asp:TextBox>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <label for="lblSoyad">Soyadi:</label>
                                            <asp:TextBox ID="txtSoyad" runat="server" CssClass="form-control"></asp:TextBox>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <label for="lblEmail">Email:</label>
                                            <asp:TextBox ID="txtEmail" runat="server" CssClass="form-control"></asp:TextBox>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <label for="lblTel">Cep Tel:</label>
                                            <asp:TextBox ID="txtTel" runat="server" CssClass="form-control"></asp:TextBox>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <label for="lblSifre">Şifre:</label>
                                            <asp:TextBox ID="txtSifre" runat="server" CssClass="form-control"></asp:TextBox>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <label for="lblDogumTarihi">Doğum Tarihi:</label>
                                            <asp:TextBox ID="txtDogumTarihi" runat="server" placeholder="Gün-Ay-Yil" CssClass="form-control"></asp:TextBox>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <label for="lblCinsiyet">Cinsiyet:</label>
                                            <asp:DropDownList ID="ddlCinsiyet" runat="server" CssClass="form-control">
                                                 <asp:ListItem Text="Seçiniz" Value="0"></asp:ListItem>
                                                <asp:ListItem Text="Erkek" Value="2"></asp:ListItem>
                                                <asp:ListItem Text="Kadın" Value="1"></asp:ListItem>
                                            </asp:DropDownList>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <label for="lblAdres">Adres:</label>
                                            <asp:TextBox ID="txtAdres" runat="server" TextMode="MultiLine" CssClass="form-control"></asp:TextBox>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <label for="lblProfilResmi">Profil Resmi:</label>
                                            <asp:TextBox ID="txtProfilResmi" runat="server" CssClass="form-control"></asp:TextBox>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <asp:Button runat="server" CssClass="btn btn-success" Text="Kaydet" ID="btnKaydet" OnClick="btnKaydet_Click" />
                                            <asp:Button runat="server" CssClass="btn btn-info" Text="Güncelle" Visible="false" ID="btnGuncelle" OnClick="btnGuncelle_Click" />
                                            <asp:Button runat="server" CssClass="btn btn-danger" Text="Sil" Visible="false" ID="btnSil" OnClick="btnSil_Click" />
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                    <div runat="server" class="tab-pane fade" id="divKullaniciSorgulama">
                        <div class="row well">
                            <div class="col-md-12">
                                <div class="row" style="margin-left: 0px">
                                    <h3>Sorgu Ekranı</h3>
                                </div>
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label for="txtSorguAd">Ad</label>
                                            <asp:TextBox ID="txtSorguAd" runat="server" CssClass="form-control"></asp:TextBox>

                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label for="txtSorguSoyad">Soyad</label>
                                            <asp:TextBox ID="txtSorguSoyad" runat="server" CssClass="form-control"></asp:TextBox>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label for="ddlSorguCinsiyet">Cinsiyet</label>
                                            <asp:DropDownList ID="ddlSorguCinsiyet" runat="server" CssClass="form-control">
                                                <asp:ListItem Text="Seçiniz" Value="0"></asp:ListItem>
                                                <asp:ListItem Text="Erkek" Value="2"></asp:ListItem>
                                                <asp:ListItem Text="Kadın" Value="1"></asp:ListItem>
                                            </asp:DropDownList>
                                        </div>
                                    </div>

                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label for="txtSorguEmail">Email</label>
                                            <asp:TextBox ID="txtSorguEmail" runat="server" CssClass="form-control"></asp:TextBox>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">


                                    <div class="col-md-3" style="margin-top: 25px">
                                        <asp:Button runat="server" CssClass="btn btn-success" Text="Sorgula" ID="btnSorguEkrani" OnClick="btnSorguEkrani_Click" />
                                        <asp:Button runat="server" CssClass="btn btn-warning" Text="Filtreleri Temizle" ID="btnFiltreTemizle" OnClick="btnFiltreTemizle_Click" />
                                    </div>

                                </div>



                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <asp:GridView ID="dgKullanicilar" AutoGenerateColumns="false" runat="server" Visible="false"
                                    CssClass="table table-striped table-bordered" Style="background-color: white">
                                    <Columns>

                                        <asp:HyperLinkField DataNavigateUrlFields="UserNo"
                                            DataNavigateUrlFormatString="KullaniciGirisi.aspx?UserNo={0}"
                                            DataTextField="UserNo" />
                                        <asp:BoundField DataField="Ad" HeaderText="Ad"></asp:BoundField>
                                        <asp:BoundField DataField="Soyad" HeaderText="Soyad"></asp:BoundField>
                                        <asp:BoundField DataField="Email" HeaderText="Email"></asp:BoundField>
                                        <asp:BoundField DataField="Ceptel" HeaderText="Ceptel"></asp:BoundField>
                                        <asp:BoundField DataField="DogumTarihi" HeaderText="Doğum Tarihi"></asp:BoundField>
                                        <asp:BoundField DataField="Cinsiyet" HeaderText="Cinsiyet"></asp:BoundField>
                                        <asp:BoundField DataField="Adres" HeaderText="Adres"></asp:BoundField>
                                        <asp:BoundField DataField="KayitTarihi" HeaderText="Kayıt Tarihi"></asp:BoundField>
                                       
                                    </Columns>
                                </asp:GridView>
                            </div>
                        </div>
                    </div>
                </div>
                <asp:HiddenField ID="HiddenTab" runat="server" />
            </div>
        </div>


    </form>
</body>
</html>

