module.exports = function check(str, bracketsConfig) {
  //function check(str, bracketsConfig) {
  let 
  br = '', 
  strLengthReduce = 0;
  
  for (j = 0; j < 2 * bracketsConfig.length; j++) {
    
    for (i = 0; i < bracketsConfig.length; i++) {
      br = bracketsConfig[i][0] + bracketsConfig[i][1];      
      strLengthReduce = str.length/2;
      
      for (k = 0; k < strLengthReduce; k++) {
        str = str.replace(br, '');
      }

    }

  }
  //console.log(str);
  if (str == '') {return true} else {return false;}
  
}