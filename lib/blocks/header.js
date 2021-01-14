import * as React from 'react';
var Header = function (props) {
    var text = props.data.text;
    // Allow h1, h2, h3, h4, h5, h6
    var level = Math.min(Math.max(props.data.level, 1), 6);
    var tagProps = {
        id: props.contentUniqueId,
        dangerouslySetInnerHTML: { __html: text }
    };
    var tagName = "h" + level;
    return React.createElement(tagName, tagProps);
};
export default Header;
