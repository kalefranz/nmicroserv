const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};
// posts === {
//   'j123': {
//     id: 'j123',
//     title: 'post title',
//     comments: [
//       { id: 'c567', content: 'comment1' }
//     ]
//   }
// }


const handleEvent = (type, data) => {
  if (type === 'PostCreated') {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };

  } else if (type === 'CommentCreated') {
    const { id, content, postId, status } = data;
    const post = posts[postId];
    posts.comments.push({ id, content, status });

  } else if (type === 'CommentUpdated' || type === 'CommentModerated') {
    const { id, content, postId, status } = data;
    const post = posts[postId];
    const comment = post.comments.find(comment => comment.id === id);

    comment.status = status;
    comment.content = content;

  } else {
    console.log('Unknown Event:', type, data);
  };
};


app.get('/posts', (req, res) => {
  res.send(posts);
});


app.post("/events", (req, res) => {
  const { type, data } = req.body;
  handleEvent(type, data);
  res.send({});
});


app.listen(4002, async () => {
  console.log('Query listening on 4002');

  try {
    const res = await axios.get('http://event-bus-srv:4005/events');

    for (let event of res.data) {
      console.log("Processing event:", event.type);
      handleEvent(event.type, event.data);
    }
  } catch (error) {
    console.log(error.message);
  };
});
