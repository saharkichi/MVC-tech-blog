const { Post } = require('../models');

const postData = [
  {
    "title": "How many hours should I spend coding to get better",
    "description": "I work a lot so it is hard to spend hours on end coding and practing. How much do you think?",
    "user_id": "1",
    "post_date": "2022-06-28",
  },
  {
    "title": "What kind of developer do you want to be",
    "description": "I personally want to be a front-end developer, back end seems too scary. What do you guys think?",
    "user_id": "2",
    "post_date": "2022-06-29",
  },
  {
    "title": "Where did you guys learn how to code?",
    "description": "I am essentially self-taught, but Id like some sort of certificate to make it more legit.What are your recommendations",
    "user_id": "3",
    "post_date": "2022-06-27",
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
