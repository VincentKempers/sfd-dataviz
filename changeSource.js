(function() {
  let medium = {
    jamesVP: {
      name: "James van Praagh",
      age: "60",
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
      networth: "200.6 miljoen",
      slogan: "Rijkste medium op het moment",
      audio: ""
    },
    johnE: {
      name: " John Edward",
      age: "49",
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
      networth: "3 miljoen",
      slogan: "Koudste lezer die er is",
      audio: ""
    },
    missC: {
      name: " Miss Cleo",
      age: "overleden",
      books: ["Miss cleo Tarot power deck"],
      tv: [
        "Miss Cleo",
        "Miss Cleo psychic advise",
        "Miss Cleo tarot power",
        "Mind and spirit"
      ],
      networth: "1 miljoen",
      slogan: "Geboren in Los Angeles maar net  uit Jamaica?",
      audio: ""
    },
    hollywoodM: {
      name: "Tyler Henry",
      age: "22",
      books: ["Between Two Worlds: Lessons from the other side"],
      tv: ["Hollywood medium"],
      networth: "3 miljoen",
      slogan: "Glamour medium ontmaskert",
      audio: ""
    }
  };

  let changeSRC = {
    init() {
      let allItems = document.querySelector(".thecards").children;
      let infoPlace = document.querySelector(".info-med");
      let htmlValues = Object.values(allItems);
      htmlValues.forEach(i => {
        i.addEventListener("mouseover", event => {
          console.log(event.target.classList[0]);
          let targetName = event.target.classList[0];
          let rightMedium = medium[`${targetName}`];

          infoPlace.innerHTML = `
          <ul>
            <li> ${rightMedium.name}</li>
            <li><strong> ${rightMedium.slogan}</strong></li>
          </ul>          
          `;
        });
      });
    }
  };
  changeSRC.init();
})();
