/*Header Slider */
const panels = document.querySelectorAll('.panel');
const hr = document.querySelectorAll(".horizontal-content");
const accords = document.querySelectorAll(".accord");
const collaps = document.querySelectorAll(".collapse-item");
const tabs = document.querySelectorAll(".tabs");
const tbt = document.querySelectorAll(".tab-button");
const menuitem = document.querySelectorAll(".menu-item");
const nv = document.getElementById("navigation");
var menu = document.getElementById("navigation");
const tabWrapper = document.getElementsByClassName("tab-wrapper");
var i = 0;

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active-item');
        i = panel.id.toString();
        clearInterval(mytimer);
        mytimer = setInterval(() => {
            addActiveClass();
        }, 20000);
    });
});

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active-item');
    });
}

function addActiveClass() {
    if (i == panels.length) {
        i = 0;
    }
    removeActiveClasses();
    panels[i].classList.add("active-item");
    i++;
}



var mytimer = setInterval(() => {
    addActiveClass();
}, 3000);




/* Swiper Slider */

var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function(index, className) {
            return '<span class="' + className + '">' + "</span>";
        },
    },
    navigation: {
        nextEl: ".swiper-button-next-custom",
        prevEl: ".swiper-button-prev-custom",
    },
    autoplay: {
        delay: 3000,
    }
});

/* Collaps menu*/

collaps.forEach((cp) => {
    cp.addEventListener('click', () => {
        removeActiveCollaps();
        cp.classList.add("active-collapse");

    });
});

function removeActiveCollaps() {
    collaps.forEach((cp) => {
        cp.classList.remove('active-collapse');
    });
}

/*Tab menu */

tbt.forEach((tbt) => {
    tbt.addEventListener('click', () => {
        removeActiveTab();
        removeActivebutton();
        document.getElementById(tbt.getAttribute("data-set").toString()).classList.add("active-tab");
        tbt.classList.add("active-tab-button");
        tabWrapper.style.height = document.getElementsByClassName("tabs");

    });
});

function removeActiveTab() {
    tabs.forEach((tab) => {
        tab.classList.remove('active-tab');
    });
}

function removeActivebutton() {
    tbt.forEach((tbt) => {
        tbt.classList.remove('active-tab-button');
    });
}



function Scroll() {
    var ypos = window.pageYOffset;
    var mainNav = document.getElementById("navigation-main");
    if (ypos > 300) {
        mainNav.classList.add("scroll-nav");
    } else {
        mainNav.classList.remove("scroll-nav");
    }
}
window.addEventListener("scroll", Scroll);


wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 150, // default
    mobile: true, // default
    live: true // default
})
wow.init();

/* parallax efecti */

function closenav() {
    var closebt = document.getElementById("fa-times");
    if (menu.style.right == "0%") {
        menu.style.right = "-100%";
    } else {
        menu.style.right = "0%";
    }
}

/* Smooth Scroll */

$(function() {
    $('a[href*="#"]:not(.carousel-control)').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - ($('#navigation-main').height() + 10),
                }, 300);
                return false;
            }
        }
    });
});

/*Smooth Scroll Active Class List*/



menuitem.forEach((mn) => {
    mn.addEventListener('click', () => {
        menu.style.right = "-100%";
    });
});