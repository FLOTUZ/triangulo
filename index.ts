export const tipoTriangulo = (a: any, b: any, c: any): string => {
  try {
    if (
      typeof a !== "number" ||
      typeof b !== "number" ||
      typeof b !== "number"
    ) {
      return "Ingresa solo numeros";
    }

    if (a === 0 || b === 0 || c === 0) {
      return "Ingrese numeros positivos";
    }
    if (a === b && b === c) {
      return "Equilatero";
    } else if (
      (a === b && b !== c) ||
      (a === c && a !== b) ||
      (b === c && b !== a)
    ) {
      return "Isosceles";
    } else if (
      a !== b &&
      a !== c &&
      b !== c &&
      a + b > c &&
      a + c > b &&
      b + c > a
    ) {
      return "Escaleno";
    }
    if (a + b <= c || a + c <= b || b + c <= a) {
      return "Esto no puede ser un triangulo";
    }
    return "";
  } catch (error) {
    return "Ingrese datos correctos";
  }
};
