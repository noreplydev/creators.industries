<script>
  import { onMount } from "svelte";
  import Navbar from "../components/Navbar.svelte";
  import { getI18n } from "$lib/i18n.svelte";
  import { getTheme } from "$lib/theme.svelte";

  import v0 from "$lib/assets/creator/Vector.png";
  import v1 from "$lib/assets/creator/Vector-1.png";
  import v2 from "$lib/assets/creator/Vector-2.png";
  import v3 from "$lib/assets/creator/Vector-3.png";
  import v4 from "$lib/assets/creator/Vector-4.png";
  import v5 from "$lib/assets/creator/Vector-5.png";
  import v6 from "$lib/assets/creator/Vector-6.png";
  import v7 from "$lib/assets/creator/Vector-7.png";

  const letterItems = [
    { src: v7, width: "auto", mx: "-2px" }, // C
    { src: v6, width: "auto", mx: "-2px" }, // R
    { src: v5, width: "auto", mx: "-2px" }, // E
    { src: v4, width: "auto", mx: "-10px" }, // A
    { src: v3, width: "auto", mx: "-20px" }, // T
    { src: v2, width: "auto", mx: "-2px" }, // R
    { src: v1, width: "auto", mx: "-2px" }, // O
    { src: v0, width: "auto", mx: "-10px" }, // S
  ];
  let activeLetters = $state(new Array(letterItems.length).fill(false));

  const i18n = getI18n();
  // const theme = getTheme();

  let showContent = $state(false);
  let showOutline = $state(false);
  let highlightActive = $state(false);

  onMount(() => {
    setTimeout(() => {
      showContent = true;
    }, 1700);

    setTimeout(() => {
      showOutline = true;
      // Military sequence activation
      const sequence = [3, 0, 5, 1, 7, 2, 4, 6]; // Random-ish order
      sequence.forEach((index, i) => {
        setTimeout(
          () => {
            activeLetters[index] = true;
          },
          500 + i * 100,
        );
      });
    }, 300);

    setTimeout(() => {
      highlightActive = true;
    }, 2300);
  });
</script>

<main
  class="min-h-screen w-full overflow-x-hidden bg-black text-white transition-colors duration-500 dark"
