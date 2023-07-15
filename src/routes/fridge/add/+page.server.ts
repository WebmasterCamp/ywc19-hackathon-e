import type { PageServerLoad } from './$types';

export const load = (async ({ url }) => {
    const query = url.searchParams.get('search');
    const items = [
        { name: "Apple" },
        { name: "A" },
        { name: "B" },
        { name: "C" },
        { name: "D" },
        { name: "E" },
        { name: "F" },
    ]
    return {
        items: items.filter(item => item.name.toLowerCase().includes(query?.toLowerCase() ?? '')),
    };
}) satisfies PageServerLoad;