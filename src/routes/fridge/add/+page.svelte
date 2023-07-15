<script lang="ts">
  import Icon from "@iconify/svelte";

  import ItemBoxEdit from "$lib/components/ItemBoxEdit.svelte";

  export let data;
</script>

<div class="flex flex-col w-screen">
  <div class="flex w-screen justify-between px-4">
    <form action="/fridge/add">
      <div>
        <label>
          Search
          <input name="search" type="text" />
        </label>
      </div>
      <button type="submit">search</button>
    </form>
  </div>
  <div class="flex flex-col">
    <div class="flex flex-col space-y-4 px-4">
      {#each data.items as item}
        <ItemBoxEdit image="/Image.svg" name={item.name} />
      {/each}
    </div>
  </div>
  <button class="bg-slate-800 text-slate-50">Confirm</button>
</div>
