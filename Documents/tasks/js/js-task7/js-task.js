var html = "<div><fieldset> <legend>Registration Form</legend><form action='#' onsubmit='return(fun())' name='myform' ><label>Name</label><br><input class='h' type='text' id='name' name='name'><span id='a'></span><br>";
html += "<label>Age</label><br><input type='number'class='h' id='age'><span id='b'></span><br><label>Email</label><br><input class='h' type='text' id='email'><span id='c'></span><br>";
html += "<label>Phone Number</label><br><input type='number'class='h' id='number'><span id='d'></span><br><label>City</label><br><select id='city'><option value='Kashmir'>Jammu Kashmir</option><option value='dehradun'>Dehradun</option><option value='lucknow'>Lucknow</option></select><br>"
html += "<label>Hobbies</label><br><input type='checkbox' value='volleyball' name='hob'>Volleyball<input type='checkbox' value='cricket' name='hob'>Cricket<input type='checkbox' value='basketball' name='hob'>Basketball<span id='e'></span><br><br>"
html +="<input type='submit' value='submit' id='k'></form>"
html += "</fieldset></div>";

function fun()
{
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
     var email = document.getElementById('email').value;
     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     var nameformat = /^[A-Za-z]+/;
     var number = document.getElementById('number').value;
     
    //  var hobbies = document.getElementById('hob').checked || document.getElementById('hob2').checked || document.getElementById('hob1').checked;
    if( name == "" ) {
        document.getElementById('a').innerHTML = 'please enter name *';
        
        return false;
     }
     else if(!name.match(nameformat))
     {
        document.getElementById('a').innerHTML = 'wrong format';
        return false;
     }
     else if(name.match(nameformat))
     {
        document.getElementById('a').innerHTML = ''; 
     }

    if(age == '')
    {
        document.getElementById('b').innerHTML = 'please enter age*';
        return false;
    }
   else if(age > 18)
    {
        document.getElementById('b').innerHTML = '';
       
    }
    else if(age < 18)
    {
        document.getElementById('b').innerHTML = 'age below 18 are not allowed';  
        return false;
    }
    
    if(email == '')
    {
        document.getElementById('c').innerHTML = 'please enter email';
        return false;
    }
    else if(!email.match(mailformat)){
        document.getElementById('c').innerHTML = 'wrong format';
        return false;
    }
  
    else if(email.match(mailformat))
    {
        document.getElementById('c').innerHTML = '';
        
    }
    if(number == '')
    {
        document.getElementById('d').innerHTML = 'please enter number';
        return false;
    }
    else if(number.length <10 || number.length>10)
    {
        document.getElementById('d').innerHTML = 'please enter  10 numbers only';
        return false;
    }
    else if(number.length ==10)
    {
        document.getElementById('d').innerHTML = '';
       
    }
//checkbox validate
 var a = document.myform.hob;
for(var i=0; i<a.length; i++)
       {
              if (a[i].checked == true)
{
    return true;         
}
  }
  document.getElementById('e').innerHTML = 'please select atleast  1 box';
    return false;
}
    


document.write(html);