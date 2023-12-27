function palindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Check if the cleaned string is equal to its reverse
  return cleanedStr === cleanedStr.split("").reverse().join("");
}

// Пример использования
console.log(palindrome("eye")); // true
console.log(palindrome("Race Car")); // true
console.log(palindrome("hello")); // false
