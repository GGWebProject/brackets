module.exports = function check(str, bracketsConfig) {
  // your solution

  if (str.length % 2 > 0) {  
    return false;
  }

  let string = str;

  function checkStr() {

    for (let i = 0; i <= string.length/2 - 1; i++){
      let firstBracket = string[i];
      let isRightSecondBracket;

      bracketsConfig.forEach(element => {
        if (element.includes(firstBracket)) {
          isRightSecondBracket = element[1];
        }
      });
      
      if (string[i+1] === isRightSecondBracket) {

        if(string.length === 2) {
          return true;
        } else {
          string = string.slice(0, i) + string.slice(i + 1 + 1);
          i = -1;
          return checkStr();
        }
      }

    }
    return false;
  }

  return checkStr();
}


