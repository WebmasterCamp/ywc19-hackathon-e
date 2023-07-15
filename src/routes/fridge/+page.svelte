<script lang="ts">
    import type { PageData } from './$types';
    import ItemBox from '$lib/components/ItemBox.svelte';
    
    export let data: PageData;
</script>

<p>Test</p>
<div class="flex flex-col w-screen">
    <div class="flex w-screen justify-between px-4">
      <h1>My fridge</h1>
      <div class="o">0</div>
    </div>
    <div class="flex space-x-3 px-4">
      <a href="/">Meat</a>
      <a>Vegetable</a>
      <a>Dairy</a>
    </div>
    <div class="flex flex-col">
      <div class="w-screen bg-gray-200 px-4">
        <h2>Meat</h2>
      </div>
      <div class="flex flex-col space-y-4 px-4">
        <ItemBox imageBox="/Image.svg" />
        <ItemBox imageBox="/Image.svg" />
        <ItemBox imageBox="/Image.svg" />
      </div>
    </div>
    <div class="flex flex-col">
      <div class="w-screen bg-gray-200 px-4">
        <h2>Vegetable</h2>
      </div>
      <div class="flex flex-col space-y-4 px-4">
        <ItemBox imageBox="/Image.svg" />
        <ItemBox imageBox="/Image.svg" />
        <ItemBox imageBox="/Image.svg" />
        <ItemBox imageBox="/Image.svg" />
      </div>
    </div>
    <div class="rounded-full w-20 h-20 bg-black">+</div>
  </div>