import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from 'actions';

const CommentBox = () => {
    const dispatch = useDispatch();
    const [comment, setComment] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(actions.savecomment(comment));
        setComment('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <h4>Add a Comment</h4>
            <textarea
                value={comment}
                onChange={e => setComment(e.target.value)}
            />
            <div>
                <button>Submit Comment</button>
            </div>
        </form>
    );
};

export default CommentBox;
