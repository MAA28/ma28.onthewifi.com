<script lang="ts">
  export let body: string;
  export let ordered: boolean;
  export let start: number;
</script>

{#if ordered}
  <ol {start}>
    <slot />
  </ol>
{:else}
  <ul>
    <slot />
  </ul>
{/if}
