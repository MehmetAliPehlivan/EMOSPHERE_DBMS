/*ayhang, 20/04/2007*/
function __DefaultButtonFunction(buttonid)
{
	if(event.which || event.keyCode)
	{
		if ((event.which == 13) || (event.keyCode == 13))
		{
			var dugme = document.getElementById(buttonid);
			if (dugme!=null)
			{
				dugme.click();
				return false;
			}
			return false;
		}
	}
	else{return false;}
}

function __SetFocus(compid)
{
	if(event.which || event.keyCode)
	{
		if ((event.which == 13) || (event.keyCode == 13))
		{
			var bilesen = document.getElementById(compid);
			try
			{
				bilesen.focus();bilesen.select();
			}catch(e){}
			return false;
		}
	}
}

function __EnterMesaj(mesaj)
{
	if(event.which || event.keyCode)
	{
		if ((event.which == 13) || (event.keyCode == 13))
		{
			alert(mesaj)
			return false;
		}
	}
}

function __EnterKey(buttonid)
{
	if (window.event.keyCode == 13) 
	{
	    var dugme = document.getElementById(buttonid);
		if (dugme!=null)
		{
			dugme.click();
		}else
		{
			event.returnValue=false; 
			event.cancel = true;
	    }
	}
}