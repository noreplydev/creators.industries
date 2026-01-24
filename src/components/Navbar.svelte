<script>
  import { getI18n } from "$lib/i18n.svelte";
  import { getTheme } from "$lib/theme.svelte";
  const i18n = getI18n();
  const theme = getTheme();
</script>

<nav class="fixed top-0 right-0 z-50 p-6 md:p-14">
  <div
    class="flex flex-row gap-4 md:gap-6 items-center bg-brand-bg/70 backdrop-blur-xl px-6 py-2 border border-brand-fg/5 transition-colors duration-500"
  >
    <button
      onclick={() => theme.toggle()}
      class="dm-mono text-lg md:text-xs font-light uppercase tracking-widest cursor-pointer transition-all opacity-30 hover:opacity-100"
    >
      {theme.current === "dark" ? "light" : "dark"}
    </button>
    <div class="w-[1px] h-3 bg-brand-fg/10 self-center"></div>
    <button
      onclick={() => i18n.setLang("en")}
      class="dm-mono text-lg md:text-xs font-light uppercase tracking-widest cursor-pointer transition-all {i18n.currentLang ===
      'en'
        ? 'opacity-100'
        : 'opacity-30 hover:opacity-60'}"
    >
      EN
    </button>
    <div class="w-[1px] h-3 bg-brand-fg/10 self-center"></div>
    <button
      onclick={() => i18n.setLang("es")}
      class="dm-mono text-lg md:text-xs font-light uppercase tracking-widest cursor-pointer transition-all {i18n.currentLang ===
      'es'
        ? 'opacity-100'
        : 'opacity-30 hover:opacity-60'}"
    >
      ES
    </button>
  </div>
</nav>
