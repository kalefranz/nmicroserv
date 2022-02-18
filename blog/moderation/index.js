const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');


const app = express();
app.use(bodyParser.json());

// listens for: [CommentCreated]
// publishes: [CommentModerated]


app.post('/events', async (req, res) => {
  const { type, data } = req.body;
  console.log('ReceivedEvent', type);
  if (type === 'CommentCreated') {
    const { id, content, postId } = data;
    // moderate
    // publish
    await axios.post(`http://localhost:4005/posts/${postId}/comments`, {

    });
  };

});


app.listen(4003, () => {
  console.log('Moderation listening on 4003');
});
