# Music API

## Description

A music API application that matches the name of songs to the artist that they belong to.

## Installation

First run:
```js
npm init
```

Then run:
```js
npm start
```

## Built With

* Javascript
* Mongoose
* Node.js

## Using The API
### Get All Artists

Example Output:
```js
[
    {
        name: 'Ariana Grande',
        active: 'yes',
        associated_genre: 'pop',
        songs: 'Problem', 'Thank you, next',
        id: we4245rdffer3fg35r
    };
    {
        name: 'Whitney Houston',
        active: 'no',
        associated_genre: 'r&b',
        songs: 'I Wanna Dance with Somebody', 'Greatest Love of All',
        id: er3r4sdfgj5ks8fn5g
    }
]
```

### Get a Single Artist

Example Output:
```js
{
    name: 'Ariana Grande',
    active: 'yes',
    associated_genre: 'pop',
    songs: 'Problem', 'Thank you, next',
    id: we4245rdffer3fg35r
}
```

### Create Artist

Send a POST request with the following info:

```js
name: string,
active: string,
associated_genre: string
```

### Update Artist

Send a PUT request with the following info:

```js
id: string
```

### Delete Artist

Send a DELETE request with the following info:

```js
id: string,
```

<!-- ### Get All Songs

Example Output:
```js
Ariana Grande
[
    {
        title: 'Thank you, next',
        released: 'November 3, 2018',
        album: 'Thank you, next'
    };
]
```

### Get a Single Song

Example Output:
```js
{
    title: 'Thank you, next',
    released: 'November 3, 2018',
    album: 'Thank you, next',
    artist: 'Ariana Grande'
};
``` -->


<!-- ### Create Song

```js
name: string,
released: string,
album: string
```

### Update Song

Send a PUT request with the following info:

```js
id: string
```

### Delete Song

Send a DELETE request with the following info:

```js
id: string,
``` -->

## Authentication
### Sign Up

Send a POST request to http://localhost:3000/sign-up with the following info:

```js
username: String,
password: Password
```

### Log in

To log in, send a POST request to http://localhost:3000/login

Use these headers with the data type:

```js
username: String,
password: Password
```

### Log out

Send a GET request to http://localhost:3000/logout

## Formalities
### Author(s)

Padyn Riddell - <i>Initial work</i> - Make School student and BEW concentration

### Acknowledgements

* God - Thank you for giving the ability to have opportunties to build code and go to school.
* Mom & family - Thank you for beliving in me and being encouraging.
* Meredith - Thank you for helping me with any issues that I had with implementing code.