import * as React from 'react';
import { DelimiterBlock } from './contentBlocks';

const Delimiter: React.FC<DelimiterBlock> = props => <hr id={props.contentUniqueId} />;

export default Delimiter;
