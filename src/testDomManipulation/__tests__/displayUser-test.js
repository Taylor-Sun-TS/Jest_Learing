// __tests__/displayUser-test.js
'use strict';

const $ = require('jquery');

const defaultUser = {
  fullName: 'test default',
  loggedIn: true,
};
jest.mock('../fetchCurrentUser');
// const { fetchCurrentUser } = require('../fetchCurrentUser');
import { fetchCurrentUser } from '../fetchCurrentUser.js';
fetchCurrentUser.mockImplementation((callback) => {
  callback(defaultUser);
});

describe("test display user module", () => {
   beforeAll(() => {
    document.body.innerHTML =
    `<div>
      <span id="username"></span>
      <button id="button"></button>
    </div>`;

    // This module has a side-effect
    require('../displayUser');
  });

  beforeEach(() => {
    fetchCurrentUser.mockClear();
  });

  test('test default function mockImplementation', () => {
    $('#button').click();

    expect(fetchCurrentUser).toBeCalled();
    expect($('#username').text()).toEqual(`${defaultUser.fullName} - Logged ${defaultUser.loggedIn ? 'In' : 'Out'}`);
  });

  test('displays a logged in user after a click', () => {
    const user = {
      fullName: 'test 1',
      loggedIn: true,
    };
    fetchCurrentUser.mockImplementationOnce(callback => {
      callback(user);
    });

    // Use jquery to emulate a click on our button
    $('#button').click();

    expect(fetchCurrentUser).toBeCalled();
    expect($('#username').text()).toEqual(`${user.fullName} - Logged ${user.loggedIn ? 'In' : 'Out'}`);
  });

  test('displays a logged out user after a click', () => {
    const user = {
      fullName: 'test 2',
      loggedIn: false,
    };

    fetchCurrentUser.mockImplementationOnce(function(callback) {
      callback(user);
    });

    $('#button').click();

    expect(fetchCurrentUser).toBeCalled();
    expect($('#username').text()).toEqual(`${user.fullName} - Logged ${user.loggedIn ? 'In' : 'Out'}`);
  });

});
