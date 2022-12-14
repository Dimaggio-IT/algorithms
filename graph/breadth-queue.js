/* Dimaggio
 *
 * FIXME: Поиск в ширину.
 *
 * Проверяет есть ли путь от вершины и до вершины
 *
 * используется структура данных "очередь" на основе массива let queue = [];
 *
 */

const graph = {};
const searched = [];
graph.a = ["b", "c"];
graph.b = ["f"];
graph.c = ["d", "e"];
graph.d = ["f"];
graph.e = ["f"];
graph.f = ["g"];

function breadthSearch(graph, start, end) {
  let queue = [];
  queue.push(start);
  while (queue.length > 0) {
    const current = queue.shift();
    if (!graph[current]) {
      graph[current] = [];
    }
    if (graph[current].includes(end)) {
      return true;
    } else {
      searched.push(current);
      queue = [...queue, ...graph[current]];
    }
  }
  return false;
}

console.log("Is there a path = ", breadthSearch(graph, "a", "g"));
console.log("searched");
console.log(searched);
