export const timestamp = (tweetTime) =>{
    var date1 = new Date(tweetTime);
    var date2 = new Date();
    var timestamp = "";      
    // To calculate the time difference of two dates
    var Difference_In_Time = date2.getTime() - date1.getTime();
      
    // To calculate the no. of days between two dates
    var time_diff = Difference_In_Time / (1000 * 3600 * 24);
    if(time_diff > 365){
        time_diff = time_diff / 365;
        time_diff = Math.round(time_diff);
        if(time_diff === 1) timestamp = time_diff +" year ago";
        timestamp = time_diff +" years ago";
    }
    else if(time_diff > 30 && time_diff < 365){
        time_diff = time_diff / 30;
        time_diff = Math.round(time_diff);
        timestamp = time_diff +" months ago";
    } 
    else if(time_diff < 30 && time_diff >= 1 ){
        time_diff = Math.round(time_diff);
        timestamp = time_diff +"d";
    }
    else if(time_diff < 1 ) {
        var time_diff_hr = Math.round(Difference_In_Time / (1000*3600));
        timestamp = time_diff_hr+"h";
        if(time_diff_hr < 1){
            var time_diff_min = Math.round(Difference_In_Time / (1000*60));
            timestamp = time_diff_min +"m";
            if(time_diff_min < 1) timestamp = "just now";
        }
         
    }
    return timestamp;
};
