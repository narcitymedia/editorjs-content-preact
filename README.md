# EditorJS Content React

Module to parse content blocks from EditorJS format to React components

# Usage

```typescript
import { getReactComponentForBlock } from 'editorjs-content-react';

const contentBlock = {
    type: "header",
    // Can be any unique string, format is not relevant
    contentUniqueId: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    data: {
        level: 3,
        text: "Heading"
    }
};

const BaseBlockComponent = getReactComponentForBlock(contentBlock);

const Content: React.FC<ContentBlock> = props => (
    <BaseBlockContent {...props} />
);

```

# Run the tests

```shell
    npm test
```

# Run Storybook

```shell
    cd storybook/component-showcase/
    npm run storybook
```