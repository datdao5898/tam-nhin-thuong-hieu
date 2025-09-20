<script>
  let isOpen = false;

  const links = [
    { name: "VỀ CHÚNG TÔI", href: "#ve-chung-toi" },
    { name: "GIỚI THIỆU", href: "#gioi-thieu" },
    { name: "THỂ LỆ", href: "#the-le" },
    { name: "GIẢI THƯỞNG", href: "#giai-thuong" },
    { name: "ĐỐI TÁC ĐỒNG HÀNH", href: "#doi-tac-dong-hanh" },
    { name: "LIÊN HỆ", href: "#lien-he" },
  ];

  import { onMount } from "svelte";

  let isFixed = false;

  onMount(() => {
    // Logic này chỉ chạy trong trình duyệt
    const handleScroll = () => {
      if (window.scrollY > 300) {
        isFixed = true;
      } else {
        isFixed = false;
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Trả về một hàm cleanup để gỡ bỏ event listener khi component bị hủy
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
</script>

<nav
  class:fixed={isFixed}
  
  class="top-0  transition-all duration-500 left-0 w-full z-50 bg-[#05021A]/80 backdrop-blur-md border-b border-white/10 py-4"
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <!-- Logo -->
      <a href="/" class="text-xl font-bold text-white">
        <img src="/assets/logo.png" alt="Logo" class="w-16" />
      </a>

      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-4 lg:space-x-10">
        {#each links as link}
          <a
            href={link.href}
            class="text-white hover:text-purple-400 text-xs lg:text-base transition uppercase font-bold"
          >
            {link.name}
          </a>
        {/each}
      </div>

      <!-- Mobile button -->
      <div class="md:hidden">
        <button
          on:click={() => (isOpen = !isOpen)}
          class="text-white focus:outline-none"
        >
          {#if isOpen}
            ✖
          {:else}
            ☰
          {/if}
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Menu -->
  {#if isOpen}
    <div class="md:hidden bg-[#05021A] border-t border-white/10">
      <div class="px-2 pt-2 pb-3 space-y-1">
        {#each links as link}
          <a
            href={link.href}
            class="block px-3 py-2 rounded-md text-white hover:bg-white/10"
            on:click={() => (isOpen = false)}
          >
            {link.name}
          </a>
        {/each}
      </div>
    </div>
  {/if}
</nav>
