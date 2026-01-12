const quizData ={
    "HTML":[
        {
            id: 1,
            question: "1.Which HTML tag is called the root element of an HTML document?",
            Options: ["<html>", "<body>", "<title>", "<head>"],
            answer: "<html>"
        },
        {
            id: 2,
            question: "2.What is the correct syntax to write an HTML comment?",
            Options: ["<!--Comment-->", "//Comment", "#Comment", "/*Comment*/"],
            answer: "<!--Comment-->"
        },
        {
            id: 3,
            question: "3.What is the effect of the <b> tag?",
            Options: ["It Converts the text Within it to bold font.", "It is used to write black-colored font.", "It is used to change the font size","None of the above"],
            answer: "It Converts the text Within it to bold font."
        },
        {
            id: 4,
            question: "4.What is the function of the HTML style attribute?",
            Options: ["It is used to add style to an HTML element", "It is used to uniquely identify some specific style of some elemnt.", "Both A and B", "None of the above"],
            answer: "It is used to add style to an HTML element."
        },
        {
            id: 5,
            question: "5.What is the select tag used for?",
            Options: ["Creates a Combo box", "Select Some attributes and Change their style.", "Change text font", "None of the above"],
            answer: "Creates a Combo box."
        },
        {
            id: 6,
            question: "6.What is the smallest header in HTML by default?",
            Options: ["h1", "h2", "h6", "h4"],
            answer: "h6"
        },
        {
            id: 7,
            question: "7.What is the speciality about the <small> and <big> tags in HTML?",
            Options: ["They work on anything", "They can be used for text only", "They can be repeated", "None of the above"],
            answer: "They can be repeated"
        },
        {
            id: 8,
            question: "8.What tag is used to render an image on a webpage?",
            Options: ["img", "src", "image", "None of the above"],
            answer: "img"
        },
        {
            id: 9,
            question: "9.Which attribute is used to provide a unique name to an HTML element?",
            Options: ["id", "class", "type", "None of the above"],
            answer: "id"
        },
        {
            id: 10,
            question: "10.Which HTML element is used to define description data?",
            Options: ["<li>", "<ol>", "<dd>", "<dl>"],
            answer: "<dd>"
        },
    ],
    "CSS":[
        {
            id:1,
            question: "1.What is the primary purpose of CSS in web development?",
            Options:["To create web pages","To style web pages","To store data","To program web applications"],
            answer: "To style web pages"
        },
        {
            id:2,
            question:"2.Which of the following is a valid way to integrate CSS into a webpage?",
            Options:["Inline","External","Internal", "All of the above"],
            answer:"All of the above"
        },
        {
            id:3,
            question:"3.Which CSS property is used to change the text color of an element?",
            Options:["text-color", "color", "font-color", "background-color"],
            answer: "color"
        },
        {
            id:4,
            question:"4.Which selector is used to target an element based on its id?",
            Options:["#id", ".id", "*id", "id"],
            answer:"#id"
        },
        {
            id:5,
            question:"5.What does the universal selector (*) do in CSS?",
            Options:["Targets all elements in a document", "Targets no elements", "Targets the body element", "Targets elements with a specific id"],
            answer:"Targets all elements in a document"
        },
        {
            id:6,
            question:"6.Which property is used to set the background color of an element?",
            Options:["color", "background-color", "bgcolor", "background"],
            answer:"background-color"
        },
        {
            id:7,
            question:"7.How do you select elements with the class name example?",
            Options:[".example", "#example", "example", "*example"],
            answer:".example"
        },
        {
            id:8,
            question:"8.Which of the following is true about the CSS selector div.example?",
            Options:["Selects all divs with the class example", "Selects the first div with the class example", "Selects all divs", "Selects all elements with the class example"],
            answer:"Selects all divs with the class example"
        },
        {
            id:9,
            question:"9.What components make up the CSS Box Model?",
            Options:["Content, Padding, Border, Margin", "Padding, Margin, Border, Shadow", "Content, Margin, Border, Outline", "Content, Padding, Shadow, Margin"],
            answer:"Content, Padding, Border, Margin"
        },
        {
            id:10,
            question:"10.Which property is used to set the space between the border of an element and its content?",
            Options:["Margin", "Padding", "Border", "Outline"],
            answer:"Padding"
        },
    ],
    "JavaScript":[
        {
            id:1,
            question:"1.What is the purpose of JavaScript in web development?",
            Options:["To structure web pages", "To style web pages", "To add interactivity and dynamic content to web pages", "To store data on the server"],
            answer:"To add interactivity and dynamic content to web pages"
        },
        {
            id:2,
            question:"2.Which keyword is used for declaring a variable in JavaScript that can be reassigned?",
            Options:["const", "var", "let", "static"],
            answer:"let"
        },
        {
            id:3,
            question:"3.In JavaScript, which of the following is a valid variable name?",
            Options:["2names", "$name", "-name", "name2"],
            answer:"$name"
        },
        {
            id:4,
            question:"4.Which data type in JavaScript is used to represent logical values?",
            Options:["String", "Boolean", "Number", "Undefined"],
            answer:"Boolean"
        },
        {
            id:5,
            question:"5.What does the undefined value in JavaScript represent?",
            Options:["An unassigned variable", "A null value", "A logical false", "An error condition"],
            answer:"An unassigned variable"
        },
        {
            id:6,
            question:"6.What will be the output of the following code?console.log(typeof null);",
            Options:["'object'", "'null'", "'undefined'", "'number'"],
            answer:"'object'"
        },
        {
            id:7,
            question:"7.Which of the following is an example of a loosely typed language?",
            Options:["Java", "C++", "JavaScript", "Python"],
            answer:"JavaScript"
        },
        {
            id:8,
            question:"8.Which operator is used to check both the value and the type of a variable in JavaScript?",
            Options:["==", "===", "!=", "!=="],
            answer:"==="
        },
        {
            id:9,
            question:"9.Which statement is used to execute a block of code multiple times in JavaScript?",
            Options:["for", "if", "return", "break"],
            answer:"for"
        },
        {
            id:10,
            question:"10.Which of the following is not a loop structure in JavaScript?",
            Options:["while", "for", "if", "do-while"],
            answer:"if"
        }
    ],
    "Node":[
        {
            id:1,
            question:"1.What is Node.js primarily used for?",
            Options:["To create client-side interfaces", "To act as a DBMS", "To build server-side applications", "To enhance CSS"],
            answer:"To build server-side applications"
        },
        {
            id:2,
            question:"2.Which engine powers Node.js?",
            Options:["V8", "SpiderMonkey", "JavaScriptCore", "Chakra"],
            answer:"V8"
        },
        {
            id:3,
            question:"3.Node.js is designed to handle which type of operations efficiently?",
            Options:["Synchronous", "Asynchronous", "Parallel", "Serial"],
            answer:"Asynchronous"
        },
        {
            id:4,
            question:"4.Which programming language is Node.js based on?",
            Options:["python", "java", "JavaScript", "Ruby"],
            answer:"JavaScript"
        },
        {
            id:5,
            question:"5.What type of architecture does Node.js follow?",
            Options:["Blocking I/O", "Non-blocking I/O", "Procedural", "Functional"],
            answer:"Non-blocking I/O"
        },
        {
            id:6,
            question:"6.Which of the following is a key feature of Node.js?",
            Options:["Synchronous execution", "Single-threaded", "Multi-threaded", "Distributed"],
            answer:"Single-threaded"
        },
        {
            id:7,
            question:"7.Which protocol is primarily used in Node.js for communication?",
            Options:["FTP", "HTTP", "SMTP", "SNMP"],
            answer:"HTTP"
        },
        {
            id:8,
            question:"8.What is the main advantage of using Node.js for web applications?",
            Options:["High CPU usage", "Low memory usage", "Non-blocking I/O", "Static typing"],
            answer:"Non-blocking I/O"
        },
        {
            id:9,
            question:"9.Which method is used to import modules in Node.js?",
            Options:["require()", "import()", "include()", "module()"],
            answer:"require()"
        },
        {
            id:10,
            question:"10.What is a core module in Node.js?",
            Options:["A user-defined module", "A built-in module", "A plugin", "An external library"],
        }
    ]
}


