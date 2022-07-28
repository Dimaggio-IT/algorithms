// You pass an array in, and it gets converted to a set.
let statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);

const stations = {};
stations.kone = new Set(["id", "nv", "ut"]);
stations.ktwo = new Set(["wa", "id", "mt"]);
stations.kthree = new Set(["or", "nv", "ca"]);
stations.kfour = new Set(["nv", "ut"]);
stations.kfive = new Set(["ca", "az"]);

// stop т.к. если этого неделать, то возможен бесконечный цикл
// если statesNeeded не очистилась максимально после кол-ва stations.size
const finalStations = new Set();
let stop = 0;
while (statesNeeded.size && stop < 5) {
  let bestStation = null;
  let statesCovered = new Set();
  Object.keys(stations).forEach((station) => {
    const states = stations[station];
    const covered = new Set([...statesNeeded].filter((x) => states.has(x)));
    if (covered.size > statesCovered.size) {
      bestStation = station;
      statesCovered = covered;
    }
  });
  statesNeeded = new Set(
    [...statesNeeded].filter((x) => !statesCovered.has(x))
  );
  if (bestStation) finalStations.add(bestStation);
  stop += 1;
}

console.log(finalStations); // Set { 'kone', 'ktwo', 'kthree', 'kfive' }
//console.log(stop);
