import type { PageServerLoad } from './$types';

export const load = (async ({ url }) => {
    const query = url.searchParams.get('search');
    const items = [
        { name: "Pork", amount: 3, exp: 7, imgID: "/image/item/pork.png" },
        { name: "Chicken", amount: 2, exp: 6, imgID: "/image/item/chicken.png" },
        { name: "Beef", amount: 3, exp: 7, imgID: "/image/item/beef.png" },
        { name: "Frog", amount: 3, exp: 7, imgID: "/image/item/frog.png" },
        { name: "Salmon", amount: 3, exp: 7, imgID: "/image/item/salmon.png" },
        { name: "Carrot", amount: 2, exp: 4, imgID: "/image/item/carrot.png" },
        { name: "Broccoli", amount: 4, exp: 6, imgID: "/image/item/broccoli.png" },
        { name: "Potato", amount: 6, exp: 7, imgID: "/image/item/potato.png" },
        { name: "Milk", amount: 1, exp: 7, imgID: "/image/item/milk.png" },
        { name: "Cheese", amount: 4, exp: 7, imgID: "/image/item/cheese.png" },
        { name: "Yoghurt", amount: 2, exp: 7, imgID: "/image/item/yoghurt.png" },
    ]
    return {
        items: items.filter(item => item.name.toLowerCase().includes(query?.toLowerCase() ?? '')),
    };
}) satisfies PageServerLoad;