<script lang="ts">
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

            <a href="https://github.com/MAA28">GitHub</a>
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

    <ul id="titles">
        {#each titles as title}
            <li>
                <a>{title}</a>
            </li>
        {/each}
    </ul>
</nav>

<style lang="scss">
    nav {
        display: flex;
        flex-direction: column;
        height: 100vh;
        position: fixed;
        top: 0;
        background-color: var(--gray);
        overflow: hidden;
        #pages {
            padding: 0;
            width: auto;
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
                overflow: hidden;
                gap: var(--padding);

                a {
                    text-decoration: none;
                    color: var(--gray);
                    width: max-content;
                }

                img {
                    height: 25px;
                    filter: invert(1);
                }
                transition: box-shadow 0.2s;
                &:hover {
                    box-shadow: 0 0 10px 3px var(--black);
                }
            }
        }

        #titles {
            ::marker {
                content: "";
            }
            width: min-content;

            padding-left: 3px;
            li {
                margin: var(--margin);
                border-radius: var(--border-radius);
                padding: var(--padding);
                a {
                    width: auto;
                    display: block;
                    color: var(--white);
                }
            }
        }
    }
</style>
