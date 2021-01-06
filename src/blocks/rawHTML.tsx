import * as React from 'react';

import { RawHTMLBlock } from './contentBlocks';

const RawHTML: React.FC<RawHTMLBlock> = props => (
    <div id={props.contentUniqueId} dangerouslySetInnerHTML={{ __html: props.data.html }} />
)

export default RawHTML;
