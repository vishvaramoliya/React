window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var text = document.getElementById('a');
    var text1 = document.getElementById('nav')
    if (window.scrollY >= window.innerHeight * 0.1  ) {
      header.style.backgroundColor = '#101010';
      header.style.boxShadow = 'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px';
      header.style.boxBottom = '1px solid white';
      text.style.color = 'red';
      header.style.height = '70px';
    } else {
      header.style.backgroundColor = 'transparent';
      text.style.color = 'white'
      header.style.height = '100px';
    }
  });

  const icon = document.getElementById('icon1');
  const nav = document.getElementById('nav');

  icon.addEventListener('click', () => {
      if (nav.style.display === 'block') {
          nav.style.display = 'none';
          
      } else {
          nav.style.display = 'block';
      }
  });

  nav.style.display = 'none';