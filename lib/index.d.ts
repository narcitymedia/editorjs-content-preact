import * as React from 'react';
import { BlockType, ContentBlock, Header, Paragraph, Delimiter } from './blocks';
/**
 * Attemps to map an EditorJS block to a React component
 * @param block The block for which to create a React component
 */
declare const getReactComponentForBlock: (block: ContentBlock) => React.FC<any> | null;
export { getReactComponentForBlock, BlockType, Header, Paragraph, Delimiter };
