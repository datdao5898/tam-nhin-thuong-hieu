<!-- src/routes/+layout.svelte -->
<script>
  export let data;
  import "../app.css";
</script>

<svelte:head>
  <title>Tầm Nhìn Thương Hiệu 2025</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<div class="min-h-screen bg-[#05021A] text-white font-sans">
  <slot />
</div>
