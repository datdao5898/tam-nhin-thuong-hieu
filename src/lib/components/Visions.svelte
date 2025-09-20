<script>
    import { onMount } from "svelte";

    // Mảng chứa các đường dẫn ảnh
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

    // Nhân đôi mảng để tạo hiệu ứng vòng lặp liền mạch
    let slides = [...images, ...images];
    let current = 0;
    let slideWidth = 100;

    // Biến để kiểm soát việc bật/tắt transition
    let isTransitioning = true;

    // Logic tự động trượt
    onMount(() => {
        if (window.innerWidth < 768) {
            slideWidth = 50;
        } else {
            slideWidth = 33.333; // desktop: 3 ảnh
        }
        const interval = setInterval(() => {
            current += 1;
            // Kiểm tra xem đã cuộn qua toàn bộ mảng ảnh gốc chưa
            // Nếu đã cuộn đến ảnh đầu tiên của phần lặp lại
            if (current >= images.length) {
                // Tắt transition
                isTransitioning = false;

                // Reset về vị trí 0 ngay lập tức
                // Sử dụng requestAnimationFrame để đảm bảo Svelte đã cập nhật DOM
                // trước khi bật lại transition
                requestAnimationFrame(() => {
                    current = 0;
                    isTransitioning = true;
                });
            }
        }, 2500);
        return () => clearInterval(interval);
    });
</script>

<svg width="0" height="0" style="position: absolute; overflow: hidden;">
    <defs>
        <clipPath id="curved-sides-rectangle" clipPathUnits="objectBoundingBox">
            <path d="M0,0 Q0.5,0.2 1,0 L1,1 Q0.5,0.8 0,1 Z" />
        </clipPath>
    </defs>
</svg>
<section data-aos="fade-up" class="py-10 px-4 md:px-0">
    <div class="container justify-self-center">
        <img
            src="/assets/tamnhinthuonghieu.png"
            alt="Về Ban Đối Ngoại"
            class="w-100 mb-6"
        />
    </div>
    <div
        class="relative  mb-[50px] w-full mx-auto overflow-hidden custom-path"
        style="" 
    >
        <div
            class="flex {isTransitioning
                ? 'transition-transform duration-700 ease-in-out'
                : ''}"
            style="transform: translateX(-{current * slideWidth}%);"
        >
            {#each slides as img, i}
                <div
                    class="flex-shrink-0 slide w-1/2 md:w-1/3 px-2 md:px-4 {i ===
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
    </div>
</section>

<style>
    .slide {
        transition: all 0.5s ease-in-out;
        opacity: 0.5;
    }
    .active-slide {
        transform: scale(1); 
        z-index: 10;
        opacity: 1;
    }
    @media (max-width: 768px) {
        .active-slide {
            transform: scale(1); /* Phóng to slide chính */
            z-index: 10;
            opacity: 1;
        }
        .slide {
        transition: all 0.5s ease-in-out;
        opacity: 1;
    }
       
    }
</style>
