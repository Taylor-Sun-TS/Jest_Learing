// __tests__/displayUser-test.js
'use strict';

const $ = require('jquery');

jest.mock('../fetchCurrentUser');
// const { fetchCurrentUser } = require('../fetchCurrentUser');
import { fetchCurrentUser } from '../fetchCurrentUser.js';
// fetchCurrentUser.mockImplementation((callback) => {
//   callback({
//    fullName: 'Johnny Cash',
//    loggedIn: true,
//  });

describe("test display user module", () => {
   beforeAll(() => {
    document.body.innerHTML =
      '<div>' +
      '  <span id="username" />' +
      '  <button id="button" />' +
      '</div>';

    // This module has a side-effect
    require('../displayUser');
  });

  afterEach(() => {

  });

  test('displays a logged in user after a click', () => {
    fetchCurrentUser.mockImplementationOnce((callback) => {
      callback({
       fullName: 'Johnny Cash',
       loggedIn: true,
     });
   });

    // Use jquery to emulate a click on our button
    $('#button').click();

    // Assert that the fetchCurrentUser function was called, and that the
    // #username span's inner text was updated as we'd expect it to.
    // expect(fetchData.fetchCurrentUser).toBeCalled();
    expect(fetchCurrentUser).toBeCalled();
    expect($('#username').text()).toEqual('Johnny Cash - Logged In');
  });

});
