// // Copyright 2004-present Facebook. All Rights Reserved.

// const $ = require('jquery');

// function parseJSON(user) {
//   return {
//     fullName: user.firstName + ' ' + user.lastName,
//     loggedIn: true,
//   };
// }

// function fetchCurrentUser(callback) {
//   return $.ajax({
//     type: 'GET',
//     url: 'http://example.com/currentUser',
//     success: user => callback(parseJSON(user)),
//   });
// }

const fetchCurrentUser = function(callback) {
    return new Promise((resolve) => {
        setTimeout(function() {
            const user = {
                fullName: "xxx",
                loggedIn: false,
            };

            callback(user);
            resolve(user);
        });
    });
};

export {
    fetchCurrentUser
}
