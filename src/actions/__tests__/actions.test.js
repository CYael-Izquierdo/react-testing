import { savecomment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

describe('saveComment', () => {
    it('has the correct type', () => {
        const action = savecomment();
        expect(action.type).toEqual(SAVE_COMMENT);
    });

    it('has the correct payload', () => {
        const testComment = 'New comment';
        const action = savecomment(testComment);
        expect(action.payload).toEqual(testComment);
    });
});
