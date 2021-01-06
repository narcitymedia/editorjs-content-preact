import { BlockType } from 'editorjs-content-react/src/blocks';
import * as React from 'react';
import { ParagraphBlock } from './contentBlocks';

const Delimiter: React.FC<ParagraphBlock> = props => <hr id={props.contentUniqueId} />;

export default Delimiter;
