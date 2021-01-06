import * as React from 'react';
import { HeaderBlock } from './contentBlocks'

const Header: React.FC<HeaderBlock> = props => {
    const { text } = props.data;
    // Allow h1, h2, h3, h4, h5, h6
    let level = Math.min(Math.max(props.data.level, 1), 6);

    const tagProps = {
        id: props.contentUniqueId,
        dangerouslySetInnerHTML: { __html: text }
    };
    const tagName = `h${level}`;
    return React.createElement(tagName, tagProps);
};

export default Header;
