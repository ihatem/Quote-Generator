import axios from "axios";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const colors = ["#1abc9c", "#9b59b6", "#f1c40f", "#e67e22", "#2ecc71"];

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("splash-screen").style.display = "none";
    document.getElementById("main").style.display = "flex";
  }, 1000);
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand&_=${getRandomInt(
          9999999999
        )}`
      );

      if (data.length > 0) {
        const { content, title } = data[getRandomInt(9)];
        const titleEl = document.getElementById("quote-source");
        const contentEl = document.getElementById("quote-content");
        const numWords = content.rendered.split(" ").length;
        titleEl.innerHTML = title.rendered;
        contentEl.innerHTML = content.rendered;

        if (numWords < 10) {
          contentEl.style.fontSize = "40px";
          contentEl.style.lineHeight = "2.5rem";
        } else if (numWords >= 10 && numWords < 20) {
          contentEl.style.fontSize = "30px";
          contentEl.style.lineHeight = "2rem";
        } else if (numWords >= 10 && numWords < 20) {
          contentEl.style.fontSize = "24px";
          contentEl.style.lineHeight = "1.7rem";
        } else if (numWords >= 20 && numWords < 30) {
          contentEl.style.fontSize = "22px";
          contentEl.style.lineHeight = "1.3rem";
        } else if (numWords >= 30 && numWords < 40) {
          contentEl.style.fontSize = "20px";
          contentEl.style.lineHeight = "1.3rem";
        } else {
          contentEl.style.fontSize = "16px";
          contentEl.style.lineHeight = "1.2rem";
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  fetchData();

  const randomBtnEl = document.querySelector(".get-another-quote-button");

  randomBtnEl.addEventListener("click", () => {
    let tempColors = [...colors];
    const randomInt = getRandomInt(tempColors.length);
    document.body.style.backgroundColor = tempColors[randomInt];
    delete tempColors[randomInt];
    if (tempColors.length === 0) tempColors = [...colors];
    fetchData();
  });
});
