import axios from 'axios';

axios.defaults.baseURL = 'https://5b3110227ad3350014b4338d.mockapi.io/';

export function getUserData(url) {
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(({data}) => {
                resolve(data);
            })
            .catch(function (error) {
                reject(error);
            });
    })
}

export function getTimers(url) {
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(({data}) => {
                resolve(data);
            })
            .catch(function (error) {
                reject(error);
            });
    })
}