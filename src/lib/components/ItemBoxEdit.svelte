<script lang="ts">
  import { Checkbox } from "flowbite-svelte";

  export let name = "Default",
    amount = 0,
    exp = 0,
    image = "/Image.svg";

  let expiredDate = (Date.now() - exp) / (1000 * 60 * 60 * 24);
</script>

<div class="w-full justify-start items-center my-1 inline-flex">
  <div class="mx-5 w-6 h-6 justify-center items-center inline-flex">
    <Checkbox />
  </div>
  <div class="w-full h-16 flex">
    <div
      class="w-16 h-16 p-5 my-auto bg-zinc-100 rounded-sm justify-center items-center inline-flex"
    >
      <img
        src={image}
        alt=""
        height="1.5rem"
        class="relative flex-col justify-start items-start flex"
      />
    </div>
    <div class="flex flex-col pl-4">
      <h1 class="text-black text-base font-normal">{name}</h1>
      <div class="text-black text-xs font-normal">
        Expired in {expiredDate} days
      </div>
      <div class="text-neutral-600 text-xs font-normal">
        Amount : {amount} unit
      </div>
    </div>
  </div>
</div>

