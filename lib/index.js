import { BlockType, Header, Paragraph, List, RawHTML, Delimiter } from './blocks';
/**
 * Attemps to map an EditorJS block to a React component
 * @param block The block for which to create a React component
 */
var getReactComponentForBlock = function (block) {
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
export { getReactComponentForBlock, BlockType, Header, Paragraph, Delimiter };
