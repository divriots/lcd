```js script
import { theme } from '~/tailwind';
import '@divriots/dockit-core/tailwind-showcases';
import { html } from 'lit-html';
import '~/tailwind/src/styles.css';
```

# Opacity

```html:html
<dockit-tailwind-showcases
showcase-key="opacity"
component-class="shadow-xl h-24 w-24 rounded-sm bg-primary"
.theme=${theme}>
</dockit-tailwind-showcases>
```