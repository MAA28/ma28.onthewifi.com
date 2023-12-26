<script>
  import SvelteMarkdown from "svelte-markdown";
  import renderers from "$lib/Markdown/renderer";
  import { titles } from "$lib/stores/titles";
  $titles = [];

  const source = `# This is a header


This is a paragraph.

* This is a list
* With two items
    1. And a sublist
    2. That is ordered
        * [x] With another
        * [ ] Sublist inside
  
| And this is | A table |
|-------------|---------|
| With two    | columns |

# nother title
asdasd
\`\`\`
asdsd
\`\`\`

$asdasd$

`;
</script>

<SvelteMarkdown {source} {renderers} />
