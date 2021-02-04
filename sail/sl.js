$(document).ready(function(){
      var audioElement = document.createElement('audio');
      audioElement.setAttribute('src', 'sail!.mp3');
    
      $('#form').click(function() {
        audioElement.play();
      });
});






