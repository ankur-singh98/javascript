 var html = "<h1>Shopping Site</h1>";
 
//  <img src='a1.webp' ><div><h1>White 350rs <button  class='btn1' >Add Cart</button></h1></div></div><div ><img src='a6.jpg' ><div><h1>450 <button class='btn1'>Add Cart</button></h1></div></div><div ><img src='a4.jpg' ><div><h1>300 <button class='btn1'>Add Cart</button></h1></div>  </div></div>";


var mainarr = [
    {
id :1,
name : "White_shoe",
price : "350",
img : "a1.webp",
btn :"Add ToCart",
quantity : 0
},
{
    id :2,
    name : "Sports_shoe",
    price : "450",
    img : "a6.jpg",
    btn :"Add ToCart",
    quantity : 0
    
},
{
    id :3,
    name : "Light_shoe",
    price : "300",
    img : "a4.jpg",
    btn :"Add ToCart",
    quantity : 0
}
];
var newarr = [];
var newarr = mainarr.map(x => ` <div><img src='${x.img}'><div><h1 class='name'>${x.name} ${x.price} <button onclick="myfun(event)" class='${x.id}' >${x.btn}</button></h1></div></div>`).join('');

html +="<div id='main'>"+ newarr+"</div >";
html += "<h1>Cart</h1>";
var html1 = "<div class='namee'><table border='1' id='cart'></table></div><span id='total_price'> </span><div id='p'></div>"; 

document.write(html);
 var count = 0;
// document.write("");
function myfun(event)
{

     var element = document.getElementById("cart");
     var pu = document.getElementById("p");
    var x = event.target;
   var id = x.className;
  
   for(var i = 0;i<mainarr.length; i++)
   {
    if(mainarr[i].id == id)
    {
        
        var abb = "";
        var purchase ="";
        count =count+1;
        if(count==1)
        {
         
        abb +=  "<tr><th>Name</th><th>Image</th><th>Price</th><th>Quantity</th><th>Remove</th></tr>";
      purchase +="<button onclick='ref()' id='pu'>Purchase</button>";
        }
     
        
        if(!newarr.includes(mainarr[i].id))
        {
        newarr.push(mainarr[i].id);

        
       mainarr[i].quantity++;
        abb+="<tr class='cart_item' ><td class='cart_name'>"+mainarr[i].name+"</td><td><img src='"+mainarr[i].img+"' ></td><td>"+mainarr[i].price+"</td><td class='tt'><input type='number' id='"+mainarr[i].id+"' onblur='prooo(event)' class='cart_quantity' value='"+(mainarr[i].quantity)+"'></td><td><button onclick='btn(event)' id='"+mainarr[i].id+"' class='btn_remove'>Remove</button></td><tr>";
       
  
        total();
        //  mainarr[i].quantity++;
        // mainarr[i].quantity++;
    }
else{
    var quan = ++mainarr[i].quantity;
    document.getElementById(mainarr[i].id).setAttribute("value",quan);
    total();

//    abb+="<tr class='cart_item' ><td class='cart_name'>"+mainarr[i].name+"</td><td><img src='"+mainarr[i].img+"' ></td><td>"+mainarr[i].price+"</td><td>"+quan+"</td><tr>";
    
//    alert(quan);
    // console.log(quan);
    }
// console.log(mainarr[i].name);
        // abb+="";
element.innerHTML += abb;
pu.innerHTML += purchase;
// totalcart();
    }
    // totalcart()
   }
//    totalcart();

}
function total()
{
   let total = 0;
    for(var i = 0;i<mainarr.length;i++)
    {
        var price = mainarr[i].price;
        var quantit = mainarr[i].quantity;
        total =total + (price * quantit);
        // alert(total);
    }
    document.getElementById("total_price").innerText="total" +total ;
}

function btn(event)
{
var t = event.target;
var btn_id = t.id;
t.parentElement.parentElement.remove();
for(var j = 0; j<newarr.length; j++)
{

    if(btn_id == newarr[j])
    {
   newarr.splice(j,1);
    }
    
// this.quan = 1;
//    document.getElementsByClassName(cart_quantity)[0].setAttribute("value",1);

}
for(var l = 0; l<mainarr.length; l++)
{
    if(btn_id == mainarr[l].id)
    {
        mainarr[l].quantity =0;
    }
  
}

total();
// abb+= "";
}
function ref()
{
    alert("thanks for shopping");
    window.location.reload();
}
function prooo(event)
{
 var v = event.target;
 var u = v.id;
 var tt =document.getElementById(v.id).value;

 if(tt <= 0 || isNaN(tt))
         {
            v.parentElement.parentElement.remove();
            for(var j = 0; j<newarr.length; j++)
{

    if(u == newarr[j])
    {
   newarr.splice(j,1);
    }
    
// this.quan = 1;
//    document.getElementsByClassName(cart_quantity)[0].setAttribute("value",1);

}
            tt =0;
         }
        
 for(var i =0;i<mainarr.length;i++)
 {
     if(u == mainarr[i].id)
     {
         mainarr[i].quantity =tt;
        
        //  document.getElementById(mainarr[i].id).setAttribute("value",tt);
     }
 }
 

 total();
 document.getElementById(v.id).setAttribute("value", tt);
}
document.write(html1);
// document.write(purchase);


