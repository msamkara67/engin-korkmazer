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

        slides.forEach((slide) => {
            slide.classList.remove("active");
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

    startSlider();

});