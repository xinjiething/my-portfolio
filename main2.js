$(document).ready(function(){
  
    var $randomnbr = $('.nbr');
    var $timer= 10;
    var $it;
    var $data = 0;
    var index;
    var change;
    var letters = ["T", "H", "I", "N", "G", "_", "X", "I", "N", '_', "J", "I", "E"];
    
    $randomnbr.each(function(){
        
      change = Math.round(Math.random()*10);
      $(this).attr('data-change', change);
      
    });
    
    function random(){
      return Math.round(Math.random()*9);
    };
    
    function select(){
      return Math.round(Math.random()*$randomnbr.length+1);
    };
    
    function value(){
      $('.nbr:nth-child('+select()+')').html(''+random()+'');
      $('.nbr:nth-child('+select()+')').attr('data-number', $data);
      $data++;
      
      $randomnbr.each(function(){
          if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))){
            index = $('.ltr').index(this);
            $(this).html(letters[index]);
            $(this).removeClass('nbr');
          }
      });
      
    };
    
    $it = setInterval(value, $timer);
      
});


var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 1) || 1000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 180 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
};

// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//     acc[i].onclick = function(){
//         this.classList.toggle("active");
//         this.nextElementSibling.classList.toggle("show");
//   }
// }

// setTimeout(function(){
//     document.getElementById("nickname").style.visibility = "visible";

// }, 5000);

// $(document).ready(function(){

//     // Disable scrolling when modal box is open
//     $('.modal-open-button').on('click', function(){
//         if(fullpage_api){
//             fullpage_api.setAllowScrolling(false);
//         }
//     })
    
//     // Enable scrolling when modal box is closed
//     $('.modal').on('hidden.bs.modal', function(){
//         if(fullpage_api){
//             fullpage_api.setAllowScrolling(true);
//         }
//     });

//     // // Change project modal box title and button url
//     // $('.project').on('click', function(){
//     //     $('#projects-modal-label').html('<span class="dot">.</span> ' + $(this).find('.project-title').html());
//     //     $('#demo-web-button').attr('href', $(this).find('.demo-web-url').html());
//     //     $('#view-github-button').attr('href', $(this).find('.github-url').html());
//     //     $('#project-tags').html($(this).find('.project-tags').html());
//     // });
// });