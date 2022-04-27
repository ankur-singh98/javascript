 var html = "<h1>Shopping Site</h1>";
 
//  <img src='a1.webp' ><div><h1>White 350rs <button  class='btn1' >Add Cart</button></h1></div></div><div ><img src='a6.jpg' ><div><h1>450 <button class='btn1'>Add Cart</button></h1></div></div><div ><img src='a4.jpg' ><div><h1>300 <button class='btn1'>Add Cart</button></h1></div>  </div></div>";


var mainarr = [
    {
id :1,
name : "White_shoe",
price : 350,
img : "a1.webp",
btn :"Add ToCart",
quantity : 1
},
{
    id :2,
    name : "Sports_shoe",
    price : 450,
    img : "a6.jpg",
    btn :"Add ToCart",
    quantity : 1
    
},
{
    id :3,
    name : "Light_shoe",
    price : 300,
    img : "a4.jpg",
    btn :"Add ToCart",
    quantity : 1
}
];
var newarr = [];
var newarr = mainarr.map(x => ` <div><img src='${x.img}'><div><h1 class='name'>${x.name} ${x.price} <button onclick="myfun(event)" class='${x.id}' >${x.btn}</button></h1></div></div>`);

html +="<div id='main'>"+ newarr+"</div >";
html += "<h1>Cart</h1>";
var html1 = "<div ><table border='1' class='cart'></table><span id='tot'><span></div>"; 
document.write(html);
 var count = 0;
 var total = 0;
// document.write("");
function myfun(event)
{

     var element = document.getElementsByClassName("cart")[0];
    
    var x = event.target;
   var id = x.className;
  
   for(var i = 0;i<mainarr.length; i++)
   {
    if(mainarr[i].id == id)
    {
        
        var abb = "";
        count =count+1;
        if(count==1)
        {
        abb+="<tr><th>Name</th><th>Image</th><th>Price</th><th>Quantity</th><th>Remove</th></tr>";
        }

        if(!newarr.includes(mainarr[i].id))
        {
        newarr.push(mainarr[i].id);

        
       
        abb+="<tr class='cart_item' ><td class='cart_name'>"+mainarr[i].name+"</td><td><img src='"+mainarr[i].img+"' ></td><td>"+mainarr[i].price+"</td><td ><input type='number' oninput='prooo(event)' id='"+mainarr[i].id+"' value='"+mainarr[i].quantity+"'></td><td><button>Remove</button></td><tr>";
       var a = mainarr[i].price;
    // document.getElementById('tot').textContent = total;
    total =total + a;
       mainarr[i].quantity++;
       document.getElementById('tot').innerHTML ="Total $"+ total;
    }
else{
    var quan = mainarr[i].quantity++;
    document.getElementById(mainarr[i].id).setAttribute("value",quan);
    //total Amount
   total = total;
    total =  total + mainarr[i].price;

//    alert(total);
    document.getElementById('tot').innerHTML ="Total $"+ total;
//    abb+="<tr class='cart_item' ><td class='cart_name'>"+mainarr[i].name+"</td><td><img src='"+mainarr[i].img+"' ></td><td>"+mainarr[i].price+"</td><td>"+quan+"</td><tr>";
    
//    alert(quan);
    // console.log(quan);
}

// console.log(mainarr[i].name);
        // abb+="";

        element.innerHTML += abb;
     

   



    }
   }
   

}
function prooo(event)
{
 var v = event.target;
 var u = v.id.length;
 var tt =document.getElementById(v.id).value;
//  total = (u);
//  document.getElementById('tot').innerHTML ="Total $"+ total;

// alert(u);
for(var j=0; j<mainarr.length; j++)
{
//     if(mainarr[j].id == u)
//     {
//         // alert(u);
//         //  alert(total);

//     var pruu = mainarr[j].price; 
//     //   alert(tt);
//       total = 0;
//     total = total + (pruu * tt);

    
// // total = total + (u * pr);

//     }
   var final = document.getElementById(mainarr[i].id).getAttribute("value");
   alert(final);
    document.getElementById('tot').innerHTML ="Total $"+ total;
}
//   var sto =  document.getElementById(mainarr[i].id).value;
//   total = total + (sto * mainarr[i].price);
//   document.getElementById('tot').innerHTML ="total"+ total;
 function totalamout()
 {
     var cart = document.getElementsByClassName('cart')[0];
     var cart_item = cart.document.getElementsByClassName('cart_item')
     var total = 0
     for(var i = 0 ; i<cart_item.length; i++)
     {
         
     }

 }
  
}


// document.write("</table>");
document.write(html1);


