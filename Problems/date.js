function getDayName(dateString) {
    let dayName;
    // Write your code here
    return  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][new Date(dateString).getDay()]
    return dayName;
}