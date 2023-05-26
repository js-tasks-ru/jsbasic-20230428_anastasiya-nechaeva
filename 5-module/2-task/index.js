function toggleText() {
  var button = document.querySelector(".toggle-text-button");
    button.addEventListener('click', function () {
      document.getElementById('text').hidden = !document.getElementById('text').hidden
  });
}

