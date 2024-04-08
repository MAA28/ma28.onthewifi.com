<script lang="ts">
  import MarkdownBlog from "$lib/Components/MarkdownBlog.svelte";
  import type { PageData } from "../$types";
  export let data: PageData;
</script>

<MarkdownBlog source={data.aboutMe} />
