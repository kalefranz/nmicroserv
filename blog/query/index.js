const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

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


app.post('/events', (req, res) => {
  const { type, data } = req.body;
  
  let postId;

  switch (type) {
    case 'PostCreated':
      // save the post
      postId = data.id;
      const title = data.title;
      posts[postId] = {
        id: postId,
        title,
        comments: [],
      };
      break;
    case 'CommentCreated':
      // save the comment with the associated post
      const commentId = data.id;
      const content = data.content;
      postId = data.postId;

      const post = posts[postId];
      post.comments.push({
        id: commentId,
        content,
      });
      break;
    default:
      const msg = `Cannot handle event of type: ${type}`;
      console.error(msg);
      res.statusCode(400).send(msg);
  };

  res.send({});

});


app.get('/posts', (req, res) => {
  res.send(posts);
});


app.listen(4002, () => {
  console.log('listening on 4002');
});
