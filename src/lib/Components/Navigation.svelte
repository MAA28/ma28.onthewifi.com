<script lang="ts">
  import { page } from "$app/stores";

  export const titles: String[] = [
    "Manifest der Kommunistischen Partei",
    "Satzung der SDAJ",
    "Kommunisten Heute - die Weltanschaung der DKP",
  ];
</script>

<nav>
  <ul id="pages">
    <li>
      <img src="icons/mdi-github.svg" alt="Github Icon" />

      <a class="no-underline" href="https://github.com/MAA28">GitHub</a>
    </li>
    <li>
      <img src="icons/mdi-book.svg" alt="Book Icon" />

      <a href="/blogs">Blogs and more</a>
    </li>
    <li>
      <img src="icons/mdi-instagram.svg" alt="Instagram Icon" />

      <a href="https://www.instagram.com/m.a.a._28/">Instagram</a>
    </li>
    <li>
      <img src="icons/mdi-account-box-multiple.svg" alt="About me Icon" />

      <a href="/AboutMe">About Me</a>
    </li>
  </ul>

  <ol id="titles">
    {#each titles as title}
      <li>
        <a href={$page.url.href}>{title}</a>
      </li>
    {/each}
  </ol>
</nav>

<style lang="postcss">
  nav {
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: fixed;
    top: 0;
    background-color: var(--gray);

    &:hover {
      #pages {
        li {
          gap: var(--padding);

          a {
            max-width: 200px;
            opacity: 1;
          }
        }
      }
    }
    #pages {
      padding: 0;
      overflow: hidden;
      ::marker {
        content: "";
      }

      li {
        display: flex;
        align-items: center;

        background-color: var(--red);
        border-radius: var(--border-radius);
        padding: var(--padding);
        margin: var(--margin);
        gap: 0;

        a {
          text-decoration: none;
          color: var(--gray);
          white-space: nowrap;
          max-width: 0px;
          opacity: 0;
          transition: inherit;
        }

        img {
          height: 25px;
          filter: invert(1);
        }
        transition: inherit;
      }
      transition: inherit;
    }
    &:hover {
      #titles {
        li {
          a {
            &::marker {
            }
            opacity: 1;
            max-width: 200px;
            max-height: 5rem;
          }
        }
      }
    }
    #titles {
      list-style: decimal;
      list-style-position: inside;
      padding: var(--padding);
      width: min-content;
      li {
        &::marker {
          font-weight: bolder;
          transition: inherit;
        }

        color: var(--white);
        margin: var(--margin);
        border-radius: var(--border-radius);
        padding: var(--padding) 0;
        a {
          opacity: 0;
          display: block;
          width: fit-content;
          overflow: hidden;
          max-width: 0px;
          max-height: 0px;
          transition: inherit;
        }
        transition: inherit;
      }
      transition: inherit;
    }
    transition: all 0.5s;
  }
</style>
