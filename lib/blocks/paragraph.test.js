var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import * as renderer from 'react-test-renderer';
import Paragraph from './paragraph';
import { BlockType } from './contentBlocks';
describe('Paragraph', function () {
    it('should render the Paragraph with no markup', function () {
        var args = {
            contentUniqueId: 'XXX-XXX',
            type: BlockType.RawHTML,
            data: {
                text: 'No markup paragraph',
            },
        };
        var tree = renderer.create(React.createElement(Paragraph, __assign({}, args))).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render the Paragraph with markup', function () {
        var args = {
            contentUniqueId: 'XXX-XXX',
            type: BlockType.RawHTML,
            data: {
                text: "No <b>markup</b> paragraph <a href='https://www.google.ca'>Google Link</a>",
            },
        };
        var tree = renderer.create(React.createElement(Paragraph, __assign({}, args))).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
