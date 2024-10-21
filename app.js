const goalElement = document.getElementById("goal");
const buttonElement = document.getElementById("submit");
const listElement = document.getElementById("list");

// function addGoal() {
//     const goal = goalElement.value.trim();
//     if (goal === '') {
//         alert('Please enter a goal.');
//         return;
//     }
//     const liElement = document.createElement('li');
//     liElement.textContent = goal;
//     listElement.appendChild(liElement);
// }

// function removeGoal(event) {
//     const liElement = event.target;
//     listElement.removeChild(liElement);
// }

// listElement.addEventListener("click", removeGoal);

function markGoalDone(event) {
    const liElement = event.target;
    liElement.classList.toggle("done");
}

listElement.addEventListener("click", markGoalDone);
// buttonElement.addEventListener("click", addGoal);

buttonElement.addEventListener("click", () => {
    const goal = goalElement.value.trim();
    if (goal === '') {
        alert('Please enter a goal.');
        return;
    }
    const liElement = document.createElement('li');
    liElement.textContent = goal;
    listElement.appendChild(liElement);
});
