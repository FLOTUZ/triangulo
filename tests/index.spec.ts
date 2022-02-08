import { tipoTriangulo } from "..";

//testing with jest
describe("Funcion tipo de triangulo", () => {
  //IDEALES
  test("Equilatero", () => {
    expect(tipoTriangulo(3, 3, 3)).toBe("Equilatero");
  });
  test("Isosceles", () => {
    expect(tipoTriangulo(2, 2, 3)).toBe("Isosceles");
  });
  test("Escaleno", () => {
    expect(tipoTriangulo(8, 9, 10)).toBe("Escaleno");
  });
  test("Lados en 0", () => {
    expect(tipoTriangulo(0, 0, 0)).toBe("Ingrese numeros positivos");
  });

  //ERRORES DE USUARIO o USUARIO MALINTENCIONADO
  test("Lados en strings", () => {
    expect(tipoTriangulo("a", 1, 1)).toBe("Ingresa solo numeros");
  });
  test("Numeros como parametro tipo string", () => {
    expect(tipoTriangulo("10", "10", "10")).toBe("Ingresa solo numeros");
  });
  test("Caracteres especiales", () => {
    expect(tipoTriangulo("aaa@aaa", 0, 0)).toBe("Ingresa solo numeros");
  });
  test("Lados con OBJETOS", () => {
    expect(tipoTriangulo({}, 0, 0)).toBe("Ingresa solo numeros");
  });
  test("Codigo JS como parametro", () => {
    expect(tipoTriangulo(() => console.log(4), 5, 9)).toBe(
      "Ingresa solo numeros"
    );
  });

  //PRUEBAS DE EXISTENCIA DE UN TRIANGULO
  test("No es triangulo 1", () => {
    expect(tipoTriangulo(1, 2, 20)).toBe("Esto no puede ser un triangulo");
  });
  test("No es triangulo 2", () => {
    expect(tipoTriangulo(3, 4, 10)).toBe("Esto no puede ser un triangulo");
  });
  test("No es triangulo 4", () => {
    expect(tipoTriangulo(4, 5, 9)).toBe("Esto no puede ser un triangulo");
  });
});
