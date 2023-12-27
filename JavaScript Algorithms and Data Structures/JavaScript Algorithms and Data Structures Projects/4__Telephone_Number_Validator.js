function telephoneCheck(str) {
  // Define the regular expression for validating US phone numbers
  const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;

  // Test the input string against the regular expression and return the result
  return phoneRegex.test(str);
}

// Example usage
console.log(telephoneCheck("555-555-5555")); // Output: true
