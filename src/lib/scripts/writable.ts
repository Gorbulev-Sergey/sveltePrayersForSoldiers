import { browser } from "$app/environment";
import { writable } from "svelte/store";

export let isNavPanelShow = writable(true);
export let isTitlesShow = writable(true);
export let bgColor = writable("bg-light");
export let textColor = writable("text-dark");
export let fontFamily = writable("Raleway");
export let fontSize = writable(1.2);
export let lineHeight = writable(1.25);
export let articleInterval = writable(0.75);