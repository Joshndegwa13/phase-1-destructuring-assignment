const farmAnimals = 'cow horse sheep pig chicken';

// String: uses destructuring to declare five animal sounds
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// String: uses destructuring to declare the four traditional animal names
const [bessie, , dolly, babe, little] = farmAnimals.split(' ');

// String: uses destructuring to declare the three traditional animal colors
const [blackAndWhite, , black, pink] = farmAnimals.split(' ');

// Arrays

// Array: uses destructuring to declare the seven traditional rainbow color variables using the color names
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// Array: uses destructuring to declare six rainbow color variables using initials
const [r, o, y, g, b, , v] = colors;

// Array: uses destructuring to declare Indigo using indg
const [, , , , , indg] = colors;

// Objects

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Object: uses destructuring to assign all appropriate variables using the keys as the variable names
const { muppetName, color, song, job, partner } = muppet;

// Object: uses destructuring to assign songs 2 and 4, and Kermit's job and partner
const {
  album: {
    theMuppetMovie: { song2, song4 }
  },
  nestedJob,
  nestedPartner
} = nestedMuppet;

// Testing outputs to verify
console.log(moo, neigh, baa, oink, cluck);
console.log(bessie, dolly, babe, little);
console.log(blackAndWhite, black, pink);
console.log(red, orange, yellow, green, blue, indigo, violet);
console.log(r, o, y, g, b, v);
console.log(indg);
console.log(muppetName, color, song, job, partner);
console.log(song2, song4, nestedJob, nestedPartner);
