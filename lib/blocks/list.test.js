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
import List from './list';
import { ListStyle, BlockType } from './contentBlocks';
describe('List', function () {
    describe('unordered lists', function () {
        it('should render an unordered list with no markup', function () {
            var args = {
                data: {
                    items: ['Butter', 'Chicken', 'Eggs'],
                    style: ListStyle.Unordered,
                },
                type: BlockType.List,
                contentUniqueId: 'XXX-XXX',
            };
            var tree = renderer.create(React.createElement(List, __assign({}, args))).toJSON();
            expect(tree).toMatchSnapshot();
        });
        it('should render an unordered list with markup', function () {
            var args = {
                data: {
                    items: ['<p>Butter<p>', '<i>Chicken</i>', "<a href='https://www.google.com'>Eggs</a>"],
                    style: ListStyle.Unordered,
                },
                type: BlockType.List,
                contentUniqueId: 'XXX-XXX',
            };
            var tree = renderer.create(React.createElement(List, __assign({}, args))).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
    describe('ordered lists', function () {
        it('should render an ordered list with no markup', function () {
            var args = {
                data: {
                    items: ['Butter', 'Chicken', 'Eggs'],
                    style: ListStyle.Ordered,
                },
                type: BlockType.List,
                contentUniqueId: 'XXX-XXX',
            };
            var tree = renderer.create(React.createElement(List, __assign({}, args))).toJSON();
            expect(tree).toMatchSnapshot();
        });
        it('should render an ordered list with markup', function () {
            var args = {
                data: {
                    items: ['<p>Butter<p>', '<i>Chicken</i>', "<a href='https://www.google.com'>Eggs</a>"],
                    style: ListStyle.Ordered,
                },
                type: BlockType.List,
                contentUniqueId: 'XXX-XXX',
            };
            var tree = renderer.create(React.createElement(List, __assign({}, args))).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
