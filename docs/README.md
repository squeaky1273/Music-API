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

```js
[
    {
        name: 'Ariana Grande',
        active: 'yes',
        id: 123456789
    }
]
```

### Get a Single Artist

```js
{
    name: 'Ariana Grande',
    active: 'yes',
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