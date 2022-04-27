// window.alert("hello");
const taj ={
hotel : "Taj",
rate : 240.0,
discount : 10,
 disc : function()
{
  var total = (taj.discount *  taj.rate)/100;
  var final = taj.rate - total;
  return final;
}
} ;


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var date =new  Date();
date.setDate(date.getDate() + 7);
var ex_date =date.getDate();
var day = days[date.getDay()];
var offerdate = ex_date +'  '+months[date.getMonth()] +' '+date.getFullYear() ;
var html= "<h1> "+ taj.hotel +"</h1>";
  html +="<h2>room rate = Rs."+taj.rate+"</h2>";
  html += "<h2> Discounted Rate = Rs."+taj.disc()+"</h2>";
  html += "<p> Offer expire next "+ day+"</p>"
  html += "<p>("+offerdate+")</p>";
document.write(html);