window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})
// the event of the page being loaded is the trigger to run getVisitCount 

const functionApi = 'http://localhost:7071/api/GetResumeCounter';
// this script is unsed to pull data from the CosmosDB API and return the number on the website.

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi).then(response => {
        return response.json()
    }).then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function (error) {
        console.long(error);
    })
    return count;
}


