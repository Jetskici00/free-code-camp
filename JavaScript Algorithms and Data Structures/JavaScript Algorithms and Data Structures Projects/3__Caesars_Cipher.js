function rot13(str) {
  return str.replace(/[A-Z]/g, (char) => {
    const code = char.charCodeAt(0);
    return String.fromCharCode(code >= 78 ? code - 13 : code + 13);
  });
}

// Пример использования
const encodedString = "SERR PBQR PNZC";
const decodedString = rot13(encodedString);

console.log(decodedString);
