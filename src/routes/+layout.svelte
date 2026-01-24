<script lang="ts">
  import { onMount } from "svelte";
  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";
  import { setI18n } from "$lib/i18n.svelte";
  import { setTheme } from "$lib/theme.svelte";

  let { children } = $props();
  setI18n();
  const theme = setTheme();

  onMount(() => {
    theme.apply();
  });
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}
