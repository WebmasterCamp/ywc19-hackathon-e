<script lang="ts">
  import Icon from "@iconify/svelte";
  import { Drawer, Button, CloseButton, A } from "flowbite-svelte";
  import { sineIn } from "svelte/easing";
  import type { PageData } from "./$types";

  import ItemBoxEdit from "$lib/components/ItemBoxEdit.svelte";

  let hidden8 = true;

  let transitionParamsBottom = {
    y: 320,
    duration: 200,
    easing: sineIn,
  };

  export let data: PageData;
</script>

<div class="h-screen flex flex-col max-w-screen">
  <div class="my-2">
    <div class="flex items-center text-3xl">
      <a href="/fridge">
        <Icon icon="ic:round-arrow-back-ios" />
      </a>
      <h1 class="flex-grow text-center">Adjust Ingredients</h1>
    </div>
    <div class="mx-4 overflow-scroll">
      <label
        for="search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >Search</label
      >
      <div class="relative">
        <div
          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
        >
          <Icon class="text-black dark:text-white" icon="ic:baseline-search" />
        </div>
        <input
          type="search"
          id="search"
          class="block w-full p-4 mt-4 pl-10 text-sm text-gray-900 border border-gray-800 rounded-full bg-gray-50 focus:ring-main-500 focus:border-main-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main-500 dark:focus:border-main-500"
          placeholder="Search"
          required
        />
        <button
          type="submit"
          class="h-8 w-8 absolute right-2.5 bottom-2.5 focus:ring-4 text-center"
        >
          <Icon
            icon="carbon:close-outline"
            class="text-black dark:text-white"
          />
        </button>
      </div>
    </div>
  </div>
  <div class="grow">
    <div class="w-full">
      <form>
        {#each data.items as item}
          <ItemBoxEdit name={item.name} />
        {/each}
      </form>
    </div>
  </div>
  <a
        class="w-full text-white bg-main hover:bg-main-800 focus:ring-4 mx-4 focus:ring-main-300 font-medium rounded-lg text-xl px-5 py-2.5 mb-2 dark:bg-main-600 dark:hover:bg-main-700 focus:outline-none dark:focus:ring-main-800"
        href="/fridge"
      >
        Next
      </a>
</div>
