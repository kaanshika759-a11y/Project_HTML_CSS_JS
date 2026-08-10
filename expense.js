let chart;

function calculateExpense() {

    let month = document.getElementById("month").value;
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    let budget = Number(document.getElementById("budget").value);

    let food = Number(document.getElementById("food").value);
    let education = Number(document.getElementById("education").value);
    let stationary = Number(document.getElementById("stationary").value);
    let travel = Number(document.getElementById("travel").value);
    let course = Number(document.getElementById("course").value);
    let roomRent = Number(document.getElementById("roomRent").value);

    // TOTAL EXPENSE
    let totalExpense =
        food +
        roomRent +
        education +
        stationary +
        travel +
        course;


    // REMAINING
    let savedMoney = budget - totalExpense;


    // PERCENTAGE
    let percentage = budget > 0
        ? ((totalExpense / budget) * 100).toFixed(1)
        : 0;


    // PROFILE
    document.getElementById("profileName").innerText =
        name || "Student";


    // STUDENT INFO
    document.getElementById("studentInfo").innerHTML =
        `<b>${name || "Student"}</b> &nbsp; | &nbsp;
         Roll No: ${roll || "-"} &nbsp; | &nbsp;
         ${month || "Month not selected"}`;


    // RESULT
    document.getElementById("totalExpense").innerText =
        "₹" + totalExpense.toLocaleString("en-IN");


    document.getElementById("savedMoney").innerText =
        "₹" + savedMoney.toLocaleString("en-IN");


    document.getElementById("reportPercentage").innerText =
        percentage + "%";


    // TOP CARDS
    document.getElementById("budgetCard").innerText =
        "₹" + budget.toLocaleString("en-IN");


    document.getElementById("expenseCard").innerText =
        "₹" + totalExpense.toLocaleString("en-IN");


    document.getElementById("remainingCard").innerText =
        "₹" + savedMoney.toLocaleString("en-IN");


    document.getElementById("percentageCard").innerText =
        percentage + "%";


    // SIDEBAR
    document.getElementById("sideBudget").innerText =
        "₹" + budget.toLocaleString("en-IN");


    document.getElementById("sideExpense").innerText =
        "₹" + totalExpense.toLocaleString("en-IN");


    document.getElementById("sideRemaining").innerText =
        "₹" + savedMoney.toLocaleString("en-IN");


    // MESSAGE
    let message = document.getElementById("message");

    if (budget <= 0) {

        message.innerText =
            "Please enter a valid budget.";

        message.className =
            "message warning";

    }

    else if (totalExpense > budget) {

        message.innerText =
            "⚠ You crossed your budget limit!";

        message.className =
            "message warning";

    }

    else if (savedMoney < budget * 0.2) {

        message.innerText =
            "⚠ Saving is low. Reduce extra spending.";

        message.className =
            "message warning";

    }

    else {

        message.innerText =
            "✓ Great! You are saving money.";

        message.className =
            "message good";
    }


    // TABLE

    let table = `

        <tr>
            <td>🍔 Food</td>
            <td>₹${food.toLocaleString("en-IN")}</td>
        </tr>

<tr>
    <td>🏠 Room Rent</td>
    <td>₹${roomRent.toLocaleString("en-IN")}</td>
</tr>
        <tr>
            <td>📚 Education</td>
            <td>₹${education.toLocaleString("en-IN")}</td>
        </tr>

        <tr>
            <td>✏ Stationery</td>
            <td>₹${stationary.toLocaleString("en-IN")}</td>
        </tr>

        <tr>
            <td>🚗 Travel</td>
            <td>₹${travel.toLocaleString("en-IN")}</td>
        </tr>

        <tr>
            <td>💻 Online Course</td>
            <td>₹${course.toLocaleString("en-IN")}</td>
        </tr>

    `;


    document.getElementById("tableBody").innerHTML =
        table;


    // CHART

    let ctx =
        document.getElementById("expenseChart");


    if (chart) {
        chart.destroy();
    }


    chart = new Chart(ctx, {

        type: "doughnut",

        data: {

            labels: [
                "Food",
                "Room Rent",
                "Education",
                "Stationery",
                "Travel",
                "Online Course"
            ],

            datasets: [{

                data: [
                    food,
                    roomRent,
                    education,
                    stationary,
                    travel,
                    course
                ],

                borderWidth: 2

            }]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {
                    position: "bottom"
                }

            }

        }

    });

}