export default function convertTimestamp(timestamp) {
    // Create a new Date object using the timestamp (in milliseconds)
    var date = new Date(timestamp * 1000);

    // Define an array of month names
    var monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    // Get the day of the week, day of the month, month, year, hours, minutes, and seconds
    var dayOfMonth = date.getDate();
    var month = monthNames[date.getMonth()];
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    // Format the time string
    var formattedTime = dayOfMonth + " " + month + " " + year + " | " +
        hours + ":" + minutes + ":" + seconds;

    return formattedTime;
}
