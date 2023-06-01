/**
 * A função abaixo deve receber um array de números ordenados de maneira
 * crescente, e retornar um novo array também ordenado de maneira crescente,
 * com cada um dos números elevado ao quadrado.
 */

function sortedSquaredArray(values: number[]): Number[] {
  const result = []

  for (const value of values) {
    const squared = value * value
    result.push(squared)
  }

  return result
}

export default sortedSquaredArray