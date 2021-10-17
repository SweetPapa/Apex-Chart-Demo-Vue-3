//////////////////////////////////////////////////////////////
// Dummy Data file for Charts along with some helper functions
//////////////////////////////////////////////////////////////

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

// Our main object for the chart data
const chartData = {
    scorecard : [
            {
            textLabel : "Windows",
            textScore : 321,
            cardColor : "",
            logoTag: "fab fa-windows"
            },
           
            {
                textLabel : "macOS",
                textScore : 50,
                cardColor : "",
                logoTag: "fab fa-apple"
            },
            {
                textLabel : "Android",
                textScore : 1335,
                cardColor : "",
                logoTag: "fab fa-android"
            },
            {
                textLabel : "iOS",
                textScore : 5236,
                cardColor : "",
                logoTag: "fas fa-mobile"
            }
    ]
    
}

// Some colors to keep things in theme
const randomColors = ["#336699", "#86bbd8", "#2f4858", "#9ee493", "#daf7dc"]


// Assign some random colors to the dummy data
const assignRandomColors = (data) => {
    data.forEach((dataObj, index) => {
        if (index <= randomColors.length){
            dataObj.cardColor = randomColors[index]
        } else {
            let adjustedIndex = getRandomInt(0, randomColors.length)
            dataObj.cardColor = randomColors[adjustedIndex]
        }
    })
}

// Assign the Random Colors for the Scorecard
assignRandomColors(chartData.scorecard)


// We'll export all the stuff we care about
module.exports = {
    chartData,
    randomColors,
    assignRandomColors
}