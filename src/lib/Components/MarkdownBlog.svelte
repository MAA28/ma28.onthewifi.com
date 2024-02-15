<script lang="ts">
  import SvelteMarkdown from "svelte-markdown";
  import renderers from "$lib/Markdown/renderer";
  import { titles } from "$lib/stores/titles";
  $titles = [];

  export let source: string;
</script>

<SvelteMarkdown {source} {renderers} />
