import * as React from 'react';

import { ParagraphBlock } from './contentBlocks';

const Paragraph: React.FC<ParagraphBlock> = props => <p id={props.contentUniqueId} dangerouslySetInnerHTML={{ __html: props.data.text }} />

export default Paragraph;
