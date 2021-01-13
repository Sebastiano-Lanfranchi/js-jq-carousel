
$(document).ready(function() {

  $('.next').click(function() {
    $('.images').find('img.active').next().
    addClass('active');
    $('.images').find('img.active').prev().
    removeClass('active');
  })

  $('.prev').click(function() {
    $('.images').find('img.active').prev().
    addClass('active');
    $('.images').find('img.active').next().
    removeClass('active');
  })

if(e.keyCode === 37){
  $('.prev').click(function() {
    $('.images').find('img.active').prev().
    addClass('active');
    $('.images').find('img.active').next().
    removeClass('active');
  })
  if(e.keyCode === 39){
    $('.next').click(function() {
      $('.images').find('img.active').next().
      addClass('active');
      $('.images').find('img.active').prev().
      removeClass('active');
    })
  }
}


})
