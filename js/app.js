document.addEventListener('DOMContentLoaded', start);

function start() {
  $('.modal').hide();
  var main = document.getElementsByClassName('Main')[0];
  main.onclick = animate;
  var mandap = document.getElementsByClassName('mandap')[0];
  mandap.onclick = weddingShow;
  var accomodation = document.getElementsByClassName('beachHut')[0];
  accomodation.onclick = accomodationShow;
  var transport = document.getElementsByClassName('rikshaw')[0];
  transport.onclick = transportShow;
  var instagram = document.getElementsByClassName('instagram')[0];
  instagram.onclick = instagramShow;
  var rsvp = document.getElementsByClassName('rsvp')[0];
  rsvp.onclick = rsvpShow;
  var closeButton = document.getElementsByClassName('closeButton')[0];
  closeButton.onclick = function() {
    $('.modal').hide();
  }
  var closeButton2 = document.getElementsByClassName('closeButton2')[0];
  closeButton2.onclick = function() {
    $('.modal').hide();
  }
  var closeButton3 = document.getElementsByClassName('closeButton3')[0];
  closeButton3.onclick = function() {
    $('.modal').hide();
  }
  var closeButton4 = document.getElementsByClassName('closeButton4')[0];
  closeButton4.onclick = function() {
    $('.modal').hide();
  }
  var closeButton5 = document.getElementsByClassName('closeButton5')[0];
  closeButton5.onclick = function() {
    $('.modal').hide();
  }
}

function weddingShow() {
  $('.modal').show();
  $('.mandapModal').show();
  $('.accomodationModal').hide();
  $('.transportModal').hide();
  $('.instagramModal').hide();
  $('.rsvpModal').hide();
}

function accomodationShow() {
  console.log('Accomodation was clicked');
  $('.modal').show();
  $('.accomodationModal').show();
  $('.mandapModal').hide();
  $('.transportModal').hide();
  $('.instagramModal').hide();
  $('.rsvpModal').hide();
}

function transportShow() {
  console.log('Transport was clicked');
  $('.modal').show();
  $('.accomodationModal').hide();
  $('.mandapModal').hide();
  $('.transportModal').show();
  $('.instagramModal').hide();
  $('.rsvpModal').hide();
}

function instagramShow() {
  console.log('Instagram was clicked');
  $('.modal').show();
  $('.accomodationModal').hide();
  $('.mandapModal').hide();
  $('.transportModal').hide();
  $('.instagramModal').show();
  $('.rsvpModal').hide();
  $('.memoryGamePic').hide();

  $('.card').click(function(){
    console.log($(this).attr("id"));
    var picID = $(this).attr("id");
    $(`.${picID}`).show();
    console.log($(".memoryGamePic:visible").length);
    if ($(".memoryGamePic:visible").length == 1) {
        console.log('1 card is showing');
    } else if  ($(".memoryGamePic:visible").length == 2) {
      console.log('2 cards are showing');
      console.log(($(".memoryGamePic:visible")[0]).id);
      if (($(".memoryGamePic:visible")[0]).id == ($(".memoryGamePic:visible")[1]).id) {
        (($(".memoryGamePic:visible")[0]).parentElement).classList.remove("card");
        (($(".memoryGamePic:visible")[0]).parentElement).classList.add("showCard");
        ($(".memoryGamePic:visible")[1]).classList.remove("memoryGamePic");
        ($(".memoryGamePic:visible")[0]).classList.remove("memoryGamePic");
        console.log('Same two cards showing!');
      };
    } else {
      console.log('more than 2 cards are showing');
      console.log($(this)[0].classList);
      $('.memoryGamePic:visible').hide();

      // if (!($(this)[0].classList.contains("showCard"))) {
      //   console.log($('.memoryGamePic:visible'));
      // }
      // if (!(($('.memoryGamePic:visible')[0]).parentElement).classList.contains("showCard")) {
      //   $('.memoryGamePic:visible').hide();
      // } else {
      //   console.log('showCard is contained');
      // }
    }
  });
}

function rsvpShow() {
  console.log('RSVP was clicked');
  $('.modal').show();
  $('.accomodationModal').hide();
  $('.mandapModal').hide();
  $('.transportModal').hide();
  $('.instagramModal').hide();
  $('.rsvpModal').show();
}

function animate() {
  console.log('Main was clicked');
  $('.frontPage').animate({width: '0px'}, 'slow');
  $('.text').animate({marginLeft: '-50px'}, 'slow');
  $('.introText').animate({fontSize: '0px'}, 'slow');
  $('.Radhika').animate({marginLeft: '20px'}, 'slow', function() {
    $('.Ankur').animate({marginLeft: '20px'}, 'slow', function() {
      $('.areGetting').animate({marginLeft: '20px'}, 'slow', function() {
        $('.Married').animate({marginLeft: '20px'}, 'slow', function() {
          $('.onbeach').animate({marginLeft: '20px'}, 'slow', function() {
            $('.dateTime').animate({marginLeft: '20px'}, 'slow', function() {
            $('.palmTrees').animate({width: '400px'}, 'slow', function() {
              $('.mandapText').animate({marginLeft: '880px'}, 'slow');
              $('.mandap').animate({marginLeft: '880px'}, 'slow', function() {
                $('.beachHutText').animate({marginLeft: '880px'}, 'slow');
                $('.beachHut').animate({marginLeft: '880px'}, 'slow', function() {
                  $('.rikshawText').animate({marginLeft: '880px'}, 'slow');
                  $('.rikshaw').animate({marginLeft: '880px'}, 'slow', function() {
                    $('.instagramText').animate({marginLeft: '880px'}, 'slow');
                    $('.instagram').animate({marginLeft: '880px'}, 'slow', function() {
                      $('.rsvpText').animate({marginLeft: '880px'}, 'slow');
                      $('.rsvp').animate({marginLeft: '880px'}, 'slow');
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  })
})
  }
