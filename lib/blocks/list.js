import * as React from 'react';
import { ListStyle } from './contentBlocks';
var List = function (props) {
    var _a = props.data, style = _a.style, items = _a.items;
    // An index should normally not be used as key but list items are not subject to change anyway
    // so in this case it's good enough
    var listItemsAsHTML = items.map(function (itemHtml, index) {
        return React.createElement("li", { key: index, dangerouslySetInnerHTML: { __html: itemHtml } });
    });
    return style === ListStyle.Ordered ? React.createElement("ol", null, listItemsAsHTML) : React.createElement("ul", null, listItemsAsHTML);
};
export default List;
