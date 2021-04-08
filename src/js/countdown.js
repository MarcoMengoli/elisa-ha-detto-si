function setCountdown() 
{
  var second = 1000
  var minute = second * 60
  var hour = minute * 60
  var day = hour * 24

  var targetDateTime = new Date("Jul 24, 2021 16:00:00").getTime()
  var intervalRef = undefined

  var calculateDistance = function(target)
  {    
    var now = new Date().getTime()
    var distance = target - now

    document.getElementById("cd-days").innerText = Math.floor(distance / (day))
    document.getElementById("cd-hours").innerText = Math.floor((distance % (day)) / (hour))
    document.getElementById("cd-minutes").innerText = Math.floor((distance % (hour)) / (minute))
    document.getElementById("cd-seconds").innerText = Math.floor((distance % (minute)) / second)

    return distance
  }

  var setCountdownElements = function(distance, interval)
  {    
    if (distance < 0) 
    {
      var countdownBefore = document.getElementById("countdown-before")
      var countdownAfter = document.getElementById("countdown-after")

      countdownBefore.style.display = "none"
      countdownAfter.style.display = "block"

      if (interval != undefined)
        clearInterval(interval);
    }
  }

  var calculateAndSet = function(target, interval)
  {
    var dist = calculateDistance(target)
    setCountdownElements(dist, interval)
  }

  var intervalRef = setInterval(function(){
    calculateAndSet(targetDateTime, intervalRef)
  }, 1000)

  calculateAndSet(targetDateTime, intervalRef)
}