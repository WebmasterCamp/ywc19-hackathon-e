<script lang="ts">
  import ItemBox from '$lib/components/ItemBox.svelte';
	import type { PageData } from './$types';

  import { ingredients } from '$lib/store/ingredient';

  const addToStore = (obj: any) => {
    $ingredients = $ingredients.concat(obj)
    console.log("Test")
  }
    
  export let data : PageData
</script>

<p>Test</p>
<div class="flex flex-col w-screen">
    <div class="flex w-screen justify-between px-4">
      <h1>My fridge</h1>
      <div class="o">0</div>
    </div>
    <div class="flex space-x-3 px-4">
      <a href="/">Meat</a>
      <a href="/">Vegetable</a>
      <a href="/">Dairy</a>
    </div>
    <div class="flex flex-col">
      <div class="w-screen bg-gray-200 px-4 mb-2">
        <h2>Meat</h2>
      </div>
      <div class="flex flex-wrap px-4 w-screen mb-2">
        {#each data.result.meat as item}
        <ItemBox name={item.name} exp={item.exp} amount={item.amount} image={item.imgID} on:Touch={() => {addToStore(item)}}/>
        {/each}
      </div>
    </div>
    <div class="flex flex-col">
      <div class="w-screen bg-gray-200 px-4 mb-2">
        <h2>Vegetable</h2>
      </div>
      <div class="flex flex-wrap px-4 w-screen mb-2">
        {#each data.result.veg as item}
        <ItemBox name={item.name} exp={item.exp} amount={item.amount} image={item.imgID}/>
        {/each}
      </div>
    </div>
    <div class="flex flex-col">
      <div class="w-screen bg-gray-200 px-4 mb-2">
        <h2>Vegetable</h2>
      </div>
      <div class="flex flex-wrap px-4 w-screen mb-2">
        {#each data.result.dairy as item}
        <ItemBox name={item.name} exp={item.exp} amount={item.amount} image={item.imgID}/>
        {/each}
      </div>
    </div>
    <div class="rounded-full w-10 h-10 bg-black fixed bottom-14 right-0 flex justify-center items-center">
      <a class="text-white" href="/fridge/add">+</a>
    </div>
    <nav class="fixed bottom-0 w-screen border-t-2 border-"></nav>
  </div>