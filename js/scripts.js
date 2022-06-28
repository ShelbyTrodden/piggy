
function vowelFinder(text){
  const vowels = ["a","e","i","o","u"];
  for (let i=0; i<text.length; i +=1) {
    if (vowels[i] === text[0]) {
      return text.concat("way")
    };
  }
  return false;
}

function queenFinder(text){
  let queen= "qu"
  for (let i = 0; i< 2; i +=1){
    if (queen[1]===text[0,1]){
      return text.slice(2).concat("quay");
    };
  }
  return false;
}


function pigLatin(str)  {
  let removeNonAlphanumeric = str.replaceAll(
    "[^a-zA-Z]", "");
  console.log(str, typeof str);
  let lowercase = str.toLowerCase();
  let array = lowercase.split("");
  console.log(array);
  let vowels = ['a','e','i','o','u'];
  for (let i = 0; i < vowels.length; i+=1) {
    if (array[0] === vowels[i]) {
      return array.join("") + "way";
    }
    else {
      continue;
    }
  }
  return false;
}

function consFinder(text){
  const textArray = text.split('');
  const vowels = ["a","e","i","o","u"];

  for (let i = 0; i<text.length; i+=1){
    console.log("dogs")

    for (let v = 0; v<vowels.length; v++) {
      if (textArray[i] === vowels[v]) {
        console.log("firing!")
        return [i];
      }
    }
  }
}

//if first vowel is [0]--concat with way
//if first vowel is [i] other than [0]---slice at first vowel
//store sliced segment in variable--stored
//concat,(stored+"ay") at end of left over vowels 
//school---- sch/ool
//ool+stored(sch) +"ay"
//oolschay

//make an array of all letters -- loop through each letter until we find a vowel-- return index


//function quOrQFinder(someWord) {
 // let search = someWord.search("qu");
 // let secondSearch = someWord.search("q");

 // if (search != -1) {
  // return true;
 // }
  //else {
  //  return false;
 // }
//}



//function translate(str){
  //str=str.toLowerCase();
  //if(["a", "e", "i", "o","u"].indexOf(str[0])>-1){
    //return str=str+"way";
  //}else{
    //for (let i=0; i<str.length; i++){
      //if (["a", "e", "i", "o","u"].indexOf(str[i])>-1){
    //let firstCons= str.slice(0,i);
    //let middle =str.slice(i, str.length);
    //str = middle+firstCons+"ay";
  //}
//}
  //return str;
//}
//}


// Test code from David