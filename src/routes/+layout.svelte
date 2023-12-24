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
  });
</script>

<SkipToContent />
<Navigation
  titles={[
    "HIoasdiuasdo",
    "asdhjkasdkjah",
    "asdsao",
    "HIoasdiuasdo",
    "asdhjkasdkjah",
    "ljasdfhsugsdo",
    "HIoasdiuasdo",
    "asdhjkasdkjah",
    "ljasdfhsugsdo",
    "HIoasdiuasdo",
    "asdhjkasdkjah",
    "ljasdfhsugsdo",
    "HIoasdiuasdo",
    "asdhjkasdkjah",
    "ljasdfhsugsdo",
    "HIoasdiuasdo",
    "asdhjkasdkjah",
    "ljasdfhsugsdo",
    "HIoasdiuasdo",
    "asdhjkasdkjah",
    "ljasdfhsugsdo",
  ]}
/>
<div class="ml-[65px]">
  <Header />
  <slot />
  <button
    on:click={() =>
      document.querySelector("#titles :nth-child(12)")?.scrollIntoView()}
    >asd</button
  >
</div>
