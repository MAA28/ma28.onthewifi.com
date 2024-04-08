import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = (async ({  fetch }) => {
    return {
		aboutMe: fetch("/AboutMe.md").then((res) => res.text())
	};
}) satisfies PageServerLoad;