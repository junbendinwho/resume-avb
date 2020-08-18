$(window).load(function(){
    $(".text-content").mCustomScrollbar({
      theme: "minimal",
      alwaysShowScrollbar:0,
      scrollButtons: {enable:true},
      scrollInertia: 2000
    });
    HTMLPercent();
    CSSPercent();
    JscriptPercent();
    aspPercent();
    vbPercent();
    csPercent();
    mssqlPercent();
    phpPercent();
    photosPercent()
    premPercent();
    $(".aboutme-container").hide();
    $(".contact-container").hide(); 
});

var resumesel = 1
var aboutmesel = 0
var contactsel = 0


// set the starting position of the cursor outside of the screen
var clientX = -300,
    clientY = -300,
// elements 
    outerCursor = document.querySelector(".cursor--outer"),
    innerCursor = document.querySelector(".cursor--inner")
var initCursor = function() {
  // add listener to track the current mouse position
  document.addEventListener("mousemove", function(e) {
    clientX = e.clientX
    clientY = e.clientY
  });
  
  var render = function() {
    TweenMax.set(outerCursor, {
      x: clientX,
      y: clientY,
      delay: .08,
      ease: Power1.easeOut
    });
    
     TweenMax.set(innerCursor, {
      x: clientX,
      y: clientY
    });
    
    requestAnimationFrame(render);
  };
  
  requestAnimationFrame(render);
};

initCursor();

mconth = $('.main-container').height();
if ($(window).width() < 1400 && $(window).width() > 760) {
  $('.right-content').height(mconth * .8);
  if ($(window).height() < 750) {
    $(".circlediv").hide()
  }else{
    $(".circlediv").show()
  }
}
else{
  if ($(window).width() < 760){
    $('.right-content').height(mconth * .79);
    $(".circlediv").hide()
  }
  else{
    $('.right-content').height(mconth * .79);
    if ($(window).height() <= 750) {
      $(".circlediv").hide()
    }else{
      $(".circlediv").show()
    }
  }
}

//Resize Animation

$(window).resize(function(){
  mconth = $('.main-container').height();
  if ($(window).width() < 1400 && $(window).width() > 760) {
    $('.right-content').height(mconth * .8);
    if ($(window).height() < 750) {
      $(".circlediv").hide()
    }else{
      $(".circlediv").show()
    }
  }
  else{
    if ($(window).width() < 760){
      $('.right-content').height(mconth * .79);
      $(".circlediv").hide()
    }
    else{
      $('.right-content').height(mconth * .79);
      if ($(window).height() < 750) {
        $(".circlediv").hide()
      }else{
        $(".circlediv").show()
      }
    }
  }
});


//Resume Clicked

$('#resume').click(function(){
  if (resumesel !=1){
  var origheightrd = $('.right-content').height();
    if ($(window).width() < 760) {
      rconth = $('.right-content').height();
      swidthpx = rconth * .03
      $(".right-content").animate({height:swidthpx},500
      ,function(){
        $('.percentage').text("0%")
        $('.myBar').width(0)
        $(".aboutme-container").hide(10);
        $(".resume-container").hide(10);
        $(".contact-container").hide(10);
        $(".resume-container").show(10);
        
      })
      $(".right-content").animate({height:origheightrd},800
      ,function()
        {
          HTMLPercent();
          CSSPercent();
          JscriptPercent();
          aspPercent();
          vbPercent();
          csPercent();
          mssqlPercent();
          phpPercent();
          photosPercent()
          premPercent();
        })  
    }
   else {
      rcontw = $('.right-content').width();
      swidthpx = rcontw * .45
      $(".right-content").animate({width:swidthpx}
      ,function(){
        $('.percentage').text("0%")
        $('.myBar').width(0)
        $(".aboutme-container").hide(10);
        $(".resume-container").hide(10);
        $(".contact-container").hide(10);
        $(".resume-container").show(10);
      })
      $(".right-content").animate({width:rcontw}
      ,function()
        {
          HTMLPercent();
          CSSPercent();
          JscriptPercent();
          aspPercent();
          vbPercent();
          csPercent();
          mssqlPercent();
          phpPercent();
          photosPercent()
          premPercent();
          $(".right-content").animate({width:'1152'})
        })  
    }
    $(".circlediv").animate({ 
      top: "41%",
    }, 600);
    $("#resume").css("color","#4e90cd")
    $("#aboutme").css("color","#d6d6d6")
    $("#contact").css("color","#d6d6d6")
    // $("#resume").animate({ 
    //   color: "#4e90cd",
    // },150 );
    // $("#aboutme").animate({ 
    //   color: "#d6d6d6",
    // },300 );
    // $("#contact").animate({ 
    //   color: "#d6d6d6",
    // },300 );
  }
    resumesel = 1
    aboutmesel = 0
    contactsel = 0
})

