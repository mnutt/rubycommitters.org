$(document).ready(function() {
  $("li.account div.image-wrapper img").mouseenter(function(e) {
    var photoUrl = $(this).attr('src').replace(/lines/, 'photos')
    if(photoUrl.match(/\/fox\d/) == null) { photoUrl = photoUrl.replace(/\.png/, '\.jpg'); }

    $(this).attr('src', photoUrl);
  }).mouseout(function(e) {
    var lineUrl = $(this).attr('src').replace(/photos/, 'lines').replace(/\.jpg/, '\.png');

    $(this).attr('src', lineUrl);
  });
});
