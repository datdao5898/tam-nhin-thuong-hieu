<script>
    import { onMount } from "svelte";

    // Danh sách hình ảnh
    let images = [
        "/assets/bandoingoai.png",
        "/assets/about2.png",
        "/assets/about3.png",
        "/assets/about4.png",
    ];

    let current = 0; // ảnh hiện tại
    let interval;

    // Tự động chuyển ảnh mỗi 3 giây
    onMount(() => {
        interval = setInterval(() => {
            next();
        }, 3000);

        return () => clearInterval(interval);
    });

    function next() {
        current = (current + 1) % images.length;
    }

    function prev() {
        current = (current - 1 + images.length) % images.length;
    }
</script>

<section 
    id="ve-chung-toi"
    class="relative py-10 text-white mx-auto justify-items-center pt-[100px] 
">
    <img data-aos="fade-up" src="/assets/hsv.png" alt="Về Ban Đối Ngoại" class="w-[1100px] mb-12" />

    <div data-aos="fade-up"
        class="container px-5 lg:px-0 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
    >
        <!-- Cột trái: nội dung -->
        <div
            class="text-justify blur-xs bg-gradient-to-b from-[#D3EAFF]/30 via-[#17B7D0]/30 via-[#0C0B80]/30 to-[#1F1C1C]/30 p-8 lg:rounded-[48px] rounded-[15px]"
        >
            <p class=" text-[15px]">
                <span class="font-bold text-[#8DFDF1]">Ban Đối Ngoại</span> là
                đơn vị trực thuộc
                <span class="font-bold text-[#8DFDF1]"
                    >Hội sinh viên Đại học Kinh tế Quốc Dân</span
                >
                với vai trò tiêu biểu là phụ trách công tác Đối Ngoại cho các sự
                kiện của Hội Sinh viên - Đại học Kinh tế Quốc dân.
                <br />
                <br />
                Trải qua <span class="font-bold text-[#8DFDF1]">19 năm</span>
                hoạt động,
                <span class="font-bold text-[#8DFDF1]">Ban Đối Ngoại</span>
                đã không ngừng khẳng định vị thế của mình với chuyên môn chính gồm
                Mời tài trợ, Truyền thông báo chí, góp phần tạo nên thành công cho
                các chương trình bên trong và ngoài khuôn khổ Đại học.
                <br />
                <br />
                Với phong thái tự tin chuyên nghiệp,
                <span class="font-bold text-[#8DFDF1]">Ban Đối Ngoại</span>
                đã kết nối hàng trăm doanh nghiệp, báo đài với cộng đồng sinh viên,
                tham gia tổ chức
                <span class="font-bold text-[#8DFDF1]">200+ sự kiện</span> ...
                Fanpage của Ban Đối Ngoại đã thu hút được
                <span class="font-bold text-[#8DFDF1]"
                    >36.000+ lượt theo dõi</span
                > từ các bạn sinh viên và các doanh nghiệp, tổ chức, đối tác đồng
                hành.
            </p>
        </div>

        <!-- Cột phải: hình ảnh -->
        <!-- Khối hình ảnh -->
        <div class="flex w-full  md:h-full flex-col items-center ">
            <div class="relative  h-[320px] object-contain w-full md:h-full">
                {#each images as img, i}
                    <img
                        src={img}
                        alt="Slide"
                        class="absolute object-contain inset-0 place-self-center h-full transition-opacity duration-700"
                        class:opacity-100={i === current}
                        class:opacity-0={i !== current}
                       
                    />
                {/each}
            </div>

            <!-- Nút điều hướng -->
            <div class="flex gap-2 mt-4">
                {#each images as _, i}
                    <button
                        on:click={() => (current = i)}
                        class="w-3 h-3 rounded-full transition-colors"
                        class:bg-gray-800={i === current}
                        class:bg-gray-400={i !== current}
                    ></button>
                {/each}
            </div>
        </div>
    </div>
    <div class="mt-10">
        <a href="https://www.facebook.com/bandoingoai.neu" target="_blank" rel="noopener noreferrer" class="flex justify-center">
        <button
            class="text-[#6C66C0] uppercase lg:text-2xl font-bold bg-gradient-to-b from-[#6C66C0] via-[#B5B2E0] via-[#FFFFFF] via-[#918CD0] to-[#C4C2E6] drop-shadow-[0_4px_6px_#A5BEFE] p-4 rounded-full transition-all duration-300 hover:animate-pulse_bounce"
        >
            Tìm hiểu thêm
        </button>
    </div>
</section>
