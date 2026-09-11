document.addEventListener("DOMContentLoaded", function () {

    const videos = [

        {
            id: "AS64zxLgn40",
            category: "LAPAROSKOPİK CERRAHİ",
            title: "Laparoskopik cerrahi uygulamaları"
        },

        {
            id: "b0lQO8aWqHU",
            category: "KADIN SAĞLIĞI",
            title: "Kadın sağlığında güncel yaklaşımlar"
        },

        {
            id: "7Yti_V0w7M4",
            category: "JİNEKOLOJİ",
            title: "Jinekolojik hastalıklarda değerlendirme"
        },

        {
            id: "1kChxDgmKq8",
            category: "GEBELİK",
            title: "Gebelik sürecinde dikkat edilmesi gerekenler"
        },

        {
            id: "cbcEbTRG-L8",
            category: "KADIN SAĞLIĞI",
            title: "Kadın sağlığı üzerine kısa bilgiler"
        },

        {
            id: "OwDbCuONzAQ",
            category: "JİNEKOLOJİ",
            title: "Jinekolojik değerlendirme ve tedavi"
        },

        {
            id: "QzGgZeii0C4",
            category: "GEBELİK",
            title: "Gebelik ve doğum süreci"
        },

        {
            id: "tUhGeE_vPz8",
            category: "CERRAHİ",
            title: "Cerrahi tedavi seçenekleri"
        },

        {
            id: "B8PWCgdCA4E",
            category: "DOKTOR ANLATIYOR",
            title: "Doç. Dr. Engin Korkmazer anlatıyor"
        }

    ];


    const groupSize = 4;

    let currentGroup = 0;

    let activeVideo = videos[0];


    const mainVideo =
        document.getElementById("main-video");

    const videoSide =
        document.querySelector(".video-side");

    const prevButton =
        document.getElementById("video-prev-group");

    const nextButton =
        document.getElementById("video-next-group");

    const groupNumber =
        document.getElementById("video-group-number");


    const totalGroups =
        Math.ceil(
            videos.length /
            groupSize
        );


    function showMainVideo(video) {

        activeVideo = video;

        mainVideo.dataset.videoId =
            video.id;

        mainVideo.innerHTML = `
            <button
                class="main-video-cover"
                type="button"
            >

                <img
                    src="https://img.youtube.com/vi/${video.id}/hqdefault.jpg"
                    alt="Doç. Dr. Engin Korkmazer video"
                >

                <span class="video-play-button">
                    ▶
                </span>

                <div class="video-overlay">

                    <span>
                        ${video.category}
                    </span>

                    <strong>
                        ${video.title}
                    </strong>

                </div>

            </button>
        `;


        const cover =
            mainVideo.querySelector(
                ".main-video-cover"
            );


        cover.addEventListener(
            "click",
            function () {

                playMainVideo(
                    video.id
                );

            }
        );


        updateActiveCard();
    }


    function playMainVideo(videoId) {

        mainVideo.innerHTML = `
            <iframe
                src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0"
                title="Doç. Dr. Engin Korkmazer"
                referrerpolicy="strict-origin-when-cross-origin"
                allow="
                    accelerometer;
                    autoplay;
                    clipboard-write;
                    encrypted-media;
                    gyroscope;
                    picture-in-picture;
                    web-share
                "
                allowfullscreen>
            </iframe>
        `;

    }


    function renderSideVideos() {

        const start =
            currentGroup *
            groupSize;

        const end =
            start +
            groupSize;

        const groupVideos =
            videos.slice(
                start,
                end
            );


        videoSide.innerHTML = "";


        groupVideos.forEach(
            function (video) {

                const button =
                    document.createElement(
                        "button"
                    );


                button.type =
                    "button";


                button.className =
                    "side-video-card";


                button.dataset.videoId =
                    video.id;


                button.innerHTML = `

                    <img
                        src="https://img.youtube.com/vi/${video.id}/hqdefault.jpg"
                        alt=""
                    >

                    <div
                        class="side-video-content"
                    >

                        <span>
                            ${video.category}
                        </span>

                        <strong>
                            ${video.title}
                        </strong>

                    </div>
                `;


                button.addEventListener(
                    "click",
                    function () {

                        showMainVideo(
                            video
                        );

                    }
                );


                videoSide.appendChild(
                    button
                );

            }
        );


        groupNumber.textContent =
            `${currentGroup + 1} / ${totalGroups}`;


        updateActiveCard();
    }


    function updateActiveCard() {

        const cards =
            document.querySelectorAll(
                ".side-video-card"
            );


        cards.forEach(
            function (card) {

                if (
                    card.dataset.videoId ===
                    activeVideo.id
                ) {

                    card.classList.add(
                        "active"
                    );

                }

                else {

                    card.classList.remove(
                        "active"
                    );

                }

            }
        );

    }


    prevButton.addEventListener(
        "click",
        function () {

            currentGroup--;

            if (
                currentGroup < 0
            ) {

                currentGroup =
                    totalGroups - 1;

            }

            renderSideVideos();

        }
    );


    nextButton.addEventListener(
        "click",
        function () {

            currentGroup++;

            if (
                currentGroup >=
                totalGroups
            ) {

                currentGroup = 0;

            }

            renderSideVideos();

        }
    );


    showMainVideo(
        activeVideo
    );

    renderSideVideos();

});

