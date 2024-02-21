import formatNumberPhone from '../app'

test.each([
  [1.1, "8 (927) 000-00-85", "+79270000085"],
  [1.2, "+7 960 000 67 00", "+79600006700"],
  [1.3, "86 000 000 0000", "+860000000000"],
])("Тест №%s: Номер %s преобразуется в %s",
(number, phoneNumber, validPhoneNumber) => {  
  expect(formatNumberPhone(phoneNumber)).toBe(validPhoneNumber);
});

test("Тест №2: введен не существующий номер +78600006700", () => {
  expect(() => formatNumberPhone("+78600006700")).toThrow("Номер не существует");
});
