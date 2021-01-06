import * as React from 'react';
import {
    BlockType, ContentBlock,
    Header, Paragraph, List, RawHTML, Delimiter,
    ParagraphBlock
} from './blocks';

/**
 * Attemps to map an EditorJS block to a React component
 * @param block The block for which to create a React component
 */
const getReactComponentForBlock = (block: ContentBlock): React.FC<any> | null => {
    switch (block.type) {
        case BlockType.Paragraph: {
            return Paragraph;
        }
        case BlockType.Header: {
            return Header;
        }
        case BlockType.List: {
            return List;
        }
        case BlockType.Delimiter: {
            return Delimiter;
        }
        case BlockType.RawHTML: {
            return RawHTML;
        }
    }

    return null;
};

export {
    getReactComponentForBlock,
    BlockType,
    Header, Paragraph, Delimiter
};