let username = "";
let category = "";
let categoryQuestions = [];
let questionCount = 0;
let score = 0;
let correct = 0;
let wrong = 0;
let attempted = 0;
let timer;
let timeLeft = 15;
let isAnswered = false;

// NAME
function getName(event) {
    event.preventDefault();
    username = document.getElementById("name-input").value;

    if (username.trim() === "") {
        alert("Please enter name");
        return;
    }

    document.getElementById("message").innerText =
        `Welcome ${username}, you can start the quiz now`;
}

// START QUIZ
function startQuiz(event) {

    if (username === "") {
        alert("Enter name first");
        return;
    }

    category = event.target.value;
    categoryQuestions = quizData[category];

    questionCount = 0;
    score = 0;
    correct = 0;
    wrong = 0;
    attempted = 0;

    document.getElementById("quiz-container").innerHTML = `
        <h2>${category} Quiz</h2>
        <p id="timer">Time Left: 15s</p>
        <div id="question-container"></div>
        <div id="option-container"></div>
        <p id="score-display">Score: 0</p>
        <p id="stats"></p>
        <button onclick="nextQuestion()">Next</button>
    `;

    displayQuestion(questionCount);
}

//DISPLAY QUESTION 
function displayQuestion(index) {

    clearInterval(timer);
    timeLeft = 15;
    isAnswered = false;

    document.getElementById("question-container").innerText =
        categoryQuestions[index].question;

    document.getElementById("timer").innerText =
        `Time Left: ${timeLeft}s`;

    displayOptions(index);
    startTimer();
}

