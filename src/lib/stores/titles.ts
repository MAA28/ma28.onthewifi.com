import { writable, type Writable } from "svelte/store";

export const titles: Writable<String[]>= writable([]);