//About me Clicked

  $('#aboutme').click(function(){
    if (aboutmesel!=1){
      var origheightrd = $('.right-content').height();
      if ($(window).width() < 760) {
        rconth = $('.right-content').height();
        swidthpx = rconth * .03
        $(".right-content").animate({height:swidthpx},500
        ,function()
        {
          $(".aboutme-container").hide(10);
          $(".resume-container").hide(10);
          $(".contact-container").hide(10);
          $(".aboutme-container").show(10);
        })
        $(".right-content").animate({height:origheightrd},800)
      }
      else{
        rcontw = $('.right-content').width();
        swidthpx = rcontw * .45
        $(".right-content").animate({width:swidthpx}
        ,function()
        {
          $(".aboutme-container").hide(10);
          $(".resume-container").hide(10);
          $(".contact-container").hide(10);
          $(".aboutme-container").show(10);
        })
        $(".right-content").animate({width:rcontw}
          ,function(){
            $(".right-content").animate({width:'1152'})
          })
      }
      $(".circlediv").animate({ 
        top: "51%",
      }, 600 );
      $("#resume").css("color","#d6d6d6")
      $("#aboutme").css("color","#4e90cd")
      $("#contact").css("color","#d6d6d6")
    }
    resumesel = 0
    aboutmesel = 1
    contactsel = 0
  })

//Contact me Clicked

$('#contact').click(function(){
  if (contactsel!=1){
    var origheightrd = $('.right-content').height();
    if ($(window).width() < 760) {
      rconth = $('.right-content').height();
      swidthpx = rconth * .04
      $(".right-content").animate({height:swidthpx},500
      ,function()
      {
        $(".aboutme-container").hide(10);
        $(".resume-container").hide(10);
        $(".contact-container").hide(10);
        $(".contact-container").show(10);
      })
      $(".right-content").animate({height:origheightrd},800)
    } else{
      rcontw = $('.right-content').width();
      swidthpx = rcontw * .45
      $(".right-content").animate({width:swidthpx}
      ,function()
      {
        $(".aboutme-container").hide(10);
        $(".resume-container").hide(10);
        $(".contact-container").hide(10);
        $(".contact-container").show(10);
      })
      $(".right-content").animate({width:rcontw}
        ,function(){
          $(".right-content").animate({width:'1152'})
        })
    }
    $(".circlediv").animate({ 
      top: "61.3%",
    }, 600 );
    $("#resume").css("color","#d6d6d6")
    $("#aboutme").css("color","#d6d6d6")
    $("#contact").css("color","#4e90cd")
  }
  resumesel = 0
  aboutmesel = 0
  contactsel = 1
})

//IF NAVBAR IS SELECTED HOVER SETTINGS

//resumesel

$("#resume").css("color","#4e90cd")

$(function() {
  $('#resume').hover(function() {
    $("#resume").css("color","#4e90cd")
  }, function() {
    if(resumesel == 1){
      $("#resume").css("color","#4e90cd")
    }
    else{
      $("#resume").css("color","#d6d6d6")
    }
  });
});

//aboutmesel

$(function() {
  $('#aboutme').hover(function() {
    $("#aboutme").css("color","#4e90cd")
  }, function() {
    if(aboutmesel == 1){
      $("#aboutme").css("color","#4e90cd")
    }
    else{
      $("#aboutme").css("color","#d6d6d6")
    }
  });
});

//contactsel

$(function() {
  $('#contact').hover(function() {
    $("#contact").css("color","#4e90cd")
  }, function() {
    if(contactsel == 1){
      $("#contact").css("color","#4e90cd")
    }
    else{
      $("#contact").css("color","#d6d6d6")
    }
  });
});


//SKILL PERCENT

//HTML Percent

