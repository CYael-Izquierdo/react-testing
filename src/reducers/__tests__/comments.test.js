import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('handles actions of type SAVE_COMMENT', () => {
    const testComment = 'New Comment';

    const action = {
        type: SAVE_COMMENT,
        payload: testComment
    };
    const newState = commentsReducer([], action);

    expect(newState).toEqual([testComment]);
});

it('handles action with unknow type', () => {
    const newState = commentsReducer([], {});
    expect(newState).toEqual([]);
});
