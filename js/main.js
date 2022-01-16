const blocks = document.getElementsByClassName("zero");
const turn = document.getElementById("turn");
const winner = document.getElementById("winner");
const restart = document.getElementById("restart");
const restartBox = document.querySelector(".restart");
const block = document.getElementsByClassName("block");

const click_block = function (event) {
  event.preventDefault();

  if (this.textContent !== "") {
    return;
  }

  this.innerHTML = get_sign();
  this.classList.add("indexTwo");

  if (check_winner() === 1) {
    winner.textContent = "O'yinchi 1";
    restartBox.classList.add("block");

    restart.attributes.removeNamedItem("hidden");
  } else if (check_winner() === 2) {
    restartBox.classList.add("block");

    winner.textContent = "O'yinchi 2";
    restart.attributes.removeNamedItem("hidden");
  } else if (
    blocks[0].innerHTML !== "" &&
    blocks[1].innerHTML !== "" &&
    blocks[2].innerHTML !== "" &&
    blocks[3].innerHTML !== "" &&
    blocks[4].innerHTML !== "" &&
    blocks[5].innerHTML !== "" &&
    blocks[6].innerHTML !== "" &&
    blocks[7].innerHTML !== "" &&
    blocks[8].innerHTML !== ""
  ) {
    restartBox.classList.add("block");

    winner.textContent = "Tenglik";
    restart.attributes.removeNamedItem("hidden");
  }
};

const get_turn = function () {
  if (turn.textContent === "O'yinchi 1: X") {
    turn.textContent = "O'yinchi 2: O";
    return 1;
  }
  turn.textContent = "O'yinchi 1: X";
  return 0;
};

const get_sign = function () {
  playerToPlay = get_turn();

  if (playerToPlay === 1) {
    return '<i class="fab fa-opera"></i>';
  }

  return '<i class="fas fa-times"></i>';
};

const check_winner = function () {
  if (
    blocks[0].innerHTML === blocks[3].innerHTML &&
    blocks[3].innerHTML === blocks[6].innerHTML &&
    blocks[6].innerHTML !== ""
  ) {
    if (blocks[3].textContent === '< class="fas fa-times">') {
      return 1;
    }

    return 2;
  } else if (
    blocks[1].innerHTML === blocks[4].innerHTML &&
    blocks[4].innerHTML === blocks[7].innerHTML &&
    blocks[7].innerHTML !== ""
  ) {
    if (blocks[4].innerHTML === '< class="fas fa-times">') {
      return 1;
    }

    return 2;
  } else if (
    blocks[2].innerHTML === blocks[5].innerHTML &&
    blocks[5].innerHTML === blocks[8].innerHTML &&
    blocks[8].innerHTML !== ""
  ) {
    if (blocks[5].innerHTML === '<i class="fas fa-times"></i>') {
      return 1;
    }

    return 2;
  } else if (
    blocks[0].innerHTML === blocks[1].innerHTML &&
    blocks[1].innerHTML === blocks[2].innerHTML &&
    blocks[2].innerHTML !== ""
  ) {
    if (blocks[1].innerHTML === '<i class="fas fa-times"></i>') {
      return 1;
    }

    return 2;
  } else if (
    blocks[3].innerHTML === blocks[4].innerHTML &&
    blocks[4].innerHTML === blocks[5].innerHTML &&
    blocks[5].innerHTML !== ""
  ) {
    if (blocks[4].innerHTML === '<i class="fas fa-times"></i>') {
      return 1;
    }

    return 2;
  } else if (
    blocks[6].innerHTML === blocks[7].innerHTML &&
    blocks[7].innerHTML === blocks[8].innerHTML &&
    blocks[8].innerHTML !== ""
  ) {
    if (blocks[7].innerHTML === '< class="fas fa-times">') {
      return 1;
    }

    return 2;
  } else if (
    blocks[0].innerHTML === blocks[4].innerHTML &&
    blocks[4].innerHTML === blocks[8].innerHTML &&
    blocks[8].innerHTML !== ""
  ) {
    if (blocks[4].innerHTML === '< class="fas fa-times">') {
      return 1;
    }

    return 2;
  } else if (
    blocks[2].innerHTML === blocks[4].innerHTML &&
    blocks[4].innerHTML === blocks[6].innerHTML &&
    blocks[6].innerHTML !== ""
  ) {
    if (blocks[4].innerHTML === '< class="fas fa-times">') {
      return 1;
    }

    return 2;
  }

  return false;
};

const restart_game = function () {
  location.reload();
};

for (let index = 0; index < blocks.length; index++) {
  blocks[index].addEventListener("click", click_block);
}

restart.addEventListener("click", restart_game);
