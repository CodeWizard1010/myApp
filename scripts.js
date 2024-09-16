function clickYesButton() {
    var alertDiv = document.getElementById('custom-alert');
    alertDiv.style.display = 'block';
    setTimeout(function() {
      alertDiv.style.display = 'none';
    }, 5000);
  }

  function hoverNoButton() {
    let x = Math.random() * window.innerWidth-100;
    let y = Math.random() * window.innerHeight-100;
    document.getElementById('no-button').style.left = x + 'px';
    document.getElementById('no-button').style.top = y + 'px';
  }