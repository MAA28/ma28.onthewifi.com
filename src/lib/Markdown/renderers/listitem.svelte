<script lang="ts">
  export let text: string;
  export let task: boolean;
  export let checked: boolean;
</script>

{#if task}
  <li class="text-xl list-none text">
    <input type="checkbox" {checked} disabled />
    <slot />
  </li>
{:else}
  <li class="text-xl text">
    <slot />
  </li>
{/if}
