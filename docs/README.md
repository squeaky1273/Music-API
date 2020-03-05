# 

## Music API
### Description

A music API application that matches the name of songs to the artist that they belong to.

### Installation

First run:
```js
npm init
```

Then run:
```js
npm start
```

### Built With

* Javascript
* Mongoose
* Node.js

## Using The API
### Get About Page

```js
{
    message: ''
}
```


### Get All Artists

Example Output:
```js
[
    {
        name: 'Ariana Grande',
        active: 'yes',
        songs: 'Problem', 'Thank you, next',
        id: 123456789
    };
    {
        name: 'Whitney Houston',
        active: 'no',
        songs: 'I Wanna Dance with Somebody', 'Greatest Love of All',
        id: 124356789
    }
]
```

### Get a Single Artist

Example Output:
```js
{
    name: 'Ariana Grande',
    active: 'yes',
    songs: 'Problem', 'Thank you, next',
    id: 123456789
}
```

### Create Artist

```js
name: string,
active: string
```

### Update Artist

TODO

### Delete Artist

TODO

### Create Song

```js
name: string,
active: string
```

### Update Song

TODO

### Delete Song

TODO

### Get All Songs

Example Output:
```js
[
    {
        title: 'Thank you, next',
        released: 'November 3, 2018',
        album: 'Thank you, next',
        artist: 'Ariana Grande'
    };
    {
        title: 'I Wanna Dance With Somebody',
        released: 'May 2, 1987',
        album: 'Whitney',
        artist: 'Whitney Houstin'
    }
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
```

## Authentication
### Register

```js
username: String,
password: Password
```

### Log in

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