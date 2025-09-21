<!-- src/lib/components/Hero.svelte -->
<script>
  import { onMount } from "svelte";

  let countdown = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  const timeUnits = [
    { label: "ngày", key: "days" },
    { label: "giờ", key: "hours" },
    { label: "phút", key: "minutes" },
    { label: "giây", key: "seconds" },
  ];

  function formatTimeUnit(value) {
    return value < 10 ? `0${value}` : `${value}`;
  }

  function updateCountdown() {
    const target = new Date("2025-10-01T23:59:59").getTime();
    const now = new Date().getTime();
    const diff = target - now;

    countdown.days = Math.floor(diff / (1000 * 60 * 60 * 24));
    countdown.hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    countdown.minutes = Math.floor((diff / (1000 * 60)) % 60);
    countdown.seconds = Math.floor((diff / 1000) % 60);
  }

  onMount(() => {
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  });


</script>

<section
  style="background-image:url('/assets/bg-hero.webp');"
  class=" flex-col hero py-20 pb-5 pt-[80px] lg:pt-[100px] lg:h-screen 
 bg-cover bg-center flex items-center text-white text-center bg-gradient-to-b from-[#0B022D] to-[#05021A]"
>
  <img src="/assets/logos.png" alt="Hero Logo" class=" w-40 lg:w-60 mb-20 lg:mb-6"  />
  <div class="flex flex-col md:flex-row container mx-auto pt-[250px] lg:pt-[0]">
    <div class="flex md:w-2/5 flex-col items-center md:items-start"></div>

    <div class="flex md:w-3/5 flex-col  items-center">
      <img
        src="/assets/tamnhinthuonghieu.webp"
        alt="Tầm Nhìn Thương Hiệu"
        class="mt-[-50px] mb-[-10px] w-[300px] lg:w-full" 
      />
      <!-- countdown -->
      <div class="flex gap-4 mb-6 text-xl  font-bold">
        {#each timeUnits as unit}
          <div>
            <div
              class="bg-white/10 mb-1 lg:text-6xl bg-gradient-to-b from-[#1431B3] via-[#7D94D9] to-[#E6F7FF] p-2 lg:p-0 lg:w-[100px] lg:h-[100px] rounded-xl flex items-center justify-center"
            >
              <span class="text-white ">
                {formatTimeUnit(countdown[unit.key])}
              </span>
            </div>
            <span class="uppercase text-xs lg:text-s">{unit.label}</span>
          </div>
        {/each}
      </div>

      <!-- nút -->
      <button
  class="text-[#6C66C0] uppercase lg:text-2xl font-bold bg-gradient-to-b from-[#6C66C0] via-[#B5B2E0] via-[#FFFFFF] via-[#918CD0] to-[#C4C2E6] drop-shadow-[0_4px_6px_#A5BEFE] p-2 lg:p-4 rounded-full transition-all duration-300 hover:animate-pulse_bounce"
><a 
  href="https://docs.google.com/forms/d/1im461WOGk27pyqDfjSmgYqJ3YT_1q58NFzFz3UCev74/viewform?edit_requested=true" target="_blank" rel="noopener noreferrer"
>
  Đăng ký ngay
</button>
    </div>
  </div>
</section>

<style>
 @media(max-width: 768px){
  .hero{
    background-image: url('/assets/herobg.png') !important;
  }
 }
</style>
