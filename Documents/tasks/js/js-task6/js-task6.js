var html = "<div><h1>List<h1><h2>Buy groceries</h2>";
html += "<ul id='list'><li >cold cereals</li><li >Ice Cream</li><li>Honey</li><li >Olive Oil</li>";
html += "</ul>";
html += "<button onclick='data()' id='sd'>Add Item</button> <button id='btn2' onclick='daa()'>Remove</button></div>";
var coun=0;
function data()
{
    coun=coun+1;
 if(coun == 1)
{
var a = document.createElement("li");
var b = document.createTextNode("Air Freshener");
a.appendChild(b);
document.getElementsByTagName("ul")[0].appendChild(a).setAttribute("class", "food");
}
}
function daa()
{
    var list=document.getElementById("list");

  var len =list.childElementCount;
  if(len>0)
  {
      list.removeChild(list.lastElementChild);
  }
}
function s()
{
for(var i=0;i<4;i++)
{
    document.getElementsByTagName("li")[i].setAttribute("class", "food");
}
}

document.write(html);