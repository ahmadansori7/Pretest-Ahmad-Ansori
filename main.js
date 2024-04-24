document.addEventListener('DOMContentLoaded', function() {
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    var sectionPositions = Array.from(sections).map(function(section) {
        return section.offsetTop;
    });

    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;

        var activeSectionIndex = sectionPositions.findIndex(function(pos) {
            return pos > scrollPosition - 100; 
        });

        var activeSectionId = sections[activeSectionIndex].getAttribute('id');
        
        activateNavLink(activeSectionId);
    });

    function activateNavLink(sectionId) {
        removeActiveClass();
        navLinks.forEach(function(navLink) {
            if (navLink.getAttribute('href') === '#' + sectionId) {
                navLink.classList.add('active');
            }
        });
    }

    function removeActiveClass() {
        navLinks.forEach(function(navLink) {
            navLink.classList.remove('active');
        });
    }
});



$(document).ready(function() {
    $('#play-button').on('click', function() {
        $('#video-container').fadeIn(); 
    });
});