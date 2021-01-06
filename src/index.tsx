import * as React from 'react';
import {
    BlockType, ContentBlock,
    Header, Paragraph, Delimiter,
    ParagraphBlock
} from './blocks';

/**
 * Attemps to map an EditorJS block to a React component
 * @param block The block for which to create a React component
 */
const getReactComponentForBlock = (block: ContentBlock): React.FC<any> | null => {
    console.log('DETERMINING BLOCK TYPE', block);

    switch (block.type) {
        case BlockType.Paragraph: {
            return Paragraph;
        }
        // case BlockType.Header: {
        //     const { level, text } = contentBlock.data;
        //     const TagName = `h${level}`;
        //     return (<TagName id={contentBlock.contentUniqueId} dangerouslySetInnerHTML={{ __html: text }}></TagName>)
        // }
        // case BlockType.List: {
        //     const { style, items } = contentBlock.data;
        //     const listItemsAsHTML = items.map((itemHtml, index) =>
        //         <li key={index} dangerouslySetInnerHTML={{ __html: itemHtml }} />)
        //     return style === LIST_STYLES.Ordered ? <ol>{listItemsAsHTML}</ol> : <ul>{listItemsAsHTML}</ul>
        // }
        // case BlockType.Delimiter: {
        //     return React.createElement(Delimiter);
        // }
        // case BlockType.RawHTML: {
        //     return <div id={contentBlock.contentUniqueId} dangerouslySetInnerHTML={{ __html: contentBlock.data.html }} />;
        // }
    }

    return null;
};

export {
    getReactComponentForBlock,
    BlockType,
    Header, Paragraph, Delimiter
};
