import { writable, type Writable } from "svelte/store";

export const focusedParagraph: Writable<number>= writable(0);

