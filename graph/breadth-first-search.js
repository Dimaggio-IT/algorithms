/**
 *
 * Dimaggio
 *
 * FIXME: Поиск в ширину
 *
 * является жадным алгоритмом
 * т.к. не просчитывает весь граф(используя все варианты путей) сразу определив продавец ли он
 * а проходит постепенно по вершинам и если это не продавец добавляет к анализу вершины соседей
 * останавливается если находит продавца манго
 *
 */

const graph = {};
graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];

const searched = [];

function personIsSeller(name) {
  const flagSeller = name.slice(-1);
  return flagSeller === "m" ? true : false;
}

function search(name) {
  let search_queue = [];
  search_queue = search_queue.concat(graph[name]);
  while (search_queue.length > 0) {
    const person = search_queue.shift();
    if (!searched.includes(person)) {
      if (personIsSeller(person)) {
        return { find: true, name: person };
      } else {
        search_queue = search_queue.concat(graph[person]);
        searched.push(person);
      }
    }
  }
  return false;
}

const seller = search("you");
console.log(seller);
console.log("searched");
console.log(searched);