var htmlcnt = 0;
function HTMLPercent() {
  if (htmlcnt == 0) {
    htmlcnt = 1;
    var percent = document.getElementById("htmlPercent")
    var elem = document.getElementById("htmlBar");
    var width = 1;
    var id = setInterval(frame, 17);
    function frame() {
      if (width >= 89) {
        clearInterval(id);
        htmlcnt = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        percent.innerHTML = width * 1  + '%';
      }
    }
  }
}

// CSS Percent

var csscnt = 0;
function CSSPercent() {
  if (csscnt == 0) {
    csscnt = 1;
    var percent = document.getElementById("cssPercent")
    var elem = document.getElementById("cssBar");
    var width = 1;
    var id = setInterval(frame, 17);
    function frame() {
      if (width >= 86) {
        clearInterval(id);
        csscnt = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        percent.innerHTML = width * 1  + '%';
      }
    }
  }
}

//ASP.NET Percent

var aspcnt = 0;
function aspPercent() {
  if (aspcnt == 0) {
    aspcnt = 1;
    var percent = document.getElementById("aspPercent")
    var elem = document.getElementById("aspBar");
    var width = 1;
    var id = setInterval(frame, 17);
    function frame() {
      if (width >= 85) {
        clearInterval(id);
        aspcnt = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        percent.innerHTML = width * 1  + '%';
      }
    }
  }
}


//VB.NET Percent

var vbcnt = 0;
function vbPercent() {
  if (vbcnt == 0) {
    vbcnt = 1;
    var percent = document.getElementById("vbPercent")
    var elem = document.getElementById("vbBar");
    var width = 1;
    var id = setInterval(frame, 17);
    function frame() {
      if (width >= 90) {
        clearInterval(id);
        vbcnt = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        percent.innerHTML = width * 1  + '%';
      }
    }
  }
}

//C# Percent

var cscnt = 0;
function csPercent() {
  if (cscnt == 0) {
    cscnt = 1;
    var percent = document.getElementById("c#Percent")
    var elem = document.getElementById("c#Bar");
    var width = 1;
    var id = setInterval(frame, 17);
    function frame() {
      if (width >= 70) {
        clearInterval(id);
        cscnt = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        percent.innerHTML = width * 1  + '%';
      }
    }
  }
}

//MSSQL Percent

var mssqlcnt = 0;
function mssqlPercent() {
  if (mssqlcnt == 0) {
    mssqlcnt = 1;
    var percent = document.getElementById("mssqlPercent")
    var elem = document.getElementById("mssqlBar");
    var width = 1;
    var id = setInterval(frame, 17);
    function frame() {
      if (width >= 83) {
        clearInterval(id);
        mssqlcnt = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        percent.innerHTML = width * 1  + '%';
      }
    }
  }
}


//Javascript Percent

var jscriptcnt = 0;
function JscriptPercent() {
  if (jscriptcnt == 0) {
    jscriptcnt = 1;
    var percent = document.getElementById("jscriptPercent")
    var elem = document.getElementById("jscriptBar");
    var width = 1;
    var id = setInterval(frame, 17);
    function frame() {
      if (width >= 72) {
        clearInterval(id);
        jscriptcnt = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        percent.innerHTML = width * 1  + '%';
      }
    }
  }
}

//PHP Percent

var phpcnt = 0;
function phpPercent() {
  if (phpcnt == 0) {
    phpcnt = 1;
    var percent = document.getElementById("phpPercent")
    var elem = document.getElementById("phpBar");
    var width = 1;
    var id = setInterval(frame, 17);
    function frame() {
      if (width >= 68) {
        clearInterval(id);
        phpcnt = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        percent.innerHTML = width * 1  + '%';
      }
    }
  }
}


//Photoshop Percent


var photoscnt = 0;
function photosPercent() {
  if (photoscnt == 0) {
    photoscnt = 1;
    var percent = document.getElementById("photosPercent")
    var elem = document.getElementById("photosBar");
    var width = 1;
    var id = setInterval(frame, 17);
    function frame() {
      if (width >= 97) {
        clearInterval(id);
        photoscnt = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        percent.innerHTML = width * 1  + '%';
      }
    }
  }
}


//Premiere Percent


var premcnt = 0;
function premPercent() {
  if (premcnt == 0) {
    premcnt = 1;
    var percent = document.getElementById("premPercent")
    var elem = document.getElementById("premBar");
    var width = 1;
    var id = setInterval(frame, 17);
    function frame() {
      if (width >= 87) {
        clearInterval(id);
        premcnt = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        percent.innerHTML = width * 1  + '%';
      }
    }
  }
}


