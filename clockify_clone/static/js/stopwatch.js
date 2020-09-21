// stop watch js  

var secounds = 0,
    mins = 0,
    hours = 0;

var timer;

var timeSaved = [];


function start() {
    if (!timer) {
        timer = setInterval(run, 1000);
    }
}


function run() {

    document.querySelector('.stopwatch-text').textContent = getTime();
    secounds++;
    if (secounds == 60) {
        secounds = 0;
        mins++;
    }
    if (mins == 60) {
        mins = 0;
        hours++;
    }
}

function pause() {
    clearInterval(timer);
    timer = false;
}

function stop() {
    timeSaved.push(getTime());
    document.getElementById('laps').innerHTML = getTime();
    clearInterval(timer);
    timer = false;
    hours = 0;
    secounds = 0;
    mins = 0;
    document.querySelector('.stopwatch-text').textContent = getTime();


};

console.log(timeSaved);

function getTime() {
    return ((hours < 10 ? "0" + hours : hours) + ":" + (mins < 10 ? "0" + mins : mins) + ":" +
        (secounds < 10 ? "0" + secounds : secounds));
};


function lap() {
    if (timer) {
        var list = document.createElement('p');
        list.innerText = getTime();
        document.querySelector('.laps').appendChild(list);
    }
}



// bar chart
// javascript
// javascript

// javascript
var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

var svgWidth = 800,
    svgHeight = 500,
    barPadding = 5;
var barWidth = svgWidth / dataset.length;
var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

var barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", function(d) {
        return svgHeight - d
    })
    .attr("height", function(d) {
        return d;
    })
    .attr("width", barWidth - barPadding)
    .attr("class", "bar")
    .attr("transform", function(d, i) {
        var translate = [barWidth * i, 0];
        return "translate(" + translate + ")";
    });

var text = svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function(d) {
        return d;
    })
    .attr("y", function(d, i) {
        return svgHeight - d - 2;
    })
    .attr("x", function(d, i) {
        return barWidth * i;
    })
    .attr("fill", "#A64C38");