import * as React from 'react';
import { ListBlock, ListStyle } from './contentBlocks'

const List: React.FC<ListBlock> = props => {
    const { style, items } = props.data;

    // An index should normally not be used as key but list items are not subject to change anyway
    // so in this case it's good enough
    const listItemsAsHTML = items.map((itemHtml, index) =>
        <li key={index} dangerouslySetInnerHTML={{ __html: itemHtml }} />)
    return style === ListStyle.Ordered ? <ol>{listItemsAsHTML}</ol> : <ul>{listItemsAsHTML}</ul>
};

export default List;
