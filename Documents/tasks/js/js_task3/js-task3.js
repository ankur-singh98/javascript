function friend_d(name, age, isbestfriend, favourite_c) {
    this.name = name;
    this.age = age;
    this.isbestfriend = isbestfriend;
    this.favourite_c = favourite_c;
    this.yellowfavourite=function()
    {

            if(this.favourite_c.includes("yellow"))
            {
      return  "yellow is my favourite color";
            }
            else {
               return "yellow is not my favourite color";
            }

        
  }
}
  const anurag = new friend_d("anurag",20,true, ["blue","yellow","green"]);
  const anwar = new friend_d("anwar",21,false, ["blue","green"]);
  const dhananjay = new friend_d("dhananjay",24,true, ["yellow"]);
  const savan = new friend_d("savan",25,true, ["blue","red"]);
  const myfriend=[anurag,anwar,dhananjay,savan];

var maximum =myfriend[0].favourite_c.length;

for(let i=0;i<=myfriend.length-1;i++)
{
var j = myfriend[i].favourite_c.length;
if(j > maximum)
{
     maximum = j;
}}

//  window.alert(this.maximum);
var html = "<div class='main'><table border='1'><tr><th colspan='8'>Yellow Favourite</th></tr><tr><th>S.No</th> <th>Name</th> <th>Age</th> <th>Bestfriend</th>";
// html += this.a;
for(var num=0; num<maximum;num++)
{
 html += "<th> favourite Color"+num+"</th>";
}
html += "<th>Yellow Favourite</th> </tr>";
for(var a=0; a<myfriend.length;a++)
{
   
    html += "<tr><td>" +(a+1)+ "</td> <td>"+myfriend[a].name+"</td><td>"+myfriend[a].age+"</td> <td>"+myfriend[a].isbestfriend+"</td>";
for(var j=0; j<maximum;j++)
{
    if(myfriend[a].favourite_c[j] == null)
    {
        html += "<td> </td>";
   
    }
    
    else{
        html += "<td>"+myfriend[a].favourite_c[j]+"</td>";
    }
}

    html += "<td>"+myfriend[a].yellowfavourite()+"</td></tr>";
}
html += "</table></div>";

document.write(html);
