<script>
  import { onMount } from "svelte";

  const stats = [
    { value: 800, label: "Tổng giá trị giải thưởng", suffix: " Triệu" },
    { value: 39, label: "Doanh nghiệp đối tác", suffix: "+" },
    { value: 40, label: "Bài báo", suffix: "+" },
    { value: 60, label: "Đại học trên cả nước", suffix: "+" },
    { value: 1200, label: "Thí sinh đăng kí", suffix: "+" },
    { value: 1000000, label: "Lượt tiếp cận", suffix: "+" },
  ];

  let counters = stats.map(() => 0);
  let started = false;
  let sectionEl;

  function startCounters() {
    if (started) return; // chỉ chạy 1 lần
    started = true;

    stats.forEach((s, i) => {
      let step = Math.ceil(s.value / 100); // chia thành 100 bước
      let interval = setInterval(() => {
        if (counters[i] < s.value) {
          counters[i] = Math.min(counters[i] + step, s.value);
        } else {
          clearInterval(interval);
        }
      }, 40); // tốc độ: 20ms
    });
  }

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounters();
          }
        });
      },
      { threshold: 0.3 } // 30% section vào viewport thì chạy
    );

    if (sectionEl) observer.observe(sectionEl);

    return () => observer.disconnect();
  });

  function formatNumber(num) {
    return num.toLocaleString("vi-VN");
  }
</script>

<section bind:this={sectionEl}  class="relative py-10 text-white mx-auto">
  <div data-aos="fade-up" class="container mx-auto px-6 justify-items-center">
    <!-- Tiêu đề -->
    <img data-aos="fade-up" src="/assets/dauan.png" alt="" class="lg:w-[1000px] mb-12 text-center" />

    <div data-aos="fade-up" class="grid w-full grid-cols-2 md:grid-cols-3 gap-y-20 text-center">
      {#each stats as item, i}
        <div class="text-center flex flex-col items-center">
          <img src="/assets/mark.png" alt="" class="w-[70px] lg:w-[130px] mb-3 float-animation text-center" />
          <h3 class="text-2xl lg:text-7xl font-extrabold text-[#8DFDF1]">
            {formatNumber(counters[i])}{item.suffix}
          </h3>
          <p class="text-base mt-2 lg:w-[250px] lg:text-2xl font-bold">{item.label}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
