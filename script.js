window.onbeforeunload = function () {
      window.scrollTo(0, 0);
  };

document.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  const blankDiv = document.querySelector('.blank');
  const movingImage = document.querySelector('#movingImage');

  const scrollRange = 800;
  const blankWidth = blankDiv.offsetWidth;
  const imageWidth = movingImage.offsetWidth;

  let newLeft = Math.min(scrollPosition / scrollRange * (blankWidth + imageWidth), blankWidth);
  let rotation = (scrollPosition / scrollRange) * 360;

  movingImage.style.left = `${newLeft}px`;
  movingImage.style.transform = `translateY(-50%) rotate(${rotation}deg)`;
});




document.getElementById('openBtn').addEventListener('click', function() {
  document.getElementById('contactPanel').style.display = 'block';
});

document.getElementById('closeBtn').addEventListener('click', function() {
  document.getElementById('contactPanel').style.display = 'none';
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  // Simple validation and form handling
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    alert('Your message has been sent!');
    // You can also add functionality to actually send the form data here
    document.getElementById('contactPanel').style.display = 'none'; // Close panel after sending
  } else {
    alert('Please fill out all fields.');
  }
});
