function visitorCounter() {
    fetch("https://q123oxa8h3.execute-api.us-east-1.amazonaws.com/visitorCounter")
        .then(response => response.json()) // Parse the JSON from the response
        .then(data => {
            // Only set the visitor count value, not the entire JSON
            document.getElementById("visitor-counter").innerHTML = data.visitor_count;
        });
}
