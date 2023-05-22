function toggleText() {
  var button = document.querySelector(".toggle-text-button");
    button.addEventListener('click', function () {
      document.getElementById('text').hidden == true ? 
      document.getElementById('text').hidden = false :
      document.getElementById('text').hidden = true ;
  });
}

