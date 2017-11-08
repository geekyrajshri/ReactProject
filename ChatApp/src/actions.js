import { createAction } from 'redux-action';

export const login = createAction('login');
export const logout = createAction('logout');

export const addUser = createAction('add user');
export const removeUser = createAction('remove user');

export const newMessage = createAction('new message');
export const sendMessage = createAction('send message');
