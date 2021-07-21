function commonLetters(noun, word){
    var letters = [];
    var vowels = ['a','e','i','o','u']
    var consonant = [];
    for (var i=0; i < noun.length; i++){
        if(word.includes(noun[i])){
            if(vowels.includes(noun[i])){
                //Avoid repetion of letters in the output
                if(letters.includes(" "+noun[i])){ 
                    letters;
                } else {
                    letters.push(" "+noun.charAt(i));
                } 
            } else {
            consonant.push(" "+noun.charAt(i));
            }
        }
    }
    console.log("Common letters:"+letters+","+consonant);
}