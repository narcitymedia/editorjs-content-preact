import React from 'react';
import * as renderer from 'react-test-renderer';
import { BlockType } from '..';
import Header from './header';
describe('Header', function () {
    it('should render the 0 level heading as h1', function () {
        var args = {
            text: 'Heading 1',
            level: 0,
        };
        var tree = renderer.create(React.createElement(Header, { type: BlockType.Delimiter, data: args, contentUniqueId: "XXX-XXX" })).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render the 7 level header as h6', function () {
        var args = {
            text: 'Heading 6',
            level: 7,
        };
        var tree = renderer.create(React.createElement(Header, { type: BlockType.Delimiter, data: args, contentUniqueId: "XXX-XXX" })).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render the 1 level heading as h1', function () {
        var args = {
            text: 'Heading 1',
            level: 1,
        };
        var tree = renderer.create(React.createElement(Header, { type: BlockType.Delimiter, data: args, contentUniqueId: "XXX-XXX" })).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render the 2 level heading as h2', function () {
        var args = {
            text: 'Heading 2',
            level: 2,
        };
        var tree = renderer.create(React.createElement(Header, { type: BlockType.Delimiter, data: args, contentUniqueId: "XXX-XXX" })).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
