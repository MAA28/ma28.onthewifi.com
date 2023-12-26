<script lang="ts">
  import { page } from "$app/stores";
  import { titles } from "$lib/stores/titles";
  import slugify from "slugify";

  export let depth: number;
  export let text: string;
  export let raw: string;

  if (depth === 1) $titles.push(text);
</script>

{#if depth === 1}
  <h1 id={text} class="mt-40px mb-40px ml-10px">
    <a
      class="text-5xl font-bold text p-16px rounded-standard bg-accent"
      style="text-shadow: var(--secondary-accent) 5px 5px;"
      href={$page.url.pathname + "#" + slugify(text)}
    >
      {text}
    </a>
  </h1>
{:else if depth === 2}
  <h2 id={text} class="mt-40px mb-40px ml-10px">
    <a
      class="text-4xl font-bold text p-16px rounded-standard bg-accent"
      style="text-shadow: var(--secondary-accent) 3.75px 3.75px;"
      href={$page.url.pathname + "#" + slugify(text)}
    >
      {text}
    </a>
  </h2>
{:else if depth === 3}
  <h3 id={text} class="mt-40px mb-40px ml-10px">
    <a
      class="text-3xl font-bold text p-16px rounded-standard bg-accent"
      style="text-shadow: var(--secondary-accent) 3.125px 3.125px;"
      href={$page.url.pathname + "#" + slugify(text)}
    >
      {text}
    </a>
  </h3>
{:else if depth === 4}
  <h4 id={text} class="mt-40px mb-40px ml-10px">
    <a
      class="text-2xl font-bold text p-16px rounded-standard bg-accent"
      style="text-shadow: var(--secondary-accent) 2.5px 2.5px;"
      href={$page.url.pathname + "#" + slugify(text)}
    >
      {text}
    </a>
  </h4>
{:else if depth === 5}
  <h5 id={text} class="mt-40px mb-40px ml-10px">
    <a
      class="text-xl font-bold text p-16px rounded-standard bg-accent"
      style="text-shadow: var(--secondary-accent) 2px 2px;"
      href={$page.url.pathname + "#" + slugify(text)}
    >
      {text}
    </a>
  </h5>
{:else if depth === 6}
  <h6 id={text} class="mt-40px mb-40px ml-10px">
    <a
      class="font-bold text p-16px rounded-standard bg-accent"
      style="text-shadow: var(--secondary-accent) 1.5px 1.5px;"
      href={$page.url.pathname + "#" + slugify(text)}
    >
      {text}
    </a>
  </h6>
{:else}
  {raw}
{/if}
