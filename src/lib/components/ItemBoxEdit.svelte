<script lang="ts">
  import { Checkbox } from "flowbite-svelte";

  export let name = "Default",
    amount = 0,
    exp = 0,
    image = "/Image.svg",
    isWantCheck = true;
</script>

<div class="w-full justify-start items-center my-1 inline-flex">
  {#if isWantCheck}
    <div class="mx-5 w-6 h-6 justify-center items-center inline-flex">
      <Checkbox />
    </div>
  {/if}
  <div class="w-full h-16 flex">
    <img
      src={image}
      alt=""
      height="1.5rem"
      class="relative flex-col justify-start items-start flex w-16 h-16"
    />
    <div class="flex flex-col pl-4">
      <h1 class="text-black text-base font-normal">{name}</h1>
      <div class="text-black text-xs font-normal">
        Expired in {exp} days
      </div>
      <div class="text-neutral-600 text-xs font-normal">
        Amount : {amount} unit
      </div>
    </div>
  </div>
</div>
