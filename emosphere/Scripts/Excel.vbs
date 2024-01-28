sub Excel_onclick(tabloAdi)

    if (tabloAdi="Empty") then exit sub
     
     Dim sHTML
      sHTML =window.document.getElementsByName(tabloAdi)(0).outerhtml
      
      Dim oXL, oBook
      Set oXL = CreateObject("Excel.Application")
      Set oBook = oXL.Workbooks.Add
      oBook.HTMLProject.HTMLProjectItems("Sheet1").Text = sHTML
      oBook.HTMLProject.RefreshDocument
      oXL.Visible = true
      oXL.UserControl = true
end sub