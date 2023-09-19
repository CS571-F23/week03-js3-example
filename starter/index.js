console.log("Hello world!");

fetch("https://cs571.org/api/f23/weekly/week03", {
    headers: {
        "X-CS571-ID": CS571.getBadgerId()
    }
})
.then(res => res.json())
.then(prezData => {
    console.log(prezData);

    // TODO: Do the 3 questions
});