$(document).ready(function() {
    // Get the text content
    var text = $("#typing-text").text();
    
    // Empty the text content
    $("#typing-text").empty();
    
    // Initialize the index
    var i = 0;
    
    // Set an interval to gradually reveal each character
    var typingInterval = setInterval(function() {
      // Append the current character to the text
      $("#typing-text").text($("#typing-text").text() + text[i]);
      
      // Move the cursor to the next character
      i++;
      
      // Check if we've reached the end of the text
      if (i == text.length) {
        // Clear the interval when done
        clearInterval(typingInterval);
      }
    }, 100); // Adjust the interval duration as needed

    function animateText() {
        $('.carousel-caption').animate({
          opacity:1,
           left: '0px',
           right:'0px',
           height: '550px',
            width: '1050px'
        
      }, 2000,
      function() {
          // Animation complete, fade out
          $(this).animate({
            opacity: 0
          }, 1000);
        });
      }
      setInterval(animateText, 1000); 
      $('.circular-progress').each(function() {
        let circularProgress = $(this);
        let progressStartValue = 0;
        let progressEndValue = parseInt(circularProgress.data('end-value'), 10);
        let speed = 100;
    
        let progress = setInterval(function() {
          progressStartValue++;
          circularProgress.find('.progress-value').text(`${progressStartValue}%`);
          circularProgress.css('background', `conic-gradient(rgb(180, 15, 81) ${progressStartValue * 3.6}deg, #ededed 0deg)`);
    
          if (progressStartValue === progressEndValue) {
            clearInterval(progress);
          }
        }, speed);
    
        // Set progressEndValue from the span text content
        progressEndValue = parseInt(circularProgress.find('.progress-value').text(), 10);
        circularProgress.data('end-value', progressEndValue);
      });
  });