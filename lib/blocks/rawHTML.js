import * as React from 'react';
var RawHTML = function (props) { return (React.createElement("div", { id: props.contentUniqueId, dangerouslySetInnerHTML: { __html: props.data.html } })); };
export default RawHTML;
