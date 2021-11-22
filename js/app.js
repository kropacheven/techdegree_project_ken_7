// -------------------------------- Alert Section -------------------------------------- //

const alertBanner = document.getElementById("alert");

// create the html for the banner
alertBanner.innerHTML =
`
<div class="alert-banner">
<p class='alert-item'><strong>Alert</strong>: You have unread messages</p>
<p class="alert-banner-close"> x </p>
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
const dailyChartData = {
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
    data: dailyChartData,
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


// ------------------------------- EXTRA ----------------------- //

// 1. Display at least 2 notifications at the same time when the user clicks the alert icon:

const bell = document.querySelector(".icon-bell");
const dropdown = document.querySelector(".dropdown");

const bellClick = bell.addEventListener("click", (e) => {
    if (dropdown.style.display === '') {
        dropdown.style.display = 'flex';
    } else {
        dropdown.style.display = '';
    }
});

// 2. Traffic chart widget (Hourly, Daily, Weekly, Monthly):
const trafficRadios = document.getElementsByClassName('radio')

const trafficHourly = document.getElementById('hourly');
const trafficDaily = document.getElementById('daily');
const trafficWeekly = document.getElementById('weekly');
const trafficMonthly = document.getElementById('monthly'); 

const hourlyData = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
    2500];
const dailyData = [];
hourlyData.forEach(e => dailyData.push(e * 24 * Math.random()));
const weeklyData = []; 
hourlyData.forEach(e => weeklyData.push(e * 24 * 7 * Math.random()));
const monthlyData = [];
hourlyData.forEach(e => monthlyData.push(e * 24 * 7 * 4 * Math.random()));

const updateTrafficChart = (newData) => {
    trafficChart.data.datasets[0].data = newData;
    trafficChart.update();
}

for (let i = 0; i < trafficRadios.length; i++) {
    const radio = trafficRadios[i];
    radio.addEventListener('click', (e) => {
        const radioId = e.target.id;
        if (radioId === 'hourly') {
            updateTrafficChart(hourlyData);
        } else if (radioId === 'daily') {
            updateTrafficChart(dailyData);
        } else if (radioId === 'weekly') {
            updateTrafficChart(weeklyData);
        } else if (radioId === 'monthly') {
            updateTrafficChart(monthlyData);
        }
    });
}


// 3. Add autocomplete feature for the "Search for a user box":


const usernames = ['Victoria Chambers', 'Dale Byrd', 'Dawn Wood', 'Dan Oliver'];
const userField = document.querySelector('#userField');
const autocomplete = document.querySelector('.autocomplete');
const autocompleteUl = document.querySelector('.autocomplete-users');
let autocompleteChilds = document.querySelectorAll('.autocomplete-users li');

const autocompleteEvent = userField.addEventListener('input', (e) => {
    const userInput = userField.value.toLowerCase();
    for (let i = 0; i < usernames.length; i++) {
        const usernamesLowerCase = usernames[i].toLowerCase();
        if (usernamesLowerCase.includes(userInput) & userInput !== '') {
            addLi(usernames[i]);
        } else {
            removeLi(usernames[i]);
        }
    }
    autocompleteChilds = document.querySelectorAll('.autocomplete-users li');
    if (autocompleteChilds.length === 0) {
        autocomplete.style.display = 'none';
    } else {
        autocomplete.style.display = 'block';
    }
});

const autocompleteFocus = userField.addEventListener('focus', (e) => {
    if (autocompleteChilds.length === 0) {
        autocomplete.style.display = 'none';
    } else {
        autocomplete.style.display = 'block';
    }
});

const autocompleteBlur = userField.addEventListener('blur', (e) => {
    autocomplete.style.display = 'none';
});

const addLi = (name) => {
    if (autocompleteChilds.length === 0) {
        const li = document.createElement('LI');
        li.innerHTML = name;
        autocompleteUl.appendChild(li);
    } else {
        let x = 0;
        for (let i = 0; i < autocompleteChilds.length; i++) {
            const li = autocompleteChilds[i];
            
            if (li.innerHTML === name) {
                x++;
            }
        }
        if (x === 0) {
            const li = document.createElement('LI');
            li.innerHTML = name;
            autocompleteUl.appendChild(li);        
        } 
    }
};

const removeLi = (name) => {
    for (let i = 0; i < autocompleteChilds.length; i++) {
        const li = autocompleteChilds[i];
        if (li.innerHTML === name) {
            li.remove();
        } 
    }
};

const autocompleteTypeName = autocompleteUl.addEventListener('click', (e) => {
    const name = e.target.innerHTML;
    userField.value = name;
    for (let i = 0; i < autocompleteChilds.length; i++) {
        const li = autocompleteChilds[i];
        if (li.innerHTML !== name) {
            li.remove();
        } 
    }
});




// 4. Use local storage to save the settings:

// Grab buttons: 
const saveBtn = document.getElementById('save');
const cancelBtn = document.getElementById('cancel');

//Grab HTML form items:
const emailSwitch = document.getElementById('email-switch');
const profileSwitch = document.getElementById('profile-switch');
const timezone = document.getElementById('timezone'); 

//Checked function for checkboxes
const getChecked = (checkbox) => {
    if (checkbox.checked === true) {
        return 'true';
    } else {
        return 'false';
    }
};

//Save button click event listener:
saveBtn.addEventListener('click', (e) => {
    localStorage.setItem('emailSwitch', getChecked(emailSwitch))
    localStorage.setItem('profileSwitch', getChecked(profileSwitch))
    localStorage.setItem('timezone', timezone.value)
});

//Cancel button click event listener:
cancelBtn.addEventListener('click', (e) => {
    emailSwitch.checked = false;
    profileSwitch.checked = false;
    timezone.value = 'default';
    localStorage.clear();
});

//Load local storage function:
const loadLocalStorage = () => {
    if (localStorage.getItem('emailSwitch')) {
        if (localStorage.getItem('emailSwitch') === 'true') {
            emailSwitch.checked = true;
        } else {
            emailSwitch.checked = false;
        }
    }
    if (localStorage.getItem('profileSwitch')) {
        if (localStorage.getItem('profileSwitch') === 'true') {
            profileSwitch.checked = true;
        } else {
            profileSwitch.checked = false;
        }
    }
    if (localStorage.getItem('timezone')) {
        timezone.value = localStorage.getItem('timezone');
    }
};

//Local storage call:
loadLocalStorage();
