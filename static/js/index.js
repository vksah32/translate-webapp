// $(window).load(function() {
//   setTimeout(function() {
//     //fakeMessage();
//   }, 100);
// });
// 
// $(document).ready(function () {
//   $('.message-submit').click(function() {
//   console.log("hahah")
   
//    get_translation(msg)
// });


// })  

// function updateScrollbar() {
//   $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
//     scrollInertia: 10,
//     timeout: 0
//   });
// }

// function setDate(){
//   d = new Date()
//   if (m != d.getMinutes()) {
//     m = d.getMinutes();
//     $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
//   }
// }

// function insertMessage() {
//   msg = $('.message-input').val();
//   if ($.trim(msg) == '') {
//     return false;
//   }
//   $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
//   setDate();
//   $('.message-input').val(null);
//   updateScrollbar();
// 	interact(msg);
//   setTimeout(function() {
//     //fakeMessage();
//   }, 1000 + (Math.random() * 20) * 100);
// }

// $('.message-submit').click(function() {
//   insertMessage();
// });



// $(window).on('keydown', function(e) {
//   if (e.which == 13) {
//     insertMessage();
//     return false;
//   }
// })


// function interact(message){
// 	// loading message
//   $('<div class="message loading new"><figure class="avatar"><img src="/static/res/botim.png" /></figure><span></span></div>').appendTo($('.mCSB_container'));
// 	// make a POST request [ajax call]
// 	$.post('/message', {
// 		msg: message,
// 	}).done(function(reply) {
// 		// Message Received
// 		// 	remove loading meassage
//     $('.message.loading').remove();
// 		// Add message to chatbox
//     $('<div class="message new"><figure class="avatar"><img src="/static/res/botim.png" /></figure>' + reply['text'] + '</div>').appendTo($('.mCSB_container')).addClass('new');
//     setDate();
//     updateScrollbar();

// 		}).fail(function() {
// 				alert('error calling function');
// 				});
// }


function get_translation(){
  message = $('#eng').val();
  console.log("get_translation")
  $.post('/message', {
    msg: message,
  }).done(function(reply) {
    console.log(reply['text'])
    // $('<p>'+reply['text'] +'</p>').appendTo('#french');
    $('#french').append(reply['text']); 



    }).fail(function() {
        alert('error calling function');
        });


}
