<script>
    import Navigation from "./Navigation.svelte";
    import SkipToContent from "./Skip-To-Content.svelte";
</script>

<header>
    <SkipToContent />
    <h1><a href="/">ma28.onthewifi.com</a></h1>
    <Navigation />
</header>

<style lang="scss">
    header {
        margin-bottom: 30px;
    }
    header h1 a {
        text-decoration: none;
        color: var(--white);
    }
</style>
