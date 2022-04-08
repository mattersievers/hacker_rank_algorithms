/*
Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock. 
*/


function timeConversion(s) {
    // Write your code here
    if(s[8] === "A" && s.slice(0,2) === "12"){
        return "00".concat(s.slice(2,8));
    } else if(s[8] === "A" ||  ( s[8] === "P" && s.slice(0,2) === "12" ) ){
        return s.slice(0,8);
    } else if(s[8] === "P"){
        let hours = parseInt(s.slice(0,2));
        hours += 12;
        hours = hours.toString();
        return hours.concat(s.slice(2,8));
    }
}

console.log("Sample Test Case 0: 07:05:45PM");

console.log('Converted: ', timeConversion('07:05:45PM'))