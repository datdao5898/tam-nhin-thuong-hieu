<script>
    // Dữ liệu giải thưởng
    let prizes = [
        {
            title: "QUÁN QUÂN",
            amount: "123.000.000 VNĐ",
            items: [
                "Hiện kim 10.000.000 VNĐ",
                "03 suất ưu tiên tuyển dụng từ Xanh SM",
                "03 suất Company Tour từ Xanh SM",
                "03 thẻ Xanh SM",
                "03 học bổng 100% từ Tomorrow Marketers",
                "03 học bổng 75% khóa học Road to Management Trainee + Review CV qua Fanpage + Mock Interview by AI",
                "03 học bổng 100% IZONE",
                "03 E-voucher 30% cho lộ trình 0-4 HSK",
                "03 học bổng ZIM Academy",
                "03 học bổng 70% khoá MC chuyên nghiệp từ ST Lighthouse",
                "03 set quà 4 món từ Yukazan",
                "03 tài khoản TopCV Education VIP",
            ],
        },
        {
            title: "Á QUÂN",
            amount: "96.000.000 VNĐ",
            items: [
                "Hiện kim 5.000.000 VNĐ",
                "03 suất Company Tour từ Xanh SM",
                "03 thẻ Xanh SM",
                "03 học bổng 80% từ Tomorrow Marketers",
                "03 học bổng 75% khóa học Road to Management Trainee + Review CV qua Fanpage + Mock Interview by AI",
                "03 học bổng 60% IZONE",
                "03 E-voucher 25% cho lộ trình 0-4 HSK",
                "03 học bổng ZIM Academy",
                "03 học bổng 70% khoá MC chuyên nghiệp từ ST Lighthouse",
                "03 set quà 4 món từ Yukazan",
                "03 tài khoản TopCV Education VIP",
            ],
        },
        {
            title: "QUÝ QUÂN",
            amount: "72.000.000 VNĐ",
            items: [
                "Hiện kim 3.000.000 VNĐ",
                "03 suất Company Tour từ Xanh SM",
                "03 thẻ Xanh SM",
                "03 học bổng 50% từ Tomorrow Marketers",
                "03 học bổng 65% khóa học Road to Management Trainee + Review CV qua Fanpage + Mock Interview by AI",
                "03 học bổng 40% IZONE",
                "03 E-voucher 20% cho lộ trình 0-4 HSK",
                "03 học bổng ZIM Academy",
                "03 học bổng 70% khoá MC chuyên nghiệp từ ST Lighthouse",
                "03 set quà 4 món từ Yukazan",
                "03 tài khoản TopCV Education VIP",
            ],
        },
        {
            title: "ĐỘI THI ĐƯỢC YÊU THÍCH NHẤT",
            amount: "15.000.000 VNĐ",
            items: [
                "Hiện kim 1.000.000 VNĐ",
                "03 học bổng 40% từ Tomorrow Marketers",
                "06 suất quà từ Yukazan",
                "03 tài khoản TopCV Education VIP",
            ],
        },
        {
            title: "TOP 25",
            amount: "16.800.000 VNĐ",
            items: [
                "03 học bổng 50% khóa học Road to Management Trainee + Review CV qua Fanpage + Mock Interview by AI",
                "03 tài khoản TopCV Education VIP",
            ],
        },
        {
            title: "TOP 60",
            amount: "11.760.000 VNĐ",
            items: [
                "03 học bổng 35% khóa học Road to Management Trainee + Review CV qua Fanpage + Mock Interview by AI",
                "03 tài khoản TopCV Education VIP",
            ],
        },
      
    ];
</script>

<section 
id="giai-thuong"
    class="relative px-4 lg:py-20 pt-[100px] text-white mx-auto justify-items-center
"
>
    <img data-aos="fade"
        src="/assets/cocau.png"
        alt=""
        class="w-[800px] mb-12 text-center mx-auto"
    />

    <!-- Loop qua từng giải thưởng -->
    {#each prizes as prize}
        <div
        data-aos="fade"
            class="container mx-auto flex flex-col justify-center text-center mb-20"
        >
            <h2
                class="text-3xl lg:text-5xl font-bold bg-gradient-to-b from-[#FFFFFF] to-[#73B1E1] lg:leading-[60px] bg-clip-text text-transparent"
            >
                {prize.title}
            </h2>
            <h2
                class="text-3xl lg:text-5xl lg:mb-10 font-bold leading-[60px] bg-clip-text text-transparent {
        prize.title === 'QUÁN QUÂN' || prize.title === 'Á QUÂN' || prize.title === 'QUÝ QUÂN'
            ? 'bg-gradient-to-b from-[#FFFFFF] to-[#FBCD48]'
            : 'bg-gradient-to-b from-[#FFFFFF] to-[#7DD8CE]'
    }"
            >
                {prize.amount}
            </h2>
            <div
                class="text-justify place-self-center lg:w-[1000px] blur-xs bg-gradient-to-b from-[#D3EAFF]/30 via-[#17B7D0]/30 via-[#0C0B80]/30 to-[#1F1C1C]/30 p-4 md:p-8 lg:rounded-[48px] rounded-[15px]"
            >
                <ul class="text-[20px]">
                    {#each prize.items as item}
                        <li class="list-disc ml-6">{item}</li>
                    {/each}
                </ul>
            </div>
        </div>
    {/each}

    
</section>
