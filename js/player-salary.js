const playerList = [];

function addToPlayerList(player) {
  const playerListElem = document.getElementById("player-list");
  const liTag = document.createElement("li");
  liTag.className = "font-semibold";
  liTag.innerText = player.name;
  liTag.id = player.name;
  playerListElem.appendChild(liTag);
}

function handleSelect(e) {
  e.preventDefault();
  const player = {
    id: e.target.id,
    name: e.target.value,
  };

  console.log(e);
  const index = playerList.findIndex(
    (player) => player.name === e.target.value
  );
  console.log(index);
  const elem = document.getElementById(e.target.id);
  if (index > -1) {
    elem.classList.remove("bg-sky-400");
    playerList.splice(index, 1);
    const selectedPlayer = document.getElementById(player.name);
    selectedPlayer.remove();
  } else {
    playerList.push(player);
    addToPlayerList(player);
    elem.classList.add("bg-sky-400");
  }
}

const calcTotalBtn = document.getElementById("calculate-total-btn");
calcTotalBtn.addEventListener(
  "click",
  function (e) {
    if (playerList.length === 0) {
      alert("Please select a player");
    }
    const perPlayerAmount = Number(
      document.getElementById("player-amount").value
    );
    const managerAmount = Number(
      document.getElementById("manager-amount").value
    );
    const coachAmount = Number(document.getElementById("coach-amount").value);

    const totalPlayerCount = playerList.length;
    const totalPlayerExpense = totalPlayerCount * perPlayerAmount;

    const totalExpense = totalPlayerExpense + managerAmount + coachAmount;

    document.getElementById("player-expense").innerText = totalPlayerExpense;
    document.getElementById("total-amount").innerText = totalExpense.toString();

    console.log(
      "Total amount: " +
        totalPlayerExpense +
        " Manager: " +
        managerAmount +
        "Coach: " +
        coachAmount
    );
  },
  false
);
