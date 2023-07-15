import type { MyFridge } from "$lib/model/model";
import type { PageServerLoad } from "./$types";

export const load = (() => {
  const item: MyFridge = {
    meat: [
      { name: "Pork", amount: 3, exp: 7, imgID: "/image/item/pork.png" },
      { name: "Chicken", amount: 2, exp: 6, imgID: "/image/item/chicken.png" },
      { name: "Beef", amount: 3, exp: 7, imgID: "/image/item/beef.png" },
      { name: "Frog", amount: 3, exp: 7, imgID: "/image/item/frog.png" },
      { name: "Salmon", amount: 3, exp: 7, imgID: "/image/item/salmon.png" },
    ],
    veg: [
      { name: "Carrot", amount: 2, exp: 4, imgID: "/image/item/carrot.png" },
      { name: "Broccoli", amount: 4, exp: 6, imgID: "/image/item/broccoli.png" },
      { name: "Potato", amount: 6, exp: 7, imgID: "/image/item/potato.png" },
    ],
    dairy: [
      { name: "Milk", amount: 1, exp: 7, imgID: "/image/item/milk.png" },
      { name: "Cheese", amount: 4, exp: 7, imgID: "/image/item/cheese.png" },
      { name: "Yoghurt", amount: 2, exp: 7, imgID: "/image/item/yoghurt.png" },

    ],
  };
  return {
    result:item
}
}) satisfies PageServerLoad;
