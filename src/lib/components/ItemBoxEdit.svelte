<script lang="ts">
  export let name = "Default", amount = 0, exp=(Date.now()), image="/Image.svg";

  let expiredDate = (Date.now() - exp)/(1000 * 60 * 60 * 24);
</script>

<div class="w-80 h-16 pr-28 justify-start items-center gap-4 inline-flex">
  <div class="w-6 h-6 p-0.5 justify-center items-center inline-flex">
    <div class="w-5 h-5 relative bg-zinc-900 rounded flex-col justify-start items-start flex"></div>
  </div>
  <div class="w-44 h-16 relative">
    <div class="w-16 h-16 p-5 left-0 top-0 absolute bg-zinc-100 rounded-sm justify-center items-center inline-flex">
      <img src={image} alt="" class="w-6 h-6 relative flex-col justify-start items-start flex"/>
    </div>
    <div class="left-[81px] top-0 absolute text-black text-base font-normal">{name}</div>
    <div class="left-[81px] top-[53px] absolute text-black text-xs font-normal">Expired in {expiredDate} days</div>
    <div class="left-[81px] top-[29px] absolute text-neutral-600 text-xs font-normal">Amount : {amount} unit</div>
  </div>
</div>