<script>
  import MarkdownBlog from "$lib/Components/MarkdownBlog.svelte";

  const source = `# This is a header


This is a paragraph. **Fett** *kursiv*

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

> hi ich bin malte und ich bin sehr happy mit der welt weil der sozilaismus siegreich sein wird und wir alle frei sein werden

\`\`\`python
import lib

a = 4

def f(x):
  return 3 * x

  f(a)
\`\`\`



`;
</script>

<MarkdownBlog {source} />
