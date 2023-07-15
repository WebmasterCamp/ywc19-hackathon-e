<script lang="ts">
    import ItemBoxEdit from '$lib/components/ItemBoxEdit.svelte';
    import { test } from '$lib/test';
</script>

<div class="flex flex-col w-screen">
    <div class="flex w-screen justify-between px-4">
      <h1>My fridge 1</h1>
      <div>
        <label>
          Search
          <input type="text">
        </label>
        
      </div>
      
    </div>
    <div class="flex flex-col">
      <div class="flex flex-col space-y-4 px-4">
        {#each Array(2) as _, i}
        <ItemBoxEdit image="/Image.svg" />
        {/each}
        {#each $test as _, i}
        <ItemBoxEdit image="/Image.svg" />
        {/each}
      </div>
    </div>
  </div>
  