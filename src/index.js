
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) return [];

    return matrix.slice()
      .map((it, i) => i % 2 !== 0 ? it.reverse(): it)
      .flat();
}
