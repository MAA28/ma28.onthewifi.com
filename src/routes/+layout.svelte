<script lang="ts">
  import Header from "$lib/Components/Header.svelte";
  import Navigation from "$lib/Components/Navigation.svelte";
  import SkipToContent from "$lib/Components/Skip-To-Content.svelte";
  import "../app.postcss";
</script>

<SkipToContent />
<Navigation />
<div class="ml-[65px]">
  <Header />
  <slot />
</div>
