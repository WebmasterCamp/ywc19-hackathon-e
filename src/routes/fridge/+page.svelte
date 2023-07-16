<script lang="ts">
  import ItemBox from "$lib/components/ItemBox.svelte";
  import type { PageData } from "./$types";

  import { ingredients } from "$lib/store/ingredient";
  import { sineIn } from "svelte/easing";
  import { Drawer } from "flowbite-svelte";
  import ItemBoxEdit from "$lib/components/ItemBoxEdit.svelte";
  import Icon from "@iconify/svelte";

  const addToStore = (obj: any, e: MouseEvent) => {
    const box = (e.target as Element).closest(".itemboxs");
    if ($ingredients.find((e: any) => e.name === obj.name)) {
      console.log("found");
      $ingredients = $ingredients.filter((e: any) => e.name != obj.name);
      box?.classList.remove("!bg-orange-200");
    } else {
      if ($ingredients.length < 3) {
        $ingredients = $ingredients.concat(obj);
        box?.classList.add("!bg-orange-200");
      }
    }
  };

  let hidden8 = true;

  let transitionParamsBottom = {
    y: 320,
    duration: 200,
    easing: sineIn,
  };

  $: hidden8 = $ingredients.length <= 0;

  export let data: PageData;
</script>

<div class="flex flex-col w-screen pt-4">
  <div class="w-full border-b-2 px-4">
    <img src="./image/mocking/logo.png" alt="logo" />
  </div>
  <div class="flex w-screen justify-between px-4 items-baseline py-2">
    <h1 class="font-bold text-[20px]">My fridge</h1>
    <h1 class="font-bold text-[20px]">
      <Icon class="text-black dark:text-white" icon="ic:outline-search" />
    </h1>
  </div>
  <div class="flex space-x-3 p-4 ">
    <button class="w-[10%] bg-main rounded-sm">All</button>
    <button class="w-[30%] text-end pr-2 rounded-sm bg-drop">Meat</button>
    <button class="w-[40%] text-end pr-2 rounded-sm bg-drop">Vegetable</button>
    <button class="w-[30%] text-end pr-2 rounded-sm bg-drop">Dairy</button>
  </div>
  <div class="flex flex-col">
    <div class="w-screen bg-drop-hard h-2" />
    <h2 class="pl-4 py-2">Meat</h2>
    <div class="flex flex-wrap px-4 w-screen mb-2">
      {#each data.result.meat as item}
        <button on:click|stopPropagation={(e) => addToStore(item, e)}>
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
    <div class="w-screen bg-drop-hard h-2" />
    <h2 class="pl-4 py-2">Vegetable</h2>
    <div class="flex flex-wrap px-4 w-screen mb-2">
      {#each data.result.veg as item}
        <button
          on:click|stopPropagation={(e) => addToStore(item, e)}
        >
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
    <div class="w-screen bg-drop-hard h-2" />
    <h2 class="pl-4 py-2">Vegetable</h2>
    <div class="flex flex-wrap px-4 w-screen mb-2">
      {#each data.result.dairy as item}
        <button on:click|stopPropagation={(e) => addToStore(item, e)}>
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
  <button
    on:click={() => {
      new Notification("Hello", {
        body: "Hello, world!",
      });
    }}
    >--noti--
  </button>
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
