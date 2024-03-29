import React from "react";

/**
 * Component to add extra feedback tips
 *
 */
const Feedback = () => {
  return (
    <div className='feedback-comment'>
      <div className='feedback-comment__header'>
        <h4 className='feedback-comment__header__title'>
          Anything to add? (Optional)
        </h4>
        <div className='feedback-comment__header__tips'>
          {" "}
          Extra feedback helps
        </div>
      </div>
      <textarea
        placeholder='Express yourself freely and safely. This will always remain anonymous.'
        className='feedback-comment__text-field'
      ></textarea>
    </div>
  );
};

export default Feedback;
