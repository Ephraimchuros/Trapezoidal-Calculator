

    var n = 0;
    var x_val;
    var z = 0;
    var points = [];
    var approx = [];
   
    var click = 0;
    var count = 0;
    var exp_val = 0;
    var true_val = 0;
    var up = 0;
   
    
    function eval()
      {
       if(click > 0)
         {
           remove();
         }
       trngle();
       if( z > up || z == up)
       {
           Alrt_2()
           click=0;
           document.getElementById("Error").innerHTML = "";
           document.getElementById("tri-ang").innerHTML = "";  
           document.getElementById("answer").innerHTML = "";     
       }
       else
       {
       
       process();
       reset();  
       tru_ValProcess()    
       console.log(exp_val + " and " + true_val);
       reset();
       n = 0;
         
       click++;
       }
       
       
      }
    
    function trngle()
      {
       var b = document.getElementById("Uppr").value;
       var a = document.getElementById("Lowr").value;
       n = document.getElementById("Rec-num").value;
       up = parseFloat(b);
       z = parseFloat(a);
       var tri = (b - a)/n;
       return tri;   
      }
    function trngle_trueVal()
      {
       var b = document.getElementById("Uppr").value;
       var a = document.getElementById("Lowr").value;
       z = parseFloat(a);
       var tri = (b - a)/n;
       return tri;   
      }
    
    
    function loop(trngle)
      {
       var i;
       x_val = trngle;
       
       for(i = 0; i <= n; i++)
         {
           if(i>0)
             {
               z = z + x_val;
             }
           points[i] = z;
           console.log(points[i]);
         }
         
      }
    
    function sol()
      {
       var i;
       
       for( i = 0; i < points.length; i++)
         {
           
           var functiontxt = document.getElementById("function").value;
           var indexAns = functiontxt.replace(/x/g, points[i]);
           
           if(i > 0 && i != n)
             {
               
               console.log("greater than 0 and less than n"+ indexAns);
               console.log(i);
               append(2*(math.evaluate(indexAns)),i);
               approx[i] = 2*(math.evaluate(indexAns));
             }
           
           else if(i == 0 || i == n)
             {
               console.log(i);
               console.log(indexAns);
               append(math.evaluate(indexAns),i);
               approx[i] = math.evaluate(indexAns);
             }
       
         }
      }
    
    function sol_trueVal()
      {
       var i;
       
       for( i = 0; i < points.length; i++)
         {
           
           var functiontxt = document.getElementById("function").value;
           var indexAns = functiontxt.replace(/x/g, points[i]);
           
           if(i > 0 && i != n)
             {
               
               console.log("greater than 0 and less than n Ephraim Pogi <3" + indexAns);
               console.log(i);
               approx[i] = 2*(math.evaluate(indexAns));
             }
           
           else if(i == 0 || i == n)
             {
               console.log(i);
               console.log(indexAns);
               approx[i] = math.evaluate(indexAns);
             }
       
         }
      }
    function ans()
     {
       var sum = 0;
       var i = 0;
       for( i = 0; i < approx.length; i++)
       {
         sum +=approx [i];
       }
       count = approx.length;
       exp_val = (trngle()/2)*sum;
       return (trngle()/2)*sum;
     }
    function ans_trueVal()
     {
       var sum = 0;
       var i = 0;
       for( i = 0; i < approx.length; i++)
       {
         sum +=approx [i];
       }
       true_val = (trngle_trueVal()/2)*sum;
       return (trngle_trueVal()/2)*sum;
     }
    
   
    function append(a,b)
     {   
       var para = document.createElement("p");
       para.setAttribute("id", "p2");
       if(b > 0 && b != n)
       {
       var node = document.createTextNode("2f(x" + b + ") = " + a);
       }
       else if(b == 0 || b == n){
       var node = document.createTextNode("f(x" + b + ") = " + a);
       }
       para.appendChild(node);
       var element = document.getElementById("div1").appendChild(para);    
     } 
       
    function remove()
     {
       var i;
       
       for( i = 0; i < count; i++)
       {
         var myobj = document.getElementById("p2");
         myobj.remove();
       }
     }
    function reset()
     {
       points.length = 0;
       approx.length = 0;
       z = 0;    
       x_val = 0;    
     }
     
    function process()
     {
       
       document.getElementById("tri-ang").innerHTML = "Delta x = " + trngle(); 
       loop(trngle());
       sol();
       document.getElementById("answer").innerHTML = "Answer = " + ans();
       
     }
    function tru_ValProcess()
     {
       n++;
       console.log("this is 2nd tri " + n);
       trngle_trueVal();
       console.log("this is 2nd tri " + trngle_trueVal());
       loop(trngle_trueVal());
       sol_trueVal();
       console.log("this is truevalue " + ans_trueVal());
       var Error = (((true_val-exp_val)/exp_val)*100);
       
       if(Error < 0)
         {
           Error = Error*-1;
         }
       document.getElementById("Error").innerHTML = "Error = " + Error + "%";
     }
   
   function Alrt_2()
     {
       alert("Lower value must be lesser than the upper value.");
       return false;
       
     }
       