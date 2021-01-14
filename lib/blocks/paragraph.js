import * as React from 'react';
var Paragraph = function (props) { return React.createElement("p", { id: props.contentUniqueId, dangerouslySetInnerHTML: { __html: props.data.text } }); };
export default Paragraph;
