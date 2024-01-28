function ShowMessageBox(text)
{
//alert("deneme")
var element=document.activeElement 
 if(document.popUpWindow==null) 
 {
  document.popUpWindow = document.createElement("DIV")
  document.body.appendChild(document.popUpWindow )
  document.popUpWindow.style.zindex=1000
  document.popUpWindow.style.position="absolute"
  document.popUpWindow.style.top=document.body.scrollTop   + window.screen.availHeight /2 
  document.popUpWindow.style.left=document.body.scrollLeft+window.screen.availWidth /2 
 document.popUpWindow.attachEvent("onclick",Display)
  document.popUpWindow.style.backgroundColor="#FFF7E5"
 }
  document.popUpWindow.style.display=""
  document.popUpWindow.innerText=text//
}

function Display()
{
	document.popUpWindow.style.display="none"
}