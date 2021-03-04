import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CommentList from 'components/CommentList';

let wrapped;
const initialState = {
    comments: ['Test Comment1', 'Test Comment2', 'Test Comment3', 'Test Comment4']
};

beforeEach(() => {
    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    );
});

it('shows li for each comment', () => {
    expect(wrapped.find('li')).toHaveLength(initialState.comments.length);
});

it('shows the text for each comment', () => {
    wrapped.find('li').forEach(comment => {
        expect(initialState.comments).toContain(comment.text());
    });
});
