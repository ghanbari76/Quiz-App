const highScores = JSON.parse(localStorage.getItem("highscores")) || [];
const list = document.querySelector("ol");

const content = highScores.map((user,index) => {
    return `
        <li>
            <span>${index +1}</span>
            <p>${user.name}</p>
            <span>${user.score}</span>
        </li>
    `
})
list.innerHTML = content.join("");

