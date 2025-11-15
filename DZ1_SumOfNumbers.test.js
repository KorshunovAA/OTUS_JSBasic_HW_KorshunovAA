
import { SumAndMulti } from "./DZ1_SumOfNumbers.js";



describe("Тестируем функцию SumAndMulti", () => {

  /*
  it('Сумма двух чисел 5 + 4 = 9', () => { expect(SumAndMulti(5, 4)).toEqual(9);});
  it('Сумма двух чисел 100.1 + 0.3 = 100.4', () => { expect(SumAndMulti(100.1, 0.3)).toEqual(100.4);});
  it('Сумма двух чисел 50.23 + 15.46 = 65.69', () => { expect(SumAndMulti(50.23, 15.46)).toEqual(65.69);});
  it('Сумма двух чисел 14.245 + 1.351 = 15.6', () => { expect(SumAndMulti(14.245, 1.351)).toEqual(15.6);});
  it('Сумма двух чисел 14.243 + 1.351 = 15.59', () => { expect(SumAndMulti(14.243, 1.351)).toEqual(15.59);});
  it ("is a function", () => {expect(typeof SumAndMulti).toBe("function")});
  */
  it ("is a function", () => {expect(typeof SumAndMulti).toBe("function")});
  // Проверяем суммы двух чисел
  it('Сумма двух чисел 5 + 4 = 9', () => { expect(SumAndMulti(5, 4)[0]).toEqual(9);});
  it('Сумма двух чисел 100.1 + 0.3 = 100.4', () => { expect(SumAndMulti(100.1, 0.3)[0]).toEqual(100.4);});
  it('Сумма двух чисел 50.23 + 15.46 = 65.69', () => { expect(SumAndMulti(50.23, 15.46)[0]).toEqual(65.69);});
  it('Сумма двух чисел 14.245 + 1.351 = 15.6', () => { expect(SumAndMulti(14.245, 1.351)[0]).toEqual(15.6);});
  it('Сумма двух чисел 14.243 + 1.351 = 15.59', () => { expect(SumAndMulti(14.243, 1.351)[0]).toEqual(15.59);});
  it('Сумма двух чисел 12.45 - 1.81 = 10.64', () => { expect(SumAndMulti(12.45, -1.81)[0]).toEqual(10.64);});

  // Проверяем произведение двух чисел
  it('Произведение двух чисел 5 * 4 = 45', () => { expect(SumAndMulti(5, 4)[1]).toEqual(20);});
  it('Произведение двух чисел 100.1 * 0.3 = 30.03', () => { expect(SumAndMulti(100.1, 0.3)[1]).toEqual(30.03);});
  it('Произведение двух чисел 50.23 * 15.46 = 776.56', () => { expect(SumAndMulti(50.23, 15.46)[1]).toEqual(776.56);});
  it('Произведение двух чисел 14.245 * 1.351 = 19.24', () => { expect(SumAndMulti(14.245, 1.351)[1]).toEqual(19.24);});
  it('Произведение двух чисел 14.243 * 1.351 = 19.24', () => { expect(SumAndMulti(14.243, 1.351)[1]).toEqual(19.24);});
  it('Произведение двух чисел 12.45 * -1.81 = -22.53', () => { expect(SumAndMulti(12.45, -1.81)[1]).toEqual(-22.53);});

});