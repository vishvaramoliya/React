window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var text = document.getElementById('a');

    if (window.scrollY >= window.innerHeight * 0.8) {
      header.style.backgroundColor = 'black';
      text.style.color = 'red';
    } else {
      header.style.backgroundColor = 'transparent';
      text.style.color = 'white'
    }
  });