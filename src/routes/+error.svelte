<script>
  import { page } from "$app/stores";
</script>

<div class="p-8px rounded-standard bg-primary">
  <h2 class="text-4xl text-center text m-10px">
    Ooops... irgendwas ist schief gegangen?!
  </h2>
  <table class="mr-auto ml-auto w-3/4 bg-accent rounded-standard m-20px">
    <tr>
      <td class="text-xl text-center text p-8px m-10px">Status</td>
      <td class="text-xl text-center text p-8px m-10px">{$page.status}</td>
    </tr>
    {#if $page.error}
      <tr>
        <td class="text-xl text-center text p-8px m-10px">Fehler</td>
        <td class="text-xl text-center text p-8px m-10px"
          >{$page.error.message}</td
        >
      </tr>
    {/if}
  </table>
</div>
