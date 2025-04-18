let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? '1' : '0';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Optional: Auto-slide every 5 seconds
setInterval(nextSlide, 4000);


// JS for Registertration form Modal Code --- 

function validateForm() {
    let isValid = true;

    // Clear previous error messages
    document.getElementById('firstNameError').innerText = '';
    document.getElementById('lastNameError').innerText = '';
    document.getElementById('mobileError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('ageError').innerText = '';

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const email = document.getElementById('email').value.trim();
    const age = document.getElementById('age').value.trim();

    if (!firstName) {
        document.getElementById('firstNameError').innerText = 'First name is required.';
        isValid = false;
    }
    if (!lastName) {
        document.getElementById('lastNameError').innerText = 'Last name is required.';
        isValid = false;
    }
    if (!mobile || !/^\d{10}$/.test(mobile)) {
        document.getElementById('mobileError').innerText = 'Enter a valid 10-digit mobile number.';
        isValid = false;
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('emailError').innerText = 'Enter a valid email address.';
        isValid = false;
    }
    if (!age || age < 1 || age > 120) {
        document.getElementById('ageError').innerText = 'Enter a valid age.';
        isValid = false;
    }

    return isValid;
}

function cancel() {
    document.getElementById('registrationForm').reset();
    document.getElementById('firstNameError').innerText = '';
    document.getElementById('lastNameError').innerText = '';
    document.getElementById('mobileError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('ageError').innerText = '';
}


// Contact Form Js start Here

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation (for demonstration)
    if(name && email && message) {
        // In a real scenario, here you would send the form data to a server
        alert('Thank you for your message!');
    } else {
        alert('Please fill in all the fields.');
    }
});



// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }


// Testimonail Section Js Start Here
var swiper = new Swiper(".testimonial-wrapper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,
    loop: true,
    speed: 1300,
    autoplay: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      480: {
        slidesPerView: 2,
        slidesPerGroup: 1
      }
    }
  });
  
