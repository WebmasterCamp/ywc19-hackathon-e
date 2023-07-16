<script lang="ts">
  import Icon from "@iconify/svelte";
  import type { PageData } from "./$types";
  import { ingredients } from "$lib/store/ingredient";
  import ItemMenu from "$lib/components/ItemMenu.svelte";

  $ingredients = []

  export let data: PageData;
</script>

<div class="flex flex-col">
  <div class="flex items-center text-3xl">
    <a href="/fridge">
      <Icon icon="ic:round-arrow-back-ios" />
    </a>
    <h1 class="font-[500] text-[24px] text-main">Cook Book</h1>
    
  </div>
  <div class="flex space-x-3 p-4 ">
    <button class="w-[10%] bg-main rounded-sm">All</button>
    <button class="w-[30%] text-end pr-2 rounded-sm bg-drop">Meat</button>
    <button class="w-[40%] text-end pr-2 rounded-sm bg-drop">Vegetable</button>
    <button class="w-[30%] text-end pr-2 rounded-sm bg-drop">Dairy</button>
  </div>
  <div class="flex flex-col px-4">
    <ItemMenu imgID='./image/menu/menu0.png'/>
    <ItemMenu imgID='./image/menu/menu1.png'/>
    <ItemMenu imgID='./image/menu/menu2.png'/>
    <ItemMenu imgID='./image/menu/menu3.png'/>
    <ItemMenu imgID='./image/menu/menu4.png'/>
    <ItemMenu imgID='./image/menu/menu5.png'/>
    <ItemMenu imgID='./image/menu/menu6.png'/>
    <ItemMenu imgID='./image/menu/menu7.png'/>
    <ItemMenu imgID='./image/menu/menu8.png'/>
  </div>
</div>
