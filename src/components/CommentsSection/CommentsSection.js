import React, { Component } from 'react';
import RideContext from '../../context/RideContext';
import CommentApiService from '../../services/RidesService/comment-api';
import Comment from '../CommentsSection/Comment';
import mydata from './samplecomment.json'

export default class CommentSection extends Component {

    state = {
        comments: [],
        post: {}
    }

    static contextType = RideContext;

    componentDidMount() {
        this.getComments();
    }

    getComments() {
        // CommentApiService.getComments()
        //     .then(res => res.json())
        //     .then(comments => {
        //         this.context.setRides(comments)
        //     })
        console.log(mydata);

    }

    render() {
        this.context.comments.map((comment, i) => <Comment key={i} {...comment} />)
        return (
            <section>
                {/* <span>ALL COMMENTS({})</span> */}
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </section>
        )
    }
}