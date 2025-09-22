<script>
    import { onMount } from "svelte";

    let images = [
        "/assets/slide/1.png",
        "/assets/slide/2.png",
        "/assets/slide/3.png",
        "/assets/slide/4.png",
        "/assets/slide/5.png",
        "/assets/slide/6.png",
        "/assets/slide/7.png",
        "/assets/slide/8.png",
        "/assets/slide/9.png",
        "/assets/slide/10.png",
        "/assets/slide/11.png",
        "/assets/slide/12.png",
        "/assets/slide/13.png",
        "/assets/slide/14.png",
        "/assets/slide/15.png",
        "/assets/slide/16.png",
        "/assets/slide/17.png",
        "/assets/slide/18.png",
        "/assets/slide/19.png",
    ];

    let slides = [...images, ...images];
    let current = 0;
    let slideWidth = 100;
    let isTransitioning = true;
    let interval;

    function nextSlide() {
        current += 1;
        if (current >= images.length) {
            isTransitioning = false;
            requestAnimationFrame(() => {
                current = 0;
                isTransitioning = true;
            });
        }
    }

    function prevSlide() {
        if (current <= 0) {
            isTransitioning = false;
            requestAnimationFrame(() => {
                current = images.length - 1;
                isTransitioning = true;
            });
        } else {
            current -= 1;
        }
    }

    onMount(() => {
        if (window.innerWidth < 768) {
            slideWidth = 100;
        } else {
            slideWidth = 33.333; // desktop: 3 ảnh
        }

        interval = setInterval(nextSlide, 2500);

        return () => clearInterval(interval);
    });
</script>

<section data-aos="fade-up" class="py-10 px-4 md:px-0">
    <div class="container justify-self-center">
        <img
            src="/assets/tamnhinthuonghieu.png"
            alt="Về Ban Đối Ngoại"
            class="w-100 mb-6"
        />
    </div>
    <div
        class="relative mb-[50px] w-full mx-auto overflow-hidden custom-path px-10 lg:px-0"
    >
        <!-- Slides -->
        <div
            class="flex transition-transform duration-700 ease-in-out"
            class:!transition-none={!isTransitioning}
            style="transform: translateX(-{current * slideWidth}%);"
        >
            {#each slides as img, i}
                <div
                    class="flex-shrink-0 slide w-full  md:w-1/3 px-2 md:px-4 {i ===
                    current + 1
                        ? 'active-slide'
                        : ''}"
                >
                    <img
                        src={img}
                        alt="slide"
                        class="w-full object-contain rounded-xl shadow-lg"
                    />
                </div>
            {/each}
        </div>

        <!-- Nút điều khiển -->
        <button
            on:click={prevSlide}
            class="absolute blur-xs bg-gradient-to-b rounded-xl from-[#D3EAFF]/30 via-[#17B7D0] via-[#0C0B80] to-[#1F1C1C] top-1/2 text-[50px] left-0 lg:left-4 -translate-y-1/2 bg-black/50 text-white p-2  hover:bg-black/70 transition"
        >
            ‹
        </button>
        <button
            on:click={nextSlide}
            class="absolute blur-xs bg-gradient-to-b rounded-xl from-[#D3EAFF]/30 via-[#17B7D0] via-[#0C0B80] to-[#1F1C1C] top-1/2 text-[50px] right-0 lg:right-4 -translate-y-1/2 bg-black/50 text-white p-2  hover:bg-black/70 transition"
        >
            ›
        </button>
    </div>
</section>

<style>
    @media (min-width: 1024px) {
        .slide {
            transform: scale(0.9);
            transition: all 0.5s ease-in-out;
            opacity: 0.5;
        }
        .active-slide {
            transform: scale(1);
            z-index: 10;
            opacity: 1;
        }
    }

    @media (max-width: 768px) {
        .active-slide {
            transform: scale(1);
            z-index: 10;
            opacity: 1;
        }
        .slide {
            transition: all 0.5s ease-in-out;
            opacity: 1;
        }
    }
</style>
