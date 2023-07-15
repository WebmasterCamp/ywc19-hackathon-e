<script lang="ts">
  export let name = "Default", amount = 0, exp=(Date.now()), image="/Image.svg";

  let expiredDate = (Date.now() - exp)/(1000 * 60 * 60 * 24);
</script>

<div class="w-28 h-32 relative bg-white rounded-lg border border-black">
  <div class="w-28 h-20 left-0 top-0 absolute justify-center items-center inline-flex">
    <div class="w-28 h-20 bg-zinc-100 rounded-lg justify-center items-center inline-flex">
      <img class="w-full h-6 relative flex-col justify-start items-start flex rounded-t-lg" src={image} alt="image1"/>
    </div>
  </div>
  <div class="w-24 h-3 left-[8px] top-[90px] absolute text-black text-sm font-normal">{name} ({amount})</div>
  <div class="w-24 h-3 left-[7.53px] top-[110.88px] absolute text-neutral-600 text-xs font-normal">Expired in {expiredDate} days</div>
</div>