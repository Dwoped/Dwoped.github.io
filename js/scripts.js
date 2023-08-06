/*!
* Start Bootstrap - Stylish Portfolio v6.0.4 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', event => {

    const sidebarWrapper = document.getElementById('sidebar-wrapper');
    let scrollToTopVisible = false;
    // Closes the sidebar menu
    const menuToggle = document.body.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', event => {
        event.preventDefault();
        sidebarWrapper.classList.toggle('active');
        _toggleMenuIcon();
        menuToggle.classList.toggle('active');
    })

    // Closes responsive menu when a scroll trigger link is clicked
    var scrollTriggerList = [].slice.call(document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger'));
    scrollTriggerList.map(scrollTrigger => {
        scrollTrigger.addEventListener('click', () => {
            sidebarWrapper.classList.remove('active');
            menuToggle.classList.remove('active');
            _toggleMenuIcon();
        })
    });

    function _toggleMenuIcon() {
        const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
        const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-times');
        if (menuToggleBars) {
            menuToggleBars.classList.remove('fa-bars');
            menuToggleBars.classList.add('fa-times');
        }
        if (menuToggleTimes) {
            menuToggleTimes.classList.remove('fa-times');
            menuToggleTimes.classList.add('fa-bars');
        }
    }

    // Scroll to top button appear
    document.addEventListener('scroll', () => {
        const scrollToTop = document.body.querySelector('.scroll-to-top');
        if (document.documentElement.scrollTop > 100) {
            if (!scrollToTopVisible) {
                fadeIn(scrollToTop);
                scrollToTopVisible = true;
            }
        } else {
            if (scrollToTopVisible) {
                fadeOut(scrollToTop);
                scrollToTopVisible = false;
            }
        }
    })
})

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};

/* Add .bar-animation Class Only When Bar In View (Start) */

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('#bar1');
  
      if (entry.isIntersecting) {
        square.classList.add('bar-animation');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('bar-animation');
    });
  });

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('#bar2');
  
      if (entry.isIntersecting) {
        square.classList.add('bar-animation');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('bar-animation');
    });
  });
  
const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('#bar3');
  
      if (entry.isIntersecting) {
        square.classList.add('bar-animation');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('bar-animation');
    });
  });

const observer4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('#bar4');
  
      if (entry.isIntersecting) {
        square.classList.add('bar-animation');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('bar-animation');
    });
  });

const observer5 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('#bar5');
  
      if (entry.isIntersecting) {
        square.classList.add('bar-animation');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('bar-animation');
    });
  });
  
observer.observe(document.querySelector('#skillset'));
observer2.observe(document.querySelector('#skillset'));
observer3.observe(document.querySelector('#skillset'));
observer4.observe(document.querySelector('#skillset'));
observer5.observe(document.querySelector('#skillset'));

/* Add .bar-animation Class Only When Bar In View (END) */