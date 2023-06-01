import sortedSquaredArray from "../../src/function"

describe('Testa a função que ordena um array de números ao quadrado', () => {
  test('array com 1 número', () => {
    const input = [3]
    const result = sortedSquaredArray(input)
    expect(result).toEqual([9])
  })

  test('array com múltiplos números: [1, 2, 3, 5, 6, 8, 9]', () => {
    const input = [1, 2, 3, 5, 6, 8, 9]
    const result = sortedSquaredArray(input)
    expect(result).toEqual([1, 4, 9, 25, 36, 64, 81])
  })

  test('array que possui o valor 0', () => {
    const input = [0]
    const result = sortedSquaredArray(input)
    expect(result).toEqual([0])
  })

  test('array com 1 número negativo', () => {
    const input = [-5]
    const result = sortedSquaredArray(input)
    expect(result).toEqual([25])
  })

  test('array com 1 número negativo e outro positivo igual', () => {
    const input = [-5, 5]
    const result = sortedSquaredArray(input)
    expect(result).toEqual([25, 25])
  })

  test.skip('array com números negativos e positivos: [-10, -5, 0, 5, 10]', () => {
    const input = [-10, -5, 0, 5, 10]
    const result = sortedSquaredArray(input)
    expect(result).toEqual([0, 25, 25, 100, 100])
  })

  test.skip('array com números negativos e positivos: [-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20]', () => {
    const input = [-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20]
    const result = sortedSquaredArray(input)
    expect(result).toEqual([0, 0, 1, 1, 1, 4, 4, 9, 169, 361, 400, 2500])
  })
})