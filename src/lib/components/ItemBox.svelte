<script lang="ts">
  export let name = "", amount = 0, expired=new Date(), imageBox="";
</script>

<div class="h-[68px] pr-[109px] justify-start items-center gap-4 inline-flex">
  <div class="w-6 h-6 p-0.5 justify-center items-center inline-flex">
    <div class="w-5 h-5 relative bg-white rounded border border-zinc-900"></div>
  </div>
  <div class="w-[178px] h-[68px] relative">
    <div class="left-[81px] top-0 absolute text-black text-base font-normal">
      {name}
    </div>
    <div class="left-[81px] top-[53px] absolute text-black text-xs font-normal">
      Expired in {expired.toDateString()} days
    </div>
    <div class="left-[81px] top-[29px] absolute text-neutral-600 text-xs font-normal">
      Amount : {amount} unit
    </div>
    <div class="w-[68px] h-[68px] p-[22px] left-0 top-0 absolute bg-zinc-100 rounded-sm justify-center items-center inline-flex">
      <img src={imageBox} alt="imagebox" />
      <div class="w-6 h-6 relative flex-col justify-start items-start flex"></div>
    </div>
  </div>
</div>