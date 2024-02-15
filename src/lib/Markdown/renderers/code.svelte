<!-- TODO: Add syntax highlighting and copying-->
<script lang="ts">
  export let lang: string;
  export let text: string;
</script>

<div
  class="mr-auto ml-auto max-w-full rounded-standard bg-secondary text m-10px w-fit min-w-[50%]"
>
  <div
    class="flex overflow-hidden m-0 font-semibold bg-primary p-8px rounded-t-standard text-background"
  >
    <p>{lang}</p>
    <button class="ml-auto"><img src="icons/copy.svg" alt="copy" /></button>
  </div>
  <pre class="overflow-scroll p-16px"><code>{text}</code></pre>
</div>

<style>
  img {
    filter: invert();
  }
  .light * img {
    filter: none !important;
  }
</style>
