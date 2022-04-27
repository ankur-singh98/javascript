var products = {
    "Electronics":{
    "Television":[
    {
    "id":"PR001",
    "name":"MAX-001",
    "brand":"Samsung"
    },

    {
    "id":"PR002",
    "name":"BIG-301",
    "brand":"Bravia"
    },
    {
    "id":"PR003",
    "name":"APL-02",
    "brand":"Apple"
    }
    ],
    "Mobile":[
    {
    "id":"PR004",
    "name":"GT-1980",
    "brand":"Samsung"
    },
    {
    "id":"PR005",
    "name":"IG-5467",
    "brand":"Motorola"
    },
    {
    "id":"PR006",
    "name":"IP-8930",
    "brand":"Apple"
    }
    ]
    },
    "Jewelry":{
    "Earrings":[
    {
    "id":"PR007",
    "name":"ER-001",
    "brand":"Chopard"
    },
    {
    "id":"PR008",
    "name":"ER-002",
    "brand":"Mikimoto"
    },
    {
    "id":"PR009",
    "name":"ER-003",
    "brand":"Bvlgari"
    }
    ],
    "Necklaces":[
    {
    "id":"PR010",
    "name":"NK-001",
    "brand":"Piaget"
    },
    {
    "id":"PR011",
    "name":"NK-002",
    "brand":"Graff"
    },
    {
    "id":"PR012",
    "name":"NK-003",
    "brand":"Tiffany"
    }
    ]
    }
    }

    var html = "<div id='main'><h1>TABLE</h1><table border='1'> <tr><th>Category</th> <th>Subcategory</th><th> ID</th><th> Name</th><th> Brand</th></tr>";
    for(let i in products)
    {
        
        for(let j in products[i])
        {
           
           
        
        for(let k in products[i][j])
        {
            html += "<tr><td>"+i+"</td>";
        html += "<td>"+j+"</td>";
          
        html += "<td>"+products[i][j][k].id+"</td>";
        html += "<td>"+products[i][j][k].name+"</td>";
        html += "<td>"+products[i][j][k].brand+"</td></tr>";
            }
        }
    }
   
    // window.alert(a);
    html += "</table> <br> <h1>Mobile Category</h1>";
    html += "<table border='1'> <tr><th>Category</th> <th>Subcategory</th><th> ID</th><th> Name</th><th> Brand</th></tr>";
    for(let i in products)
    {
        for(let j in products[i])
        {
         if(j == "Mobile"){
             for(let k in products[i][j])
             {

                html += "<tr><td>"+i+"</td>";
                html += "<td>"+j+"</td>";
                html += "<td>"+products[i][j][k].id+"</td>";
                html += "<td>"+products[i][j][k].name+"</td>";
                html += "<td>"+products[i][j][k].brand+"</td></tr>";
             }
            // if(products[i][j].)
            }
        }
    }
    html += "</table> <br>";
html += "<h2>Samsung</h2>";
for(let i in products)
{
    for(let j in products[i])
    {
        for( let k in products[i][j]) 
        {
            if(products[i][j][k].brand == "Samsung")
            {
               html += "<p> Product ID :"+products[i][j][k].id +"</p>"; 
               html += "<p> Product Name :"+products[i][j][k].name +"</p>";
               html += "<p> Subcategory :"+j +"</p>";
               html += "<p> Category :"+i +"</p><br>";
            }
        }
    }
}

html += "</table> <br>";

html += "<h2>Deleted Row Where ID -PR003</h2>";
html += "</table> <br> <h1>Mobile Category</h1>";
html += "<table border='1'> <tr><th>Category</th> <th>Subcategory</th><th> ID</th><th> Name</th><th> Brand</th></tr>";
for(let i in products)
{
    for(let j in products[i])
    {
    //  if(j == "Mobile"){
         for(let k in products[i][j])
         {
            if(products[i][j][k].id == "PR003")
            {
                 delete products[i][j][k];
            
            }
            else{
            html += "<tr><td>"+i+"</td>";
            html += "<td>"+j+"</td>";
            html += "<td>"+products[i][j][k].id+"</td>";
            // delete products[i][j][k].id == "PR003";
            html += "<td>"+products[i][j][k].name+"</td>";
            html += "<td>"+products[i][j][k].brand+"</td></tr>";
            }
        // if(products[i][j].)
        }
    }
}
html += "</table> <br>";


html += "<h2>Update Name BIG-555  Where ID -PR002</h2>";
html += "</table> <br> <h1>Mobile Category</h1>";
html += "<table border='1'> <tr><th>Category</th> <th>Subcategory</th><th> ID</th><th> Name</th><th> Brand</th></tr>";
for(let i in products)
{
    for(let j in products[i])
    {
    //  if(j == "Mobile"){
         for(let k in products[i][j])
         {
            if(products[i][j][k].id == "PR002")
            {
                products[i][j][k].name ="BIG-555";

        
         }

         html += "<tr><td>"+i+"</td>";
         html += "<td>"+j+"</td>";
         html += "<td>"+products[i][j][k].id+"</td>";
         // delete products[i][j][k].id == "PR003";
         html += "<td>"+products[i][j][k].name+"</td>";
         html += "<td>"+products[i][j][k].brand+"</td></tr>";
        // if(products[i][j].)
        }
    }
}
html += "</table> <br></div>";
    document.write(html);
    // if(i == "Electronics");