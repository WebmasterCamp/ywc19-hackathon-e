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
    on:click={() => (hidden8 = false)}
  >
    Next
  </button>
</div>
<Drawer
  placement="bottom"
  width="w-full"
  transitionType="fly"
  transitionParams={transitionParamsBottom}
  bind:hidden={hidden8}
  id="sidebar8"
  class="rounded-t-2xl p-4 shadow-top"
>
  <div class="flex items-center">
    <h5
      id="drawer-label"
      class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
    >
      <svg
        class="w-5 h-5 mr-2"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd"
        /></svg
      >Info
    </h5>
    <CloseButton
      on:click={() => (hidden8 = true)}
      class="mb-4 dark:text-white"
    />
  </div>
  <p class="max-w-lg mb-6 text-sm text-gray-500 dark:text-gray-400">
    Supercharge your hiring by taking advantage of our <a
      href="/"
      class="text-primary-600 underline dark:text-primary-500 hover:no-underline"
      >limited-time sale</a
    > for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates
    and the #1 design job board.
  </p>
  <Button color="light" href="/">Learn more</Button>
  <Button href="/" class="ml-2"
    >Get access <svg
      class="w-4 h-4 ml-1"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        fill-rule="evenodd"
        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
        clip-rule="evenodd"
      /></svg
    ></Button
  >
</Drawer>
