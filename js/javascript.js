function tab() {
    window.onload = function() {
        hideTab(1);

    }

    var id = document.getElementById('tab-content');
    var items = id.getElementsByClassName('sub-tab');
    var tabContent = document.getElementsByClassName('glide');

    id.onclick = function(event) {
        var target = event.target;
        if (target.className == 'sub-tab') {
            for (var i = 0; i < items.length; i++) {
                if (target == items[i]) {
                    showTab(i);
                    break;
                }
            }
        }
    }

    function hideTab(a) {
        for (i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
            items[i].classList.remove('active');
        }
    };

    function showTab(b) {
        if (tabContent[b].classList.contains('hide')) {
            hideTab(0);
            items[b].classList.add('active');
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    };
}

function glideSlide() {
    const sliders = document.querySelectorAll('.glide')
    const conf = {
        type: 'carousel',
        perView: 4,
        autoplay: 5000,
        breakpoints: {
            800: {
                perView: 2
            },
            480: {
                perView: 1
            }
        }
    }
    sliders.forEach(item => {
            new Glide(item, conf).mount()
        })
        // var sliders = document.querySelectorAll('.glide');

    // for (var i = 0; i < sliders.length; i++) {
    //     var glide = new Glide('.glide', {
    //         type: 'carousel',
    //         perView: 4,
    //         breakpoints: {
    //             800: {
    //                 perView: 2
    //             },
    //             480: {
    //                 perView: 1
    //             }
    //         }
    //     })
    //     glide.mount()
    // }

}
tab();
glideSlide();
let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
    mainNav.classList.toggle("active");
});