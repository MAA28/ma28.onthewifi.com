<script>
  export let header;
  export let align;
</script>

{#if header}
  <th {align}><slot /></th>
{:else}
  <td {align}><slot /></td>
{/if}
