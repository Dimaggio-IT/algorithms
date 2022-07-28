/**
 * Dimaggio
 */

"use strict";

// Projection
const id = (x) => x;

const projection = (meta) => (src) =>
  meta.reduce(
    (dest, [name, fn = id, field = name]) => (
      (dest[name] = fn(src[field])), dest
    ),
    {}
  );

// Render
const max = (items) => Math.max(...items);
// length of strings
// x["length"] => 15 or 6 or etc...
const maxProp = (key) => (items) => max(items.map((x) => x[key]));
const maxLength = maxProp("length");
const col = (name, data) => data.map((obj) => obj[name].toString());

const render = (meta) => (src) => {
  const keys = meta.map(([name]) => name);
  const maxWidth = keys.map((key) => maxLength(col(key, src)));
  const dest = src.map((obj) =>
    maxWidth.map((width, i) => obj[keys[i]].toString().padEnd(width + 4))
  );
  // console.log(dest);
  return dest.map((row) => row.join("")).join("\n");
};

// Metadata
const upper = (s) => s.toUpperCase();

const md = [["name", upper, "name"], ["voted"]];

const voted = [];

const hasAlreadyVoted = (searchPerson) => {
  let vote = voted.find((person) => person.name === searchPerson);

  if (vote) {
    return vote.voted;
  } else {
    return vote;
  }
};

/**
 * Vote check
 * @param {string} name Voter name
 */
const checkVoter = (name) => {
  const vote = hasAlreadyVoted(name);
  const newObj = {};

  if (!!vote) {
    console.log(name + " - kick them out!");
  } else {
    newObj.name = name;
    newObj.voted = true;
    voted.push(newObj);
    console.log(name + " - let them vote!");
  }
};

checkVoter("tom"); // let him vote!
checkVoter("hobbit"); // let him vote!
checkVoter("hobbit"); // kick them out! why dontcha?
checkVoter("lobachevsky"); // kick them out! why dontcha?

console.log("");
console.dir(voted, { depth: null, colors: true });
//console.log("voted: %j", voted); // преобразование в json объекта

// Usage projection
const proj = projection(md);
const data = voted.map(proj);
console.log("");
console.log(data);

// Pretty view (table 1)
console.log("");
console.log("Pretty view [console.table(data)]");
console.log("");
console.table(data);

// Pretty view (table 2)
console.log("");
console.log("Pretty view [render(md)]");
console.log("");
const renderer = render(md);
const res = renderer(data);
console.log("\n" + res + "\n");
