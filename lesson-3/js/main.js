function palindrome(str) {
    var strLen = str.length; //переменная, равная длине слова//
    for (var i = 0; i < strLen; i++) {
      if (str[i] === str[strLen - 1 - i]) {
        return true; //сравниваем буквы с разных концов слова//
      }
    }
    return false;
  }
  
  test = palindrome("шалаш");
  console.log(test);
  
  var a = 5; //задаем переменные//
  var b = 8;
  
  function comparison(a, b) {
    if (a < b) {
      return a; //сравниваем их, выводится меньшая//
    }
    return b;
  }
  result = comparison(a, b);
  console.log(result);
  
  function compare(a, b) { //то же, с тернарным оператором//
    return a < b ? a : b
  };
  var a = 10;
  var b = 4;
  var f = compare(a, b);
  console.log(f);
  
  
  var a = 30;
  var y = 38;
  
  function collation(a, y) { //поиск наибольшей из величин//
    if (a > y) {
      return a;
    }
    return y;
  }
  result = collation(a, y);
  console.log(result);
  
  
  function collate(a, y) {
    return a > y ? a : y
  };
  var a = 66;
  var y = 48;
  var f = collate(a, y);
  console.log(f);
  
  
  function replaceZero(number) { //решение из интернета, сама не сделала((//
    const numStr = `${number}`;
    if (numStr.includes('0')) {
      return `${number}`.replaceAll('0', 'zero');
    }
    return number;
  }
  
  console.log([12, 53, 20, 18, 22, 100, 43, 53, 50].map(replaceZero).join(', '));