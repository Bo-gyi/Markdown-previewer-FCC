import "./styles.css";
import MarkdownPreviewer from "./components/MarkdownPreviewer";

// placeholder text for editor
const defaultText = `
# Welcome to Markdown Previewer!

## Short introduction of  markdown syntax

### Add # to make it a heading!
  
For a paragraph just write it. But it's best practice to avoid tab or space at the start.

To create a line break \`<br/>\` type two or more spaces and type return.

**To bold text add two "*" before and after the word or phrase.**

*Italic text is maked by adding one "*" before and after of the word.*

To add both ***bold and italic*** just add three "*" before and after.

> To create a block quote add ">" in front of a paragraph.
>
> **Block quote can contain multiple paragraph** Just add ">" on the blank line between paragraphs.
>
>> Blockquotes can be nested. Add ">>"  in front of the paragraph.

### You can add List in markdown.

To add a \`<ol>\` ordered list, start with a number and end the sentence with a period.

1. This is the list.
4. The numerical order is not important.
2. But the first sentence should start with number "1".

### To create an unordered list, add dashes "-" in front of the line.

- This is unordered list.
  - You can nested by indenting the line.
      - This is fun!
 
### To add a code block we need eight spaces or two tabs.
    <html>
      <h1>Hello World!</h1>
      </html>
      
### Enclose with backtick for inlind codes.

\`<p>Hello World!</p>\`

### To create a link use square bracket and put the link text inside it, immediately followed by the url enclosed with bracket.

My favourite search engine is [DuckDuckGo](https://duckduckgo.com).

## Finally an Image!

To embed an image use ![Label] and (link) syntax.

![Thank You](https://freesvgdesigns.com/wp-content/uploads/2021/11/Thankyou-01935.png)

`;
export default function App() {
  return <MarkdownPreviewer value={defaultText} />;
}
