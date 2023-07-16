import type { ItemProp } from "$lib/model/model";
import { writable  } from "svelte/store";

export const ingredients = writable<ItemProp[]>([])