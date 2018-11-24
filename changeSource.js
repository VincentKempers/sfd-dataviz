(function() {
  let jamesVP = {
    name: "James van Praagh",
    age: "50",
    books: [
      "Ghosts Among Us",
      "Reaching to Heaven",
      "Healing grief",
      "Looking Beyond",
      "Talking to heaven",
      "Heaven and Earth",
      "Meditations with James Van Praagh",
      "Tuning Into: Intuition/Abundance"
    ],
    tv: [],
    networth: "200.6 miljoen"
  };
  johnE = {
    name: " John Edward",
    age: "",
    books: [
      "infinite quest",
      "After Life",
      "One Last time",
      "Fallen Masters",
      "Crossing Over",
      "Practical Praying",
      "Final Beginnings",
      "Developing Your own Psychic Powers",
      "What If God Were the SUN"
    ],
    tv: [
      "Crossing Over with John Edward",
      "John Edward Cross Country",
      "EVOLVE (internet show)"
    ],
    networth: "3 miljoen"
  };

  let missC = {
    name: " Miss Cleo",
    age: "overleden",
    books: [
      "infinite quest",
      "After Life",
      "One Last time",
      "Fallen Masters",
      "Crossing Over",
      "Practical Praying",
      "Final Beginnings",
      "Developing Your own Psychic Powers",
      "What If God Were the SUN"
    ],
    tv: [
      "Crossing Over with John Edward",
      "John Edward Cross Country",
      "EVOLVE (internet show)"
    ],
    networth: "3 miljoen"
  };

  let changeSRC = {
    init() {
      let allItems = document.querySelector(".thecards").children;
      let infoPlace = document.querySelector(".info-med");
      let htmlValues = Object.values(allItems);
      htmlValues.forEach(i => {
        i.addEventListener("mouseover", event => {
          infoPlace.innerText = `
          <ul>
          <li>${medium.name}</li>
          <li>${medium.age}</li>
          <li>${medium.books}</li>
          <li>${medium.networth}</li>
          </ul>
          
          `;
          console.log(event.target.classList[0]);
        });
      });
    }
  };
  changeSRC.init();
})();
console.log("vim rules");
