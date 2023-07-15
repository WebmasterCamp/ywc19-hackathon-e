<script lang="ts">
  import Icon from "@iconify/svelte";

  import ItemBoxEdit from "$lib/components/ItemBoxEdit.svelte";
  import type { PageData } from "./$types";

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
          class="block w-full p-4 mt-4 pl-10 text-sm text-gray-900 border border-gray-800 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
      <div class="bg-gray-300 py-1 px-4">Meat</div>
      <ItemBoxEdit />
    </div>
    <div class="w-full">
      <div class="bg-gray-300 py-1 px-4">Vegetable</div>
      <ItemBoxEdit />
    </div>
    <div class="w-full">
      <div class="bg-gray-300 py-1 px-4">Dairy</div>
      <ItemBoxEdit />
    </div>
  </div>
  <button
    type="button"
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 mx-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
  >
    Next
  </button>
</div>
