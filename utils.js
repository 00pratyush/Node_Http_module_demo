// const randomNumber = () => {
//     return Math.floor((Math.random() * 100) +1);
// }

// function celciusToFarhenheit (celcius) {
//     return (celcius*9)/5 + 32;
// }

// module.exports = randomNumber
// module.exports = { randomNumber, celciusToFarhenheit}

const post = [
    {   id: 1, title: 'Post 1'  },
    {   id: 2, title: 'Post 2'  }
]

export const getPost = () => post;

