function ColonKapatAc(myTable,obj,index)
{
  var count=myTable.rows.length
  var i=0;

  for(i=0;i<count;i++)
	{
		var row=myTable.rows[i]
	       	

		if(obj.checked)
		{	
		  row.cells[index].innerHTML=row.cells[index].oldInnerHTML
		  row.cells[index].style.visibility ="visible"
		}
		else 
		{
		 row.cells[index].oldInnerHTML=row.cells[index].innerHTML
		 row.cells[index].style.visibility ="hidden"
		}
		 
	} 

}

