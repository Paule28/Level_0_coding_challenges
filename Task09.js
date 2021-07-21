function getVowels(noun){
    var vowels = ['a','e','i','o','u','A','E','I','O','U'];
    var allVowels = [];
    for (var j=0; j < noun.length; j++){
        if(vowels.includes(noun[j])){
            //Avoid repetition of letters in the output
            if(allVowels.includes(" "+noun[j])){
                allVowels;
            } else {
                allVowels.push(" "+noun.charAt(j).toLowerCase());
            }
        }
    }
    console.log("Vowels:"+allVowels);
}