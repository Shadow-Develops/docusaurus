---
sidebar_position: 9
pagination_next: null
pagination_prev: null
---

# Markdown

Community Template provides comprehensive markdown support across blog posts, custom pages, and other content areas. This guide details all supported markdown syntax and features available in the system.

## What is Markdown?

Markdown is a lightweight markup language that allows you to format text using simple, readable syntax. Community Template converts your markdown into beautifully styled HTML automatically.

**Where Markdown is Supported:**

- Blog posts
- Custom pages
- Newsletter content
- Product descriptions
- Some page sections

## Basic Text Formatting

### Headings

Create headings using hash symbols (`#`). More hashes create smaller headings.

**Syntax:**

```markdown
# Heading One

## Heading Two

### Heading Three

#### Heading Four

##### Heading Five

###### Heading Six
```

**Best Practices:**

- Use only one H1 (`#`) per page
- Maintain heading hierarchy (don't skip levels)
- Keep headings concise and descriptive
- Use sentence case or title case consistently

### Emphasis

Add emphasis to text with bold, italic, or strikethrough formatting.

**Bold Text:**

```markdown
**This text is bold**
**This text is also bold**
```

Renders as: **This text is bold**

**Italic Text:**

```markdown
_This text is italic_
_This text is also italic_
```

Renders as: _This text is italic_

**Bold and Italic:**

```markdown
**_This text is bold and italic_**
**_This text is also bold and italic_**
**_Mix and match_**
```

Renders as: **_This text is bold and italic_**

**Strikethrough:**

```markdown
~~This text is crossed out~~
```

Renders as: ~~This text is crossed out~~

### Paragraphs and Line Breaks

**Paragraphs:**

Separate paragraphs with a blank line.

```markdown
This is the first paragraph.

This is the second paragraph.
```

**Line Breaks:**

End a line with two spaces or use `<br>` for a line break within a paragraph.

```markdown
First line
Second line

Or use HTML:
First line<br>
Second line
```

## Lists

### Unordered Lists

Create bullet points using `-`, `*`, or `+`.

**Syntax:**

```markdown
- First item
- Second item
- Third item
  - Nested item
  - Another nested item
    - Deeply nested item
```

**Renders as:**

- First item
- Second item
- Third item
  - Nested item
  - Another nested item
    - Deeply nested item

### Ordered Lists

Create numbered lists using numbers followed by periods.

**Syntax:**

```markdown
1. First item
2. Second item
3. Third item
   1. Nested item
   2. Another nested item
4. Fourth item
```

**Renders as:**

1. First item
2. Second item
3. Third item
   1. Nested item
   2. Another nested item
4. Fourth item

**List Tips:**

- Lists auto-renumber, so you can use `1.` for all items
- Mix ordered and unordered lists in nesting
- Use consistent indentation (2-4 spaces)

## Links

### Basic Links

Create clickable links using bracket and parenthesis syntax.

**Syntax:**

```markdown
[Link text](https://example.com)
[Shadow Development](https://shadowdevelopment.net)
```

**Renders as:**

[Link text](https://example.com)

### Automatic Links

**Syntax:**

```markdown
https://shadowdevelopment.net
```

**Link Best Practices:**

- Use descriptive link text (avoid "click here")
- Test all links before publishing
- Use HTTPS when possible
- Consider opening external links in new tabs (use HTML if needed)

## Images

Display images using the image syntax.

**Syntax:**

```markdown
![Alt text](https://example.com/image.jpg)
![Community Template Logo](https://shadowdevelopment.net/logo.png)
```

**Components:**

- `!` - Marks this as an image
- `[Alt text]` - Description for accessibility and SEO
- `(URL)` - Image URL (absolute or relative)

## Code

### Inline Code

Highlight code or commands inline using backticks.

**Syntax:**

```markdown
Use the `console.log()` function to debug.
Press `Ctrl+S` to save.
Install with `npm install package-name`.
```

**Renders as:**

Use the `console.log()` function to debug.

### Code Blocks

Display multi-line code with syntax highlighting.

**Basic Code Block:**

````markdown
```
function hello() {
  console.log('Hello World');
}
```
````

**Code Block with Language:**

````markdown
```javascript
function hello() {
	console.log('Hello World');
}
```
````

**Supported Languages:**

- `javascript` / `js`
- `typescript` / `ts`
- `python` / `py`
- `java`
- `css`
- `html`
- `json`
- `markdown` / `md`
- `bash` / `shell`
- `sql`
- `php`
- `ruby`
- `go`
- `rust`
- `c` / `cpp`
- And many more

**Example with Syntax Highlighting:**

````markdown
```typescript
interface User {
	id: number;
	name: string;
	email: string;
}

const user: User = {
	id: 1,
	name: 'John Doe',
	email: 'john@example.com',
};
```
````

**Indented Code Blocks:**

Indent lines with 4 spaces or 1 tab.

```markdown
    function example() {
        return true;
    }
```

## Blockquotes

Create quoted text blocks for emphasis or citations.

**Syntax:**

```markdown
> This is a blockquote.
> It can span multiple lines.
>
> And multiple paragraphs.
```

**Renders as:**

> This is a blockquote.
> It can span multiple lines.
>
> And multiple paragraphs.

## Horizontal Rules

Create visual separators using three or more dashes, asterisks, or underscores.

**Syntax:**

```markdown
---
---

---
```

**All render as:**

---

**Best Practices:**

- Add blank lines before and after
- Use consistently throughout content
- Don't overuse (can break up flow)

## Custom Alerts

Community Template supports special alert boxes for highlighting important information.

**Info Alert:**

```markdown
:::info
This is an informational message.
:::
```

**Renders as:**

![info-container](/img/docs/shadowstore-md-infoContainer.png)

**Sucess Alert:**

```markdown
:::success
This is a helpful tip or suggestion.
:::
```

**Renders as:**

![success-container](/img/docs/shadowstore-md-successContainer.png)

**Warning Alert:**

```markdown
:::warning
This is a warning or caution message.
:::
```

**Renders as:**

![warning-container](/img/docs/shadowstore-md-warningContainer.png)

**Danger Alert:**

```markdown
:::danger
This is a critical or error message.
:::
```

**Renders as:**

![danger-container](/img/docs/shadowstore-md-dangerContainer.png)

**Multi-line Alerts:**

```markdown
:::info
You can add custom titles to alerts!

- And include lists
- **Formatted text**
- `Code snippets`
- [Links](https://example.com)

All markdown works inside alerts.
:::
```

**Alert Best Practices:**

- Use sparingly for maximum impact
- Choose appropriate alert types
- Keep messages concise
- Use custom titles for clarity

## HTML Support

Community Template allows inline HTML for advanced formatting.

**Common HTML Elements:**

```html
<div class="custom-class">Custom styled content</div>
<span style="color: red;">Red text</span>
<details>
	<summary>Click to expand</summary>
	Hidden content revealed on click.
</details>
<kbd>Ctrl</kbd> + <kbd>C</kbd>
<mark>Highlighted text</mark>
<sub>Subscript</sub> and <sup>Superscript</sup>
```

**Available HTML Tags:**

- `<div>`, `<span>` - Containers
- `<br>` - Line breaks
- `<strong>`, `<em>` - Bold and italic
- `<details>`, `<summary>` - Collapsible content
- `<kbd>` - Keyboard keys
- `<mark>` - Highlighted text
- `<sub>`, `<sup>` - Subscript/superscript
- `<abbr>` - Abbreviations
- `<cite>` - Citations

**HTML Safety:**

:::warning
Not all HTML is allowed for security reasons. Script tags, iframes, and potentially dangerous elements are sanitized.
:::

## Escaping Characters

Use backslashes to display markdown syntax literally.

**Syntax:**

```markdown
\*This text is not italic\*
\# This is not a heading
\[This is not a link](https://example.com)
\`This is not code\`
```

**Renders as:**

\*This text is not italic\*
\# This is not a heading
\[This is not a link](https://example.com)
\`This is not code\`

**Characters that can be escaped:**

```markdown
\ backslash
` backtick

- asterisk
  \_ underscore
  {} curly braces
  [] square brackets
  () parentheses

# hash symbol

- plus sign

* minus sign (hyphen)
  . dot
  ! exclamation mark
```

## Markdown Best Practices

### Structure

- Use one H1 heading per page
- Maintain heading hierarchy (H1 → H2 → H3)
- Use blank lines to separate sections
- Keep paragraphs focused and concise

### Formatting

- Be consistent with emphasis syntax
- Don't overuse bold and italic
- Use code formatting for technical terms
- Prefer markdown over HTML when possible

### Links and Images

- Use descriptive link text
- Always include image alt text
- Test all URLs before publishing
- Use HTTPS for external resources
- Optimize images for web delivery

### Lists and Tables

- Keep lists simple and scannable
- Use appropriate list types (ordered vs unordered)
- Limit table columns for mobile readability
- Align table columns logically

### Code

- Specify language for code blocks
- Use inline code for commands and functions
- Keep code examples short and focused
- Add comments to complex code

### Accessibility

- Always include alt text for images
- Use semantic heading levels
- Write descriptive link text
- Test content with screen readers
- Ensure sufficient color contrast

### Performance

- Optimize image file sizes
- Use CDN for images when possible
- Avoid embedding large media files
- Test page load times after publishing

## Common Markdown Mistakes

### Missing Blank Lines

**Incorrect:**

```markdown
# Heading

This paragraph won't render correctly.
```

**Correct:**

```markdown
# Heading

This paragraph renders correctly.
```

### Incorrect List Indentation

**Incorrect:**

```markdown
- Item
- Nested item (only 1 space)
```

**Correct:**

```markdown
- Item
  - Nested item (2-4 spaces)
```

### Broken Links

**Incorrect:**

```markdown
[Link](example.com)
```

**Correct:**

```markdown
[Link](https://example.com)
```

### Unescaped Special Characters

**Incorrect:**

```markdown
Price: $100 (10% off)
```

**Correct:**

```markdown
Price: \$100 \(10\% off\)
```

### Unclosed Code Blocks

**Incorrect:**

````markdown
```javascript
code here
```
````

**Correct:**

````markdown
```javascript
code here
```
````

## Additional Resources

<details>
  <summary>Markdown Examples (From Community Template)</summary>

[![md-examples](/img/docs/shadowstore-md-examples.png)](/img/docs/shadowstore-md-examples.png)

</details>

_Not all of these will apply 1:1 because we have some custom stuff; however, they are still good to reference._

**Learn More About Markdown:**

- [Markdown Guide](https://www.markdownguide.org/)
- [CommonMark Specification](https://commonmark.org/)
- [GitHub Flavored Markdown](https://github.github.com/gfm/)

**Online Markdown Tools:**

- [StackEdit](https://stackedit.io/) - In-browser markdown editor
- [Dillinger](https://dillinger.io/) - Online markdown preview
- [Markdown Tables Generator](https://www.tablesgenerator.com/markdown_tables)

**Need Help?**

Join the [Shadow Development Discord](https://discord.gg/shadowdevs) for support and tips on using markdown effectively in Community Template.