/* ==========================================================
   HERO SLIDER
========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".hero-slide");
    const dots = document.querySelectorAll(".hero-dot");

    if (!slides.length || !dots.length) return;

    let currentSlide = 0;
    let sliderInterval;

    function showSlide(index) {

        slides.forEach((slide, i) => {

            slide.classList.remove("active", "leaving");

            if (i === currentSlide && i !== index) {
                slide.classList.add("leaving");
            }

        });

        dots.forEach((dot) => {
            dot.classList.remove("active");
        });

        slides[index].classList.add("active");
        dots[index].classList.add("active");

        currentSlide = index;
    }

    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }

    function startSlider() {
        sliderInterval = setInterval(nextSlide, 7000);
    }

    function resetSlider() {
        clearInterval(sliderInterval);
        startSlider();
    }

    dots.forEach((dot) => {

        dot.addEventListener("click", function () {

            const index = parseInt(this.dataset.slide);

            showSlide(index);
            resetSlider();

        });

    });

    /* TOUCH / SWIPE CONTROL */

    let touchStartX = 0;
    let touchStartY = 0;

    const slider = document.querySelector(".hero-slider");

    if (slider) {

        slider.addEventListener("touchstart", function (event) {

            touchStartX = event.changedTouches[0].screenX;
            touchStartY = event.changedTouches[0].screenY;

        }, { passive: true });


        slider.addEventListener("touchend", function (event) {

            const touchEndX = event.changedTouches[0].screenX;
            const touchEndY = event.changedTouches[0].screenY;

            const diffX = touchStartX - touchEndX;
            const diffY = touchStartY - touchEndY;

            /* Vertical movement is greater:
            user is scrolling the page, do nothing */
            if (Math.abs(diffY) > Math.abs(diffX)) {
                return;
            }

            /* Ignore very small finger movements */
            if (Math.abs(diffX) < 50) {
                return;
            }


            /* Swipe left -> next slide */
            if (diffX > 0) {

                const next = (currentSlide + 1) % slides.length;

                showSlide(next);
                resetSlider();

            }

            /* Swipe right -> previous slide */
            else {

                const previous =
                    (currentSlide - 1 + slides.length) % slides.length;

                showSlide(previous);
                resetSlider();

            }

        }, { passive: true });

    }

    startSlider();

});

/* ==========================================================
   MOBILE HEADER / HAMBURGER MENU
========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const header = document.querySelector(".site-header");
    const menuToggle = document.querySelector(".mobile-menu-toggle");
    const dropdowns = document.querySelectorAll(".nav-dropdown");

    if (!header || !menuToggle) return;


    /* MAIN MOBILE MENU */

    menuToggle.addEventListener("click", function () {

        const isOpen = header.classList.toggle("menu-open");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

    });


    /* MOBILE DROPDOWNS */

    dropdowns.forEach(function (dropdown) {

        const toggle = dropdown.querySelector(".nav-dropdown-toggle");

        if (!toggle) return;

        toggle.addEventListener("click", function (event) {

            if (window.innerWidth > 900) return;

            event.preventDefault();

            dropdowns.forEach(function (otherDropdown) {
                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove("mobile-open");
                }
            });

            dropdown.classList.toggle("mobile-open");

        });

    });


    /* CLOSE MENU WHEN NORMAL LINK IS CLICKED */

    const navLinks = document.querySelectorAll(
        ".main-nav > a:not(.appointment-button), .nav-dropdown-menu a, .appointment-button"
    );

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (window.innerWidth > 900) return;

            header.classList.remove("menu-open");

            menuToggle.setAttribute("aria-expanded", "false");

            dropdowns.forEach(function (dropdown) {
                dropdown.classList.remove("mobile-open");
            });

        });

    });


    /* RESET WHEN RETURNING TO DESKTOP */

    window.addEventListener("resize", function () {

        if (window.innerWidth > 900) {

            header.classList.remove("menu-open");

            menuToggle.setAttribute("aria-expanded", "false");

            dropdowns.forEach(function (dropdown) {
                dropdown.classList.remove("mobile-open");
            });

        }

    });

});