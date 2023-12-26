import Blockquote from "./renderers/blockquote.svelte";
import Br from "./renderers/br.svelte";
import Checkbox from "./renderers/checkbox.svelte";
import Code from "./renderers/code.svelte";
import Codespan from "./renderers/codespan.svelte";
import Del from "./renderers/del.svelte";
import Em from "./renderers/em.svelte";
import Heading from "./renderers/heading.svelte";
import Hr from "./renderers/hr.svelte";
import Html from "./renderers/html.svelte";
import Image from "./renderers/image.svelte";
import Link from "./renderers/link.svelte";
import List from "./renderers/list.svelte";
import Listitem from "./renderers/listitem.svelte";
import Paragraph from "./renderers/paragraph.svelte";
import Strong from "./renderers/strong.svelte";
import Table from "./renderers/table.svelte";
import Tablebody from "./renderers/tablebody.svelte";
import Tablecell from "./renderers/tablecell.svelte";
import Tablehead from "./renderers/tablehead.svelte";
import Tablerow from "./renderers/tablerow.svelte";
import Text from "./renderers/text.svelte";


// https://marked.js.org/using_pro#renderer
let renderers = {
        code: Code,
        blockquote: Blockquote,
        html: Html,
        heading: Heading,
        hr: Hr,
        list:  List,
        listitem: Listitem,
        checkbox: Checkbox,
        paragraph: Paragraph,
        table: Table,
        tablebody: Tablebody,
        tablehead: Tablehead,
        tablerow: Tablerow,
        tablecell: Tablecell,
        strong: Strong,
        em: Em,
        codespan: Codespan,
        br: Br,
        del: Del,
        link: Link,
        image: Image,
        text: Text,
}

export default renderers;