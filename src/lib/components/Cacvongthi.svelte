<script>
    import { quintOut } from "svelte/easing";
    import { fade } from "svelte/transition";

    let activeTab = 0; // Index của tab đang hoạt động
    const topPositions = [0, 100, 150, 250, 300];
    let tabs = [
        {
            title: "VÒNG KHỞI ĐỘNG",
            date: "(08/09 - 10/09)",
            content: `
            Các đội thi có 48 giờ giải Minicase và nộp lại tính từ thời điểm công bố đề.

TOP 3 đội thi hoàn thành xuất sắc nhất sẽ được đặc cách tiến thẳng vào vòng 2 và nhận được vô số quyền lợi hấp dẫn đến từ các nhà tài trợ của cuộc thi.

Các đội không tham gia Vòng Khởi động vẫn có thể bắt đầu từ Vòng 1 để tiến tiếp vào Vòng 2.
      `,
            icon: "/assets/tab-active.png", // Icon placeholder, bạn có thể thay bằng SVG/img
        },
        {
            title: "VÒNG 1: ONLINE TEST",
            date: "(03/10/2025)",
            content: `
        Các đội thi làm bài test trắc nghiệm với các kiến thức về Marketing - Truyền thông Thương hiệu.

TOP 57 đội thi xuất sắc nhất sẽ tiến vào vòng 2.
      `,
            icon: "/assets/tab-active.png",
        },
        {
            title: "VÒNG 2: NGHIÊN CỨU TỔNG QUAN",
            date: "(06/10 - 12/10)",
            content: `
        Từ đề bài đặt ra, TOP 60 đội thi tiến hành đánh giá tổng quan thị trường, tình hình thương hiệu, chân dung khách hàng mục tiêu và mục tiêu tổng quát về chiến dịch truyền thông cho thương hiệu của mình.

TOP 25 sẽ tiếp tục bước vào vòng 3.
      `,
            icon: "/assets/tab-active.png",
        },
        {
            title: "VÒNG 3: IMC PLAN",
            date: "(20/10 - 26/10)",
            content: `
        TOP 25 xuất sắc nhất sẽ có cơ hội bước vào vòng 3 và tiếp tục hoàn thiện đề án kế hoạch truyền thông của doanh nghiệp.

TOP 4 đội thi xuất sắc nhất sẽ bước tiếp vào vòng chung kết.
      `,
            icon: "/assets/tab-active.png",
        },
        {
            title: "VÒNG CHUNG KẾT",
            date: "(12/11/2025)",
            content: `
        TOP 4 đội thi bước vào chung kết, trình bày đề án hoàn thiện và trả lời các câu hỏi từ Ban Giám Khảo.

TOP 2 đội thi xuất sắc nhất phần thi 1 tiếp tục tham gia giải minicase và đặt câu hỏi cho đội còn lại.
      `,
            icon: "/assets/tab-active.png",
        },
    ];
</script>

<section
    
    class="relative py-10 text-white container mx-auto justify-items-center"
>
    <img data-aos="fade-up"
        src="/assets/cacvongthi.png"
        alt="Các Vòng Thi"
        class="w-[800px] mb-12"
    />
    <div data-aos="fade-up"
        class="flex flex-col lg:flex-row p-2 md:p-8 text-white font-san w-full"
    >
        <div
            class="w-full flex lg:block lg:w-[45%] pr-0 lg:pr-8 mb-8 lg:mb-0 relative overflow-auto"
        >
            <img
                src="/assets/tab-active.png"
                alt="icon"
                class="hidden md:block absolute left-4 h-[20px] lg:h-[100px] transition-transform duration-300 ease-in-out transform"
                style="top: calc(0% - 20px  + ({activeTab *
                    80}px)); transition: all .5s;"
            />

            {#each tabs as tab, i}
                <button
                    class="flex items-center text-left py-3 lg:px-4 rounded-lg cursor-pointer transition-colors duration-700 w-full mb-2 border border-transparent relative"
                    class:border-[#4b4b84]={activeTab === i}
                    on:click={() => (activeTab = i)}
                >
                    <div
                        class="flex w-[max-content] px-2 md:px-0 md:w-[auto] flex-col ml-0 lg:ml-20
"
                    >
                        <span
                            class:text-yellow-600={activeTab === i}
                            class:text-white={activeTab !== i}
                            class="text-sm text-[10px] lg:text-white lg:text-[30px] font-bold uppercase leading-tight [text-shadow:_0_4px_8px_rgba(14_165_223_/_0.5)]"
                        >
                            {tab.title}
                        </span>
                        {#if tab.subtitle}
                            <span class="text-xs md:text-sm opacity-70">
                                {tab.subtitle}
                            </span>
                        {/if}
                    </div>
                </button>
            {/each}
        </div>

        <div
            class="tab-content-wrapper lg:pt[100px] p-6 rounded-xl shadow-lg w-full lg:w-[55%] blur-xs bg-gradient-to-b from-[#D3EAFF]/30 via-[#17B7D0]/30 via-[#0C0B80]/30 to-[#1F1C1C]/30 md:p-8 md:px-16 lg:rounded-[48px] rounded-[15px]"
        >
            {#each tabs as tab, i}
                {#if activeTab === i}
                    <div
                        in:fade={{ duration: 2000, easing: quintOut }}
                        class="text-base text-gray-200"
                    >
                        <h2
                            class="text-3xl lg:text-[40px] text-center font-bold bg-gradient-to-b from-[#FFFFFF] to-[#73B1E1] lg:leading-[50px] bg-clip-text text-transparent"
                        >
                            {tab.title}
                        </h2>
                        <h2
                            class="text-3xl lg:text-[40px] text-center font-bold mb-2 bg-gradient-to-b from-[#FFFFFF] to-[#73B1E1] leading-[50px] bg-clip-text text-transparent"
                        >
                            {tab.date}
                        </h2>
                        <p class="leading text-[20px] whitespace-pre-line">
                            {tab.content}
                        </p>
                    </div>
                {/if}
            {/each}
        </div>
    </div>
</section>
