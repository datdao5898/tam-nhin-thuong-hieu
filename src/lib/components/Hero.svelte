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
  class="relative flex-col bg-cover bg-center h-screen flex items-center text-white text-center py-[100px] bg-gradient-to-b from-[#0B022D] to-[#05021A]"
>
  <img src="/assets/logos.png" alt="Hero Logo" class="w-60 mb-6" />
  <div class="flex flex-col md:flex-row container mx-auto">
    <div class="flex md:w-2/5 flex-col items-center md:items-start"></div>

    <div class="flex md:w-3/5 flex-col items-center">
      <img
        src="/assets/tamnhinthuonghieu.webp"
        alt="Tầm Nhìn Thương Hiệu"
        class=""
      />
      <!-- countdown -->
      <div class="flex gap-4 mb-6 text-xl font-bold">
        {#each timeUnits as unit}
          <div>
            <div
              class="bg-white/10 text-6xl bg-gradient-to-b from-[#1431B3] via-[#7D94D9] to-[#E6F7FF] w-[100px] h-[100px] rounded-xl flex items-center justify-center"
            >
              <span class="text-white ">
                {formatTimeUnit(countdown[unit.key])}
              </span>
            </div>
            <span class="uppercase text-xs">{unit.label}</span>
          </div>
        {/each}
      </div>

      <!-- nút -->
      <button
        class="text-[#E00000] uppercase text-2xl font-bold bg-gradient-to-b from-[#EAFF4B] via-[#F9FFB3] to-[#EDF1FF] drop-shadow-[0_4px_6px_#A5BEFE] p-4 rounded-full transition-all duration-300 hover:animate-pulse_bounce"
      >
        Đăng ký ngay
      </button>
    </div>
  </div>
</section>
