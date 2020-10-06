//Get the button:
mybutton = document.getElementById('myBtn');
logo = document.getElementById('nav-logo');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    mybutton.style.display = 'block';
    logo.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
    logo.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// SERVICES TABLE
function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName('tablink');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = '';
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = 'block';

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById('defaultOpen').click();

// left button
$('.segment').dimmer('show');
// right button
$('.segment').dimmer('hide');

/* Toggle between adding and removing the "responsive" class to the navbar when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById('myNavbar');
  if (x.className === 'navbar') {
    x.className += ' responsive';
  } else {
    x.className = 'navbar';
  }
}

// SITE MAP
// // Handler that uses various data-* attributes to trigger
// specific actions, mimicing bootstraps attributes
const triggers = Array.from(
  document.querySelectorAll('[data-toggle="collapse"]')
);

window.addEventListener(
  'click',
  (ev) => {
    const elm = ev.target;
    if (triggers.includes(elm)) {
      const selector = elm.getAttribute('data-target');
      collapse(selector, 'toggle');
    }
  },
  false
);

const fnmap = {
  toggle: 'toggle',
  show: 'add',
  hide: 'remove',
};
const collapse = (selector, cmd) => {
  const targets = Array.from(document.querySelectorAll(selector));
  targets.forEach((target) => {
    target.classList[fnmap[cmd]]('show');
  });
};
