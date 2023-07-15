<script lang="ts">
  import ItemBox from "$lib/components/ItemBox.svelte";
  import type { PageData } from "./$types";

  import { ingredients } from "$lib/store/ingredient";
  import { sineIn } from "svelte/easing";
  import { Drawer } from "flowbite-svelte";
  import ItemBoxEdit from "$lib/components/ItemBoxEdit.svelte";

  const addToStore = (obj: any) => {
    if ($ingredients.find((e: any) => e.name === obj.name)) {
      console.log("found");
      $ingredients = $ingredients.filter((e: any) => e.name != obj.name);
    } else {
      if ($ingredients.length < 3) {
        $ingredients = $ingredients.concat(obj);
      }
    }
  };

  let hidden8 = true;

  let transitionParamsBottom = {
    y: 320,
    duration: 200,
    easing: sineIn,
  };

  $: hidden8 = $ingredients.length === 0;

  export let data: PageData;
</script>

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
        <button on:click={() => addToStore(item)}>
          <ItemBox
            name={item.name}
            exp={item.exp}
            amount={item.amount}
            image={item.imgID}
          />
        </button>
      {/each}
    </div>
  </div>
  <div class="flex flex-col">
    <div class="w-screen bg-gray-200 px-4 mb-2">
      <h2>Vegetable</h2>
    </div>
    <div class="flex flex-wrap px-4 w-screen mb-2">
      {#each data.result.veg as item}
      <button on:click={() => addToStore(item)}>
        <ItemBox
          name={item.name}
          exp={item.exp}
          amount={item.amount}
          image={item.imgID}
        />
      </button>
      {/each}
    </div>
  </div>
  <div class="flex flex-col">
    <div class="w-screen bg-gray-200 px-4 mb-2">
      <h2>Vegetable</h2>
    </div>
    <div class="flex flex-wrap px-4 w-screen mb-2">
      {#each data.result.dairy as item}
        <button on:click={() => addToStore(item)}>
        <ItemBox
          name={item.name}
          exp={item.exp}
          amount={item.amount}
          image={item.imgID}
        />
        </button>
      {/each}
    </div>
  </div>
  {#if !hidden8}
  <div class="h-80" />
  {/if}
  <div
    class="rounded-full w-10 h-10 bg-black fixed bottom-14 right-0 flex justify-center items-center"
  >
    <a class="text-white" href="/fridge/add">+</a>
  </div>
  <nav class="fixed bottom-0 w-screen border-t-2 border-" />
</div>
<Drawer
  placement="bottom"
  width="w-full"
  transitionType="fly"
  transitionParams={transitionParamsBottom}
  bind:hidden={hidden8}
  backdrop={false}
  id="sidebar8"
  class="rounded-t-2xl p-4 shadow-top"
>
  <div class="flex-col h-1/2">
    <h1>Prepare Ingredients (3)</h1>
    {#each $ingredients as item}
      <ItemBoxEdit
        isWantCheck={false}
        name={item.name}
        exp={item.exp}
        amount={item.amount}
        image={item.imgID}
      />
    {/each}
  </div>
  <button class="w-full bg-black text-white my-1 py-2 rounded-lg">
   <a href="/menulist">Let's Cook</a> 
  </button>
</Drawer>
