function hoursAndMinutes(number){
    var hour = Math.floor(number / 60);
    var minute = number % 60;
    if( hour > 1){
        if(minute > 1){
            console.log(hour+" hours, "+minute+" minutes.");
        } else {
            console.log(hour+" hours, "+minute+" minute.");
        } 
    } else if(hour <= 1){
        if(minute > 1){
            console.log(hour+" hour, "+minute+" minutes.");
        } else {
            console.log(hour+" hour, "+minute+" minute.");
        }
    }
}