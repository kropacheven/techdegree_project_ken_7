// -------------------------------- Alert Section -------------------------------------- //

const alertBanner = document.getElementById("alert");

// create the html for the banner
alertBanner.innerHTML =
`
<div class="alert-banner">
<p class='alert-item'><strong>Alert</strong>: You have unread messages</p>
<p class="alert-banner-close">x</p>
</div>
`;


alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none"
    }
});

// -------------------------------- Charts Section -------------------------------------- //


// -------- 1. Main Traffic line chart ------------ //

// a.Capture HTML canvas by ID:
const trafficCanvas = document.getElementById("traffic-chart");

// b. Object litteral representing the dataset and basic styling for traffic chart:
let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
    2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]
};

// c. Object literal to set options you want to change for a chart:
let trafficOptions = {
    aspectRatio: 2,
    lineTension: 0.5,
    fill: {
        target: 'origin',
        above: 'rgba(116, 119, 191, .3)',   // Area will be filled with color above the origin
      },
    animation: {
    duration: 0
    },
    scales: {
    y: {
    beginAtZero: true
    }
    },
    plugins: {
    legend: {
    display: false
    }
    }
};

// d. Creating a chart itself (+ attaching trafficData and trafficOptions) through variable:
let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});


// -------- 2. Daily Traffic bar chart ------------ //

// a.Capture HTML canvas by ID:
const dailyCanvas = document.getElementById("daily-chart");


// b. Data and options for daily traffic bar chart:
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1
    }]
};

const dailyOptions = {
    scales: {
    y: {
    beginAtZero: true
    }
    },
    plugins: {
    legend: {
    display: false
    }
    }
};

// c. Creating a bar chart itself (+ attaching trafficData and trafficOptions) through variable:

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});


// -------- 3. Doughnut chart ------------ //

// a.Capture HTML canvas by ID:
const mobileCanvas = document.getElementById("mobile-chart");

// b. Data and options for doughnut chart:
const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
    label: '# of Users',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
    '#7477BF',
    '#78CF82',
    '#51B6C8'
    ]
 }]
};

const mobileOptions = {
    aspectRatio: 2,
    plugins: {
    legend: {
    position: 'right',
    labels: {
    boxWidth: 20,
    fontStyle: 'bold'
    }
    }
    }
};

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});



// -------------------------------- Messaging Section -------------------------------------- //

//Creating variables to store form fields:
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");


//Creating click event to send button:
send.addEventListener('click', () => {
    // ensure user and message fields are filled out
    if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
    alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
    alert("Please fill out message field before sending");
    } else {
    alert(`Message successfully sent to: ${user.value}`);
    }
});