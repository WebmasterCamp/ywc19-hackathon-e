<script lang="ts">
  import Icon from "@iconify/svelte";

  export let name = "Default",
    ingredient = 0,
    timeCook = 0,
    imgID = "/Image.svg";
</script>

<div class="w-full justify-start my-1 flex items-center">
  <div class="w-full h-16 flex">
    <img
      src={imgID}
      alt=""
      height="1.5rem"
      class="relative flex-col justify-start items-start flex w-16 h-16"
    />
    <div class="flex flex-col pl-4">
      <h1 class="text-black text-base font-normal">{name}</h1>
      <div class="text-black text-xs font-normal">
        Expired in {ingredient} days
      </div>
      <div class="text-neutral-600 text-xs font-normal">
        Amount : {timeCook} unit
      </div>
    </div>
  </div>
  <div>
    <a href="/fridge">
      <Icon icon="ic:baseline-arrow-forward-ios" />
    </a>
  </div>
</div>
