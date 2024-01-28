<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="TerapiBilgileri.aspx.cs" Inherits="emosphere.TerapiBilgileri" %>

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
            $("#<%=txtBasTarihi.ClientID %>").datepicker({
                dateFormat: 'dd-mm-yy',
                changeMonth: true,
                changeYear: true,
                yearRange: '-100:+0'
            });
        });
        $(function () {
            $("#<%=txtBitTarihi.ClientID %>").datepicker({
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

        <asp:HiddenField ID="hdnTerapiNo" runat="server" />
        <div class="container" style="margin-top: 100px; margin-bottom: 50px">
            <asp:Label ID="lblMesaj" runat="server" Text=""></asp:Label>
            <div class="row">
                <ul class="nav nav-tabs" id="sampleTabs">
                    <li runat="server" id="liGenelBilgilerTab" role="presentation" class="active"><a data-toggle="tab" href="#divGenelBilgiler">Terapi Bilgileri Girişi</a></li>
                    <li runat="server" id="lisorgulama" role="presentation"><a data-toggle="tab" href="#divSorgulama">Terapi Sorgulama</a></li>

                </ul>
                <div class="tab-content">
                    <div runat="server" class="tab-pane fade in active" id="divGenelBilgiler">
                        <div class="row well">
                            <div class="col-md-6">
                                <div runat="server" class="col-md-12 ">
                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <label for="lblAd">Hasta :</label>
                                            <asp:DropDownList ID="ddlHasta" runat="server" CssClass="form-control" AutoPostBack="true"></asp:DropDownList>

                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <label for="lblAd">Terapist :</label>
                                            <asp:DropDownList ID="ddlTerapist" runat="server" CssClass="form-control" AutoPostBack="true"></asp:DropDownList>

                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <label for="lblAd">Terapi Adi:</label>
                                            <asp:TextBox ID="txtTerapiAd" runat="server" CssClass="form-control"></asp:TextBox>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <label for="lblTip">Terapi Tipi:</label>
                                            <asp:DropDownList ID="ddlTerapiTipi" runat="server" CssClass="form-control" AutoPostBack="true"></asp:DropDownList>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <label for="lblOda">Terapi Odası:</label>
                                            <asp:DropDownList ID="ddlTerapiOda" runat="server" CssClass="form-control" AutoPostBack="true"></asp:DropDownList>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <label for="lblbasTarih">Baslangıç Tarihi:</label>
                                            <asp:TextBox ID="txtBasTarihi" runat="server" placeholder="Gün-Ay-Yil" CssClass="form-control"></asp:TextBox>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <label for="lblbitTarih">Bitiş Tarihi:</label>
                                            <asp:TextBox ID="txtBitTarihi" runat="server" placeholder="Gün-Ay-Yil" CssClass="form-control"></asp:TextBox>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <label for="lblDurum">Terapi Durumu:</label>
                                            <asp:DropDownList ID="ddlTerapiDurumu" runat="server" CssClass="form-control">
                                                <asp:ListItem Text="Seçiniz" Value="0"></asp:ListItem>
                                                <asp:ListItem Text="Başlanmadı" Value="1"></asp:ListItem>
                                                <asp:ListItem Text="Devam Ediyor" Value="2"></asp:ListItem>
                                                <asp:ListItem Text="Sonlandı" Value="3"></asp:ListItem>
                                            </asp:DropDownList>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <label for="lblDikkatEdilecekler">Dikkat Edilecek Noktalar:</label>
                                            <asp:TextBox ID="txtNot1" runat="server" TextMode="MultiLine" CssClass="form-control"></asp:TextBox>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <label for="lblDikkatEdilecekler">Feedbackler:</label>
                                            <asp:TextBox ID="txtNot2" runat="server" TextMode="MultiLine" CssClass="form-control"></asp:TextBox>
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
                    <div runat="server" class="tab-pane fade" id="divSorgulama">
                        <div class="row well">
                            <div class="col-md-12">
                                <div class="row" style="margin-left: 0px">
                                    <h3>Sorgu Ekranı</h3>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <div class="col-md-12">
                                                <label for="lblAd">Hasta :</label>
                                                <asp:DropDownList ID="ddlSorguHasta" runat="server" CssClass="form-control" AutoPostBack="false" AutoBind="true"></asp:DropDownList>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <div class="col-md-12">
                                                <label for="lblAd">Terapist :</label>
                                                <asp:DropDownList ID="ddlSorguTerapist" runat="server" CssClass="form-control" AutoPostBack="false" AutoBind="true"></asp:DropDownList>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <div class="col-md-12">
                                                <label for="lblAd">Terapi Adi:</label>
                                                <asp:TextBox ID="txtSorguTerapiAdi" runat="server" CssClass="form-control"></asp:TextBox>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <div class="col-md-12">
                                                <label for="lblTip">Terapi Tipi:</label>
                                                <asp:DropDownList ID="ddlSorguTerapiTipi" runat="server" CssClass="form-control" AutoPostBack="false" AutoBind="true"></asp:DropDownList>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <div class="col-md-12">
                                                <label for="lblOda">Terapi Odası:</label>
                                                <asp:DropDownList ID="ddlSorguTerapiOda" runat="server" CssClass="form-control" AutoPostBack="false" AutoBind="true"></asp:DropDownList>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4" style="margin-top: 25px">


                                        <div class="form-group">
                                            <div class="col-md-12">
                                                <asp:Button runat="server" CssClass="btn btn-success" Text="Sorgula" ID="btnSorguEkrani" OnClick="btnSorguEkrani_Click" />
                                                <asp:Button runat="server" CssClass="btn btn-warning" Text="Filtreleri Temizle" ID="btnFiltreTemizle" OnClick="btnFiltreTemizle_Click" />
                                            </div>
                                        </div>
                                    </div>

                                </div>



                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <asp:GridView ID="dgTerapiler" AutoGenerateColumns="false" runat="server" Visible="false"
                                    CssClass="table table-striped table-bordered" Style="background-color: white">
                                    <Columns>

                                        <asp:HyperLinkField DataNavigateUrlFields="TerapiNo"
                                            DataNavigateUrlFormatString="TerapiBilgileri.aspx?TerapiNo={0}"
                                            DataTextField="TerapiNo" />
                                        <asp:BoundField DataField="TerapiAdi" HeaderText="Terapi Adi"></asp:BoundField>
                                        <asp:BoundField DataField="TerapistAdi" HeaderText="Terapist Adi"></asp:BoundField>
                                        <asp:BoundField DataField="TerapiOdasi" HeaderText="Terapi Odasi"></asp:BoundField>
                                        <asp:BoundField DataField="TerapiTipi" HeaderText="Terapi Tipi"></asp:BoundField>
                                        <asp:BoundField DataField="Name" HeaderText="Hasta Adi"></asp:BoundField>
                                        <asp:BoundField DataField="SurName" HeaderText="Hasta Soyadi"></asp:BoundField>
                                        <asp:BoundField DataField="BasTarihi" HeaderText="Baslangıç Tarihi"></asp:BoundField>
                                        <asp:BoundField DataField="BitTarihi" HeaderText="Bitiş Tarihi"></asp:BoundField>
                                        <asp:BoundField DataField="TerapiDurumu" HeaderText="Terapi Durumu"></asp:BoundField>


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
