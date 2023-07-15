<script lang="ts">
  import Icon from "@iconify/svelte";
  import type { PageData } from "./$types";
  import { ingredients } from "$lib/store/ingredient";

  $ingredients = []

  export let data: PageData;
</script>

<div class="flex flex-col">
  <div class="flex items-center text-3xl">
    <a href="/fridge">
      <Icon icon="ic:round-arrow-back-ios" />
    </a>
    <h1>Cook Book</h1>
  </div>
  <div class="menu" />
  <div class="flex flex-col">
    <div class="item" />
    <div class="item" />
    <div class="item" />
    <div class="item" />
  </div>
</div>
