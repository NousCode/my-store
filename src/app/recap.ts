// Declaración de una variable en typescript
const username: string | number = 'NousCode';

// Como se declará una función
const sum = (a: number, b: number) => {
  return a + b;
}

/**
 * Recibimos feedback de manera instantanea, cuando estamos enviando variables que no son
 */
sum(1, 3);

// Creación de una clase
class Person {

  constructor(public age: number, public lastName: string) { }
}

// Creación de un objeto
const nico = new Person(18, 'Salazar');
