import React, {Component, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const axios = require('axios');

const base_url = 'https://jsonplaceholder.typicode.com';
const base_url1 = 'https://reactjs-test-a2133.firebaseio.com/';

export const getUsers = (id) => {
    return axios.get(base_url + '/users/' + id)
}


const getPosts = () => {
	return axios.get(base_url1 + '/posts')
}

// const deletePosts = (id) => {
// 	return axios.delete(base_url + 'posts/' + id)
// }


//export const getUSers1 = getUSers();
//export const deletePost = deletePosts();
