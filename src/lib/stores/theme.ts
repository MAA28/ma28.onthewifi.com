import { writable, type Writable } from "svelte/store";

export const theme: Writable<'system' |'light mode' | 'dark mode'>= writable('system');