//TIMER
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText =
            `Time Left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            autoNext();
        }
    }, 1000);
}

//OPTIONS
function displayOptions(index) {

    const optionContainer = document.getElementById("option-container");
    optionContainer.innerHTML = "";

    categoryQuestions[index].Options.forEach(opt => {

        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.classList.add("option-btn");

        btn.onclick = () => {

            if (isAnswered) return;
            isAnswered = true;

            clearInterval(timer);
            attempted++;

            const allBtns = document.querySelectorAll(".option-btn");
            allBtns.forEach(b => b.disabled = true);

            if (opt === categoryQuestions[index].answer) {
                btn.style.background = "green";
                btn.style.color = "white";
                score++;
                correct++;
            } else {
                btn.style.background = "red";
                btn.style.color = "white";
                wrong++;

                allBtns.forEach(b => {
                    if (b.innerText === categoryQuestions[index].answer) {
                        b.style.background = "green";
                        b.style.color = "white";
                    }
                });
            }

            updateStats();
        };

        optionContainer.appendChild(btn);
    });
}

//AUTO NEXT (TIME UP)
function autoNext() {

    if (!isAnswered) {
        attempted++;
        wrong++;
    }

    const allBtns = document.querySelectorAll(".option-btn");
    allBtns.forEach(btn => {
        btn.disabled = true;
        if (btn.innerText === categoryQuestions[questionCount].answer) {
            btn.style.background = "green";
            btn.style.color = "white";
        }
    });

    updateStats();

    setTimeout(() => {
        nextQuestion();
    }, 1000);
}

// UPDATE STATS
function updateStats() {
    document.getElementById("score-display").innerText =
        `Score: ${score}`;

   // document.getElementById("stats").innerText =
     //   `Attempted: ${attempted} | Correct: ${correct} | Wrong: ${wrong}`;
}

//NEXT QUESTION
function nextQuestion() {
    clearInterval(timer);
    questionCount++;

    if (questionCount < categoryQuestions.length) {
        displayQuestion(questionCount);
    } else {
        showResult();
    }
}

// RESULT
function showResult() {

    const total = categoryQuestions.length;
    const percentage = ((correct / total) * 100).toFixed(2);

    document.getElementById("quiz-container").innerHTML = `
        <h2>Quiz Finished 🎉</h2>
        <p><strong>${username}</strong></p>
        <p>Total Questions: ${total}</p>
        <p>Attempted: ${attempted}</p>
        <p>Correct: ${correct}</p>
        <p>Wrong: ${wrong}</p>
        <h3>Score: ${score} / ${total}</h3>
        <h3>Percentage: ${percentage}%</h3>
        <button onclick="restartQuiz()">Restart</button>
    `;
}

function restartQuiz() {
    location.reload();
}