>
  <Navbar />
  <!-- Hero Section (Strictly Isolated Dark Mode) -->
  <section
    class="min-h-screen w-full relative overflow-hidden flex flex-col dark bg-black"
  >
    <!-- Background Video -->
    <div
      class="absolute inset-0 z-0 overflow-hidden pointer-events-none transition-opacity duration-[2000ms] opacity-40"
    >
      <video
        autoplay
        loop
        muted
        playsinline
        class="w-screen h-screen object-cover"
      >
        <source src="/barcelona.mp4" type="video/mp4" />
      </video>
    </div>

    <!-- Main Content -->
    <div
      class="absolute inset-0 flex flex-col justify-center items-center z-20 px-6 md:px-10 pointer-events-none"
    >
      <!-- Title Layer (Background) -->
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
         w-[70vw] md:w-[40vw] h-12 md:h-24 flex justify-center items-center transition-all duration-1000 -z-10
         invert
         {showOutline ? 'opacity-100 blur-0' : 'opacity-0 blur-xl'}"
      >
        {#each letterItems as item, i}
          <img
            src={item.src}
            alt="Letter {i}"
            style="margin-left: {item.mx}; margin-right: {item.mx}; width: {item.width}"
            class="h-full object-contain transition-all duration-300
              {activeLetters[i] ? 'letter-active' : 'opacity-0'}"
          />
        {/each}
      </div>

      <!-- Subtitle Layer (Underneath Title vertically) -->
      <!-- Mobile Subtitle -->

      <!-- Desktop Subtitle -->
      <p
        class="md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[calc(3rem+0.75rem)]
        dm-mono font-light uppercase tracking-[0.3em]
        {showContent ? 'letter-active' : 'opacity-0'} 
        text-base max-w-3xl text-center leading-loose pointer-events-auto text-white"
      >
        [{i18n.t("hero.subtitle")}]
      </p>
    </div>
  </section>

  <!-- Product/Tactical Video Section -->
  <section
    class="w-screen py-20 md:py-32 px-6 md:px-24 bg-black flex flex-col items-center overflow-hidden"
  >
    <div class="w-full max-w-6xl">
      <div class="flex flex-col items-center gap-16">
        <!-- Mission Content (Above Video) -->
        <div class="flex flex-col items-center text-center gap-6 max-w-4xl">
          <div class="flex flex-col gap-3 items-center">
            <h2 class="dm-mono text-sm font-light text-white/40 uppercase">
              [{i18n.t("section.services.title")}]
            </h2>
          </div>

          <p class="dm-mono font-light uppercase text-sm text-white/80">
            {i18n.t("section.mission.text")}
          </p>
        </div>

        <!-- Video Container -->
        <div class="relative w-full max-w-4xl group">
          <!-- Tactical Frame corners -->
          <div
            class="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-white/20"
          ></div>
          <div
            class="absolute -top-4 -right-4 w-8 h-8 border-t border-r border-white/20"
          ></div>
          <div
            class="absolute -bottom-4 -left-4 w-8 h-8 border-b border-l border-white/20"
          ></div>
          <div
            class="absolute -bottom-4 -right-4 w-8 h-8 border-b border-r border-white/20"
          ></div>

          <div
            class="relative aspect-video overflow-hidden bg-white/5 border-white/10 group-hover:border-white/30 transition-colors duration-500"
          >
            <video
              autoplay
              loop
              muted
              playsinline
              class="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            >
              <source src="/demo.mp4" type="video/mp4" />
            </video>

            <!-- Scanline Overlay -->
            <div
              class="absolute inset-0 pointer-events-none bg-scanline opacity-20"
            ></div>
          </div>
        </div>
        <p
          class="dm-mono text-xs md:text-xs text-center text-white/30 max-w-2xl leading-relaxed uppercase tracking-widest"
        >
          Real-time situational awareness powered by AI models. Our systems
          provide persistent monitoring and autonomous detection in dynamic
          environments.
        </p>
      </div>
    </div>
  </section>
  <footer
    class="pt-32 pb-16 md:pt-48 md:pb-24 px-6 md:px-24 bg-brand-fg text-brand-bg flex flex-col items-center justify-center text-center overflow-hidden transition-colors duration-500"
  >
    <p
      class="syne text-7xl md:text-[17vw] font-bold -tracking-[3vw] opacity-10 hover:italic transition-all duration-500 leading-none flex flex-col items-center"
    >
      CREATORS
    </p>

    <div
      class="mt-20 md:mt-32 w-full flex flex-col md:flex-row justify-start items-center opacity-60 dm-mono text-[10px] md:text-sm gap-6 md:gap-8"
    >
      <div class="flex flex-1 gap-6 md:gap-8">
        <a
          href="https://www.linkedin.com/company/creat0rs"
          target="_blank"
          class="hover:opacity-100">LINKEDIN</a
        >
      </div>
      <div class="flex flex-1 justify-center">
        <p class="order-3 md:order-2">© 2026 CREATORS</p>
      </div>
      <div class="flex flex-1 justify-end">
        <p class="order-2 md:order-3">
          {i18n.t("section.footer.email").toUpperCase()}
        </p>
      </div>
    </div>
  </footer>
</main>

<style>
  :global(body) {
    margin: 0;
  }

  @keyframes flicker {
    0% {
      opacity: 0;
    }
    5% {
      opacity: 1;
    }
    10% {
      opacity: 0;
    }
    15% {
      opacity: 1;
    }
    20% {
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    30% {
      opacity: 0.4;
    }
    35% {
      opacity: 1;
    }
    40% {
      opacity: 0;
    }
    45% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  .letter-active {
    animation: flicker 0.6s steps(1) forwards;
  }
</style>
