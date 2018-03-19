const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3004'

const headers = {
    'Accept': 'application/json'
};

export const doAdd = (numbers) =>
    fetch(`${api}/calc/doAdd`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(numbers)
    })
    .then((res) => res.json())
        .then((data) => {return data;})
        .catch(error => {
        console.log("This is error");
        return error;
    });

export const doSub = (numbers) =>
    fetch(`${api}/calc/doSub`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(numbers)
    })
        .then((res) => res.json())
        .then((data) => {return data;})
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const doMultiply = (numbers) =>
    fetch(`${api}/calc/doMultiply`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(numbers)
    })
        .then((res) => res.json())
        .then((data) => {return data;})
        .catch(error => {
            console.log("This is error");
            return error;
        });


export const doDivide = (numbers) =>
    fetch(`${api}/calc/doDivide`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(numbers)
    })
        .then((res) => res.json())
        .then((data) => {return data;})
        .catch(error => {
            console.log("This is error");
            return error;
        });