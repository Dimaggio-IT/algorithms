/**
 *
 * Dimaggio
 *
 * FIXME: Алгоритм Дэйкстры
 *
 * является жадным алгоритмом т.к. на каждом шаге выбирается
 * локально-оптимальное решение
 *
 * так же этот алгоритм итеративный, без рекурсии (по крайней мере
 * тот который здесь)
 *
 * Algorithm
 * 1. Внести все узлы в объект costs, проставив у узлов которые соединены
 * с первым узлом стоимость их достижения, а на других узлах бесконечность
 *
 * 2. Определить и взять узел меньшей стоимости из costs который еще не
 * обработан
 *
 * 3. Пока остается найденным таким способом необработанный узел крутится
 * цикл
 *
 *  3.1. Обновить стоимости для его соседей, если найденная стоимость
 *    через данный узел меньше
 * . Пометить узел как обработанный => перейти пункт 1
 *
 */

// the graph
// const graph = {};
// graph["start"] = {};
// graph["start"]["a"] = 6;
// graph["start"]["b"] = 2;

// graph["a"] = {};
// graph["a"]["fin"] = 1;

// graph["b"] = {};
// graph["b"]["a"] = 3;
// graph["b"]["fin"] = 5;

// graph["fin"] = {};

// const graph = {};
// graph.a = { b: 2, c: 1 };
// graph.b = { f: 7 };
// graph.c = { d: 5, e: 2 };
// graph.d = { f: 2 };
// graph.e = { f: 1 };
// graph.f = { g: 1 };
// graph.g = {};

const graph = {};
graph.start = { a: 6, b: 2 };
graph.a = { finish: 1 };
graph.b = { a: 3, finish: 5 };
graph.finish = {};

function shortPath(graph, start, end) {
  const costs = {};
  const processed = [];
  let neighbors = {};
  Object.keys(graph).forEach((node) => {
    if (node !== start) {
      let value = graph[start][node];
      costs[node] = value || Infinity;
    }
  });
  console.log("start costs = ", costs);
  let node = findNodeLowestCost(costs, processed);
  console.log("first lowest cost = ", node);
  while (node) {
    const cost = costs[node];
    neighbors = graph[node];
    Object.keys(neighbors).forEach((neighbor) => {
      let newCost = cost + neighbors[neighbor];
      if (newCost < costs[neighbor]) {
        costs[neighbor] = newCost;
      }
    });
    processed.push(node);
    node = findNodeLowestCost(costs, processed);
  }
  console.log("precessed = ", processed);
  return costs;
}

function findNodeLowestCost(costs, processed) {
  let lowestCost = Infinity;
  let lowestNode;
  Object.keys(costs).forEach((node) => {
    let cost = costs[node];
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost;
      lowestNode = node;
    }
  });
  return lowestNode;
}

console.log("result = ", shortPath(graph, "start", "finish"));
// console.log("end");
