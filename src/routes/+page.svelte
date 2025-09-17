<!-- src/routes/+page.svelte -->
<script>
  import Hero from "$lib/components/Hero.svelte";
  import About from "$lib/components/About.svelte";
  import Vision from "$lib/components/Vision.svelte";
  import Partners from "$lib/components/DoiTac.svelte";
  import ContestTopic from "$lib/components/ContestTopic.svelte";
  import Prizes from "$lib/components/GiaiThuong.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import Visions from "$lib/components/Visions.svelte";
  import Stats from "$lib/components/Stats.svelte";
  import TheLe from "$lib/components/TheLe.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import ContestRounds from "$lib/components/Cacvongthi.svelte";
  import QuyenLoi from "$lib/components/QuyenLoi.svelte";
  import DoiTac from "$lib/components/DoiTac.svelte";

  // sau này import thêm các section khác: About, Vision, Partners, ...
</script>

<Navbar />
<Hero />
<About />
<Vision />
<Visions />
<Stats />
<Partners />
<ContestTopic />
<ContestRounds />
<TheLe />
<Prizes />
<QuyenLoi />
<DoiTac />
<Footer />
