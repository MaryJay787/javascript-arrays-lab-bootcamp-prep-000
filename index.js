var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPreAppendKitten(name) {
  return kittens.unshift(name);
}