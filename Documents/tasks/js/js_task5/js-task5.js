var html = "<div id='main'><h1>Hello <span id='a'>User!</span></h1>";
html += "<input type='text' oninput='change()'  onkeyup='myfun()'  id='ch'></div>";

function change()
{
    var data = document.getElementById('ch').value;
    document.getElementById('a').innerHTML = data;
}
// }
function myfun()
{
        var a =  document.getElementById('ch').value ;
    if(a == '')
    {    
    document.getElementById('a').innerHTML = 'User!';
    }
}




document.write(html);