<script lang="ts">
  let name = "Default";
  let exp = 0;
  let image = "/image/mocking/mockimg.svg";
  
  export { name, exp, image };

</script>

<div class="flex flex-col w-[110px] rounded-xl shadow-sm overflow-hidden mb-2 mr-2 itemboxs" >
  <img src={image} alt="item-img" />
  <div class="flex flex-col space-y-1 p-2 items-start">
    <h1>{name}</h1>
    <p class="text-[10px]">Expired in {exp} days</p>
  </div>
</div>
