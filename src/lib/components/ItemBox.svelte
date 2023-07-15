<script lang="ts">
  let name = "Default";
  let amount = 0;
  let exp = 0;
  let image = "/image/mocking/mockimg.svg";
  
  export { name, amount, exp, image };

</script>

<div class="flex flex-col w-[110px] rounded-xl border-2 overflow-hidden mb-2 mr-2" >
  <div class="w-full">
    <img src={image} alt="item-img" />
  </div>
  <div class="flex flex-col space-y-1 p-2">
    <h1>{name} ({amount})</h1>
    <p class=" text-sm">Expired in {exp} days</p>
  </div>
</div>
