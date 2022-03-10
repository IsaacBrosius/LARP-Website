function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    var size;
    var user=getCookie("username");
    if (user != "") {
      alert("Welcome back " + user + "!");

    } else {
       user = prompt("Please enter your name so that I may remember you." ,"");
       if (user != "") {
         setCookie("username", user, 30);
        
       }
       
    }
  }

  function mobileView() {
    document.getElementById('iframe').style.height = '200px';
    document.getElementById('view').innerHTML = 'Mobile view is on.';
  }

  function computerView() {
    document.getElementById('iframe').style.height = '660px';
    document.getElementById('view').innerHTML = 'Computer view is on.';
  }

  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });