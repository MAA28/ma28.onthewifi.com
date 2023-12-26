<script lang="ts">
  export let text: string;
  export let task: boolean;
  export let checked: boolean;
</script>

<li class="text-xl text">
  {text}
  <slot />
</li>
