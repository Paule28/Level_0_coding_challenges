function maximum(...args){
    var max=0;
    for (i=0; i<args.length; i++){
        if(args[i] > max){
            max = args[i];
        } else {
            max;
        }
    }
    return (max);
}