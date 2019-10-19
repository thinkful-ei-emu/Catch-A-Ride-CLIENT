import React from 'react'

export default function Comment(comment) {
    return (
        <div className="comment">
            <span>Admin</span><p>Jun 14, 2019 @ 2:35pm</p>
            {/* <p>{comment.text}</p> */}
            <p>New Comment 1</p>
            <button>REPLY</button>
            {/* <span>REPLIES {comment.replies.count}</span> */}
            <span>`REPLIES (3)`</span>
        </div>
    )
}
