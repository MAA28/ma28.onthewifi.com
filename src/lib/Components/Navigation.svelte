<script lang="ts">
  import { page } from "$app/stores";
  import { theme } from "$lib/stores/theme";
  import { titles } from "$lib/stores/titles";
  import { focusedParagraph } from "$lib/stores/focus";
  import { onMount } from "svelte";
  import slugify from "slugify";

  let mounted = false;

  onMount(() => (mounted = true));

  $: if (mounted) {
    document
      .querySelectorAll("#titles li")
      .forEach((element) => element.classList.remove("focused"));
    document
      .querySelector("#titles :nth-child(" + ($focusedParagraph + 1) + ")")
      ?.classList.add("focused");
    console.log(
      document.querySelector(
        "#titles :nth-child(" + ($focusedParagraph + 1) + ")"
      )?.classList
    );
  }
  console.log($page);
</script>

<nav
  on:mouseenter={() =>
    setTimeout(
      () =>
        document
          .querySelector("#titles :nth-child(" + ($focusedParagraph + 1) + ")")
          ?.scrollIntoView({ behavior: "smooth" }),
      515
    )}
  on:mouseleave={() =>
    setTimeout(
      () =>
        document
          .querySelector("#titles :nth-child(" + ($focusedParagraph + 1) + ")")
          ?.scrollIntoView({ behavior: "smooth" }),
      515
    )}
>
  <ul id="pages">
    <li>
      <img src="icons/mdi-account-box-multiple.svg" alt="About me Icon" />

      <a href="/AboutMe">About me</a>
    </li>
    <li>
      <img src="icons/mdi-book.svg" alt="Book Icon" />

      <a href="/blogs">Blog and more</a>
    </li>
    <li>
      <img src="icons/mdi-github.svg" alt="Github Icon" />

      <a class="no-underline" href="https://github.com/MAA28">GitHub</a>
    </li>
    <li>
      <img src="icons/mdi-instagram.svg" alt="Instagram Icon" />

      <a href="https://www.instagram.com/m.a.a._28/">Instagram</a>
    </li>
  </ul>

  <ol id="titles">
    {#each $titles as title}
      <li>
        <a href={$page.url.pathname + "#" + slugify(title)}>{title}</a>
      </li>
    {/each}
  </ol>
  <button
    id="theme-selector"
    on:click={() =>
      ($theme = $theme == "light mode" ? "dark mode" : "light mode")}
  >
    {#if $theme == "dark mode"}
      <img src="icons/dark-mode.svg" alt="Dark Mode Icon" />
      <div>Dark Mode</div>
    {:else if $theme == "light mode"}
      <img src="icons/light-mode.svg" alt="Light Mode Icon" />
      <div>Light Mode</div>
    {/if}
  </button>
</nav>

<style lang="postcss">
  nav {
    transition: all 0.5s;

    display: flex;
    flex-direction: column;
    height: 100vh;
    position: fixed;
    top: 0;
    background-color: var(--secondary);

    &:hover {
      #pages li {
        gap: var(--padding);

        a {
          max-width: 200px;
          opacity: 1;
        }
      }
    }
    #pages {
      flex-shrink: 0;
      padding: 0;
      overflow: hidden;
      ::marker {
        content: "";
      }

      li {
        display: flex;
        align-items: center;

        background-color: var(--primary);
        border-radius: var(--border-radius);
        padding: var(--padding);
        margin: var(--margin);
        gap: 0;

        a {
          text-decoration: none;
          font-weight: bolder;
          color: var(--secondary);
          white-space: nowrap;
          max-width: 0px;
          opacity: 0;
          transition: inherit;
        }

        img {
          height: 30px;
          filter: invert(1);
        }

        transition: inherit;
      }
      transition: inherit;
    }
    &:hover {
      #titles {
        width: 100%;
        overflow-y: scroll;

        li {
          a {
            opacity: 1;
            max-width: 200px;
            max-height: 5.5rem;
          }
        }
      }
    }
    #titles {
      overflow-y: hidden;

      list-style: decimal-leading-zero;
      list-style-position: inside;
      padding: 0 var(--padding);
      width: min-content;
      li {
        &::marker {
          font-size: smaller;

          font-weight: bolder;
          transition: inherit;
          transition: inherit;
        }

        color: var(--text);
        margin: var(--margin);
        border-radius: var(--border-radius);
        padding: var(--padding) 0;
        a {
          opacity: 0;
          display: block;
          width: fit-content;
          overflow-y: scroll;
          overflow-x: hidden;
          max-width: 0px;
          max-height: 0px;
          transition: inherit;
        }

        &.focused {
          color: red;
        }
        transition: inherit;
      }
      transition: inherit;
    }
    &:hover {
      #theme-selector {
        gap: var(--padding);

        div {
          max-width: 200px;
          opacity: 1;
        }
      }
    }
    #theme-selector {
      gap: 0;
      display: flex;
      align-items: center;
      margin: var(--margin);
      margin-top: auto;
      padding: var(--padding);
      background-color: var(--text);
      border-radius: var(--border-radius);
      img {
        height: 30px;
        filter: invert(1);
      }
      div {
        color: var(--secondary);
        max-width: 0;
        opacity: 0;
        overflow: hidden;
        white-space: nowrap;
        transition: inherit;
      }
      transition: inherit;
    }
  }
  .light * img {
    filter: none !important;
  }
</style>
