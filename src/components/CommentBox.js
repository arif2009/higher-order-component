import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from 'redux/actions';
import requireAuth from 'components/requireAuth';

const CommentBox = (props) => {
    const [comment, setComment] = useState('');

    const handleChange = event => {
      setComment(event.target.value);
    };

    const handleSubmit = event => {
      event.preventDefault();
      props.saveComment(comment);
      setComment('');
    };

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea onChange={handleChange} value={comment} />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={props.fetchComments}>
          Fetch Comments
        </button>
      </div>
    );
}

export default connect(null, actions)(requireAuth(CommentBox));
