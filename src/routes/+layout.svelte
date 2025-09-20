<!-- src/routes/+layout.svelte -->
<script>
  export let data;
  import "../app.css";
  import { onMount } from "svelte";
  import AOS from "aos";
  import "aos/dist/aos.css";

  onMount(() => {
    AOS.init({
      // Cấu hình
      offset: 120,
      duration: 1000,
    });
  });
</script>

<svelte:head>
  <title>Tầm Nhìn Thương Hiệu 2025</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<div class="min-h-screen bg-[#05021A] text-white font-sans overflow-hidden">
  <slot />
</div>
