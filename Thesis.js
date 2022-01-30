function showMinute(){
    var currentMinute = new Date().getMinutes();
    console.log(currentMinute);
    document.getElementById("minute").innerText=currentMinute;
    }


var x;
      function show_hide(){
          if(x == 1){
              document.getElementById("test").style.display="inline";
              return x=0;
          }
          else{
              document.getElementById("test").style.display="none";
              return x=1;
          }
      }


var y;
    function show_hide1(){
        if(y == 1){
            document.getElementById("test1").style.display="inline";
            return y=0;
          }
        else{
            document.getElementById("test1").style.display="none";
            return y=1;
        }
    }


