/**
 * 將攝氏溫度轉換為華氏溫度
 * @param celsius - 攝氏溫度
 * @returns 華氏溫度
 */
const celsiusToFahrenheit = (celsius: number): number => celsius * 9 / 5 + 32;

export { 
  celsiusToFahrenheit, 
};