"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'http://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    const todo = response.data;

    const ID = todo.ID;
    const title = todo.Title;
    const finished = todo.finished;

    console.log(`
        The Todo with ID: ${ID}
        Has a title of: ${title}
        Is it finished? ${finished}
    `);
});
