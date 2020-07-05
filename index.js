function theBeatlesPlay(musicians,instruments){
  // return? array where each line is [[musician] plays [instruments]].
  var arrayInternal = [];
  var stringInternal = "";
  for (var i=0; i<musicians.length; i++) { // FOR LOOP INTERNALS SHOULD BE COMMAS!!!!
    stringInternal = musicians[i] + " plays " + instruments[i];
    arrayInternal[i] = stringInternal;
  }
  return arrayInternal;
}

function johnLennonFacts(array){
  var i = 0;
  var arrayInternal = [];
  while (i < array.length){
    arrayInternal[i] = array[i] + "!!!";
    i++;
  }
  return arrayInternal;
}

function iLoveTheBeatles(number){

}
