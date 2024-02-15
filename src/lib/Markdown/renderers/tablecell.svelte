<script lang="ts">
  export let header: string;
  export let align: "left" | "center" | "right" | "justify" | "char";
</script>

{#if header}
  <th {align} class="overflow-hidden p-8px bg-primary text-background">
    <slot />
  </th>
{:else}
  <td {align} class="text p-8px bg-secondary">
    <slot />
  </td>
{/if}
