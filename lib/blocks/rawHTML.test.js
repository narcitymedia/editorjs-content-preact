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
import RawHTML from './rawHTML';
import { BlockType } from './contentBlocks';
describe('RawHTML', function () {
    it('should render the RawHTML', function () {
        var args = {
            contentUniqueId: 'XXX-XXX',
            type: BlockType.RawHTML,
            data: {
                html: '<p>Hello World</p>',
            },
        };
        var tree = renderer.create(React.createElement(RawHTML, __assign({}, args))).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
