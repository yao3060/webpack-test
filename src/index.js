'use strict';
import _ from 'lodash'
import polyfill from 'babel-polyfill'
// import greet from './js/greeting'

import bootstrap from 'bootstrap/scss/bootstrap.scss'
import css from './css/index.scss';

(function () {

    let comments = {
        'post_1' : [
            {
                comment_id:1,
                post:1,
                author: 'yyy',
                content: 'adada'
            }
        ],
        'post_2' : [
            {
                comment_id:10,
                post:2,
                author: 'yyy',
                content: 'adada'
            }
        ]
    }

    let newComment = {
        'post_1' : [
            {
                comment_id:1,
                post:1,
                author: 'yyy',
                content: 'adada'
            },
            {
                comment_id:2,
                post:1,
                author: 'yyy2',
                content: 'adada2'
            },
            {
                comment_id:3,
                post:1,
                author: 'yyy2',
                content: 'adada2'
            }
        ]
    }


    console.log( comments );

    console.log("adadad")

    // Object.assign(comments, newComment);
    //
    // console.log( comments );

})();
