import React from 'react';

const Quote = (props) => {

    const {quote,author,stopTimer,startTimer} = props;

    return (
        <div className="quote-body" onMouseEnter={stopTimer} onMouseLeave={startTimer} onMouseUp={stopTimer} onMouseDown={startTimer}>
            <h1>"{quote}"</h1>
            <span>~ {author}</span>
        </div>
    );

}

export default Quote;