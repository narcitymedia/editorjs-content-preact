import React from 'react';
import * as renderer from 'react-test-renderer';
import { BlockType } from '..';
import Delimiter from './delimiter';
describe('Delimeter', function () {
    it('should render the delimeter', function () {
        var tree = renderer
            .create(React.createElement(Delimiter, { type: BlockType.Delimiter, data: null, contentUniqueId: "XXX-XXX" }))
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
