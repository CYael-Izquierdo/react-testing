import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    );
});

afterEach(() => {
    wrapped.unmount();
});

it('has a text area and a button', () => {
    expect(wrapped.find('textarea')).toHaveLength(1);
    expect(wrapped.find('button')).toHaveLength(1);
});

describe('the text area', () => {
    const stringTest = 'this is a test comment'
    beforeEach(() => {
        // simulate the event
        wrapped.find('textarea').simulate('change', {
            target: { value: stringTest }
        });
        // to re-render the component and be sure that the text area is updated
        wrapped.update();
    })

    it('has a text area that user can type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual(stringTest);
    });

    it('deletes text area when form is submitted', () => {
        // Simulate the event to click on submit button
        wrapped.find('form').simulate('submit');
        // to re-render the component and be sure that the text area is updated
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
});
