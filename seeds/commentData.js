const { Comment } = require('../models');

const commentData = [
  {
    "response": "Try to do at least 15 hours a week",
    "user_id": "1",
    "post_id": "1",
    "post_date": "2022-06-28",
    "thumbs_up": "5"
  },
  {
    "response": "Depends on the person, but try to spend all your time outside of work practicing and practicing",
    "user_id": "1",
    "post_id": "1",
    "post_date": "2022-06-28",
    "thumbs_up": "1"
  },
  {
    "response": "Who knows",
    "user_id": "1",
    "post_id": "1",
    "post_date": "2022-06-29",
    "thumbs_up": "0"
  },
  {
    "response": "I agree, front-end only",
    "user_id": "2",
    "post_id": "2",
    "post_date": "2022-06-28",
    "thumbs_up": "10"
  },
  {
    "response": "Work hard and you can become whatever you want! Being a full stack dev can be your future!",
    "user_id": "2",
    "post_id": "2",
    "post_date": "2022-06-29",
    "thumbs_up": "2"
  },
  {
    "response": "I want to know the answer to this question as well.",
    "user_id": "2",
    "post_id": "2",
    "post_date": "2022-06-29",
    "thumbs_up": "0"
  },
  {
    "response": "Good question",
    "user_id": "2",
    "post_id": "3",
    "post_date": "2022-06-28",
    "thumbs_up": "0"
  },
  {
    "response": "I did a bootcamp but honestly it doesnt really matter as long as you know what to do and can prove it when asked upon.",
    "user_id": "3",
    "post_id": "3",
    "post_date": "2022-06-28",
    "thumbs_up": "8"
  },
  {
    "response": "I have a degree in computer science! Loved it and totally recommend",
    "user_id": "3",
    "post_id": "3",
    "post_date": "2022-06-28",
    "thumbs_up": "2"
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
