<script lang="ts">
  import Header from "$lib/Components/Header.svelte";
  import Navigation from "$lib/Components/Navigation.svelte";
  import SkipToContent from "$lib/Components/Skip-To-Content.svelte";
  import { onMount } from "svelte";
  import "../app.postcss";
  import { theme } from "$lib/stores/theme";

  onMount(() => {
    if ($theme == "system")
      $theme = window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light mode"
        : "dark mode";

    theme.subscribe((value) => {
      let root = document.querySelector(":root");
      if (root) {
        switch (value) {
          case "light mode":
            root.classList.add("light");
            break;
          case "dark mode":
            root.classList.remove("light");
            break;
          case "system":
            break;
        }
      }
    });
  });
</script>

<SkipToContent />
<Navigation />
<Header />

<div class="ml-[105px] mr-[39px] mt-[60px]">
  <slot />
</div>
