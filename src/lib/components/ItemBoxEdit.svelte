<script lang="ts">
  import { Checkbox } from "flowbite-svelte";

  export let name = "Default",
    image = "/Image.svg",
    exp = 0,
    isWantCheck = true,
    id = "";
</script>

<div class="w-full justify-start items-center my-1 inline-flex">
  {#if isWantCheck}
    <div class="mx-5 w-6 h-6 justify-center items-center inline-flex">
      <Checkbox name="add" value={id}/>
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
    </div>
  </div>
</div>
