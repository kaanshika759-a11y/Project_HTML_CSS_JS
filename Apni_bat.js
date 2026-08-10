function saveUser() {

  let name = document.getElementById("name").value;

  if (!name) {
    alert("Enter your name");
    return;
  }

  localStorage.setItem("user", name);

  document.getElementById("welcome").innerText =
    "Welcome " + name + " 👋 what can I help you...";
}

function selectUser(type) {

  document.getElementById("problems").innerHTML =
    `<h3>${type} Problems</h3>`;

  let data = [];

  if (type === "Student") {

    data = [
      "Fear of going away from home for the first time",
      "Hostel adjustment problem",
      "Difficulty in making new friends",
      "Career confusion",
      "Exam failure stress",
      "English communication issue",
      "Hesitation in talking to teachers",
      "Difficulty discussing fees or problems with parents"
    ];

  } else if (type === "Worker") {

    data = [
      "Salary ke liye baat karne me hesitation",
      "Boss se problem discuss karna",
      "Workplace issue",
      "Rights aur documents confusion",
      "Work stress",
      "Help maangne me hesitation"
    ];

  } else {

    data = [
      "Confidence problem",
      "Public speaking fear",
      "Self introduction problem",
      "Decision making confusion",
      "Important conversation practice",
      "Life stress"
    ];

  }

  data.forEach(p => {

    document.getElementById("problems").innerHTML +=
      `<button onclick="openSupport('${p}')">${p}</button>`;

  });

}

function openSupport(problem) {

  document.getElementById("supportBox").innerHTML = `
    <h3>${problem}</h3>

    <textarea
      id="userProblem"
      placeholder="Write your problem here..."></textarea>

    <br><br>

    <button onclick="getHelp()">
      Get Support
    </button>

    <div id="reply"></div>
  `;

}

function getHelp() {

  let problem = document.getElementById("userProblem").value;

  if (!problem) {

    alert("Write your problem");
    return;

  }

  fetch("http://localhost:8080/api/support", {

    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify({
      problem: problem
    })

  })

  .then(res => res.json())

  .then(data => {

    document.getElementById("reply").innerHTML =
      `<p>${data.reply}</p>`;

  })

  .catch(error => {

    document.getElementById("reply").innerHTML =
      "<p>Backend not connected.</p>";

    console.log(error);

  });

}