
import { SumAndMulti } from "./DZ1_SumOfNumbers.js";



describe("Тестируем функцию SumAndMulti", () => {
  it('Сумма двух чисел 5 и 4 = 9', () => {
    expect(SumAndMulti()).toEqual(9);
  });
  //it ("is a function", () => {expect(typeof SumAndMulti).toBe("function")});
});