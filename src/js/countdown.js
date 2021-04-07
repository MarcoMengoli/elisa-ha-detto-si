function setCountdown() 
{
  var second = 1000
  var minute = second * 60
  var hour = minute * 60
  var day = hour * 24

  var target = "Jul 24, 2021 16:00:00"
  var countdown = new Date(target).getTime()
  var intervalAction = setInterval(function()
  {    
        var now = new Date().getTime()
        var distance = countdown - now

        document.getElementById("cd-days").innerText = Math.floor(distance / (day)),
        document.getElementById("cd-hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("cd-minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("cd-seconds").innerText = Math.floor((distance % (minute)) / second);

        if (distance < 0) 
        {
          var countdownBefore = document.getElementById("countdown-before")
          var countdownAfter = document.getElementById("countdown-after")

          countdownBefore.style.display = "none";
          countdownAfter.style.display = "block";

          clearInterval(intervalAction);
        }
      }, 0)
  };