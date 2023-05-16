// const video = document.querySelector("#video");

// document.addEventListener("visibilitychange", () => {
//   if (document.visibilityState === "visible") {
//     video.play();
//   } else {
//     video.pause();
//   }
// });

const getQuote = async () => {
  if (document.visibilityState === "visible") {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const { content, author, dateAdded } = await response.json();
      const parsedQuote = `
          <q>${content}</q> <br> 
          <p>- ${author}</p><br> 
          <p>Added on ${dateAdded}</p>`;
      quote.innerHTML = parsedQuote;
    } catch (error) {
      console.error(error);
    }
  }
};

getQuote();

setInterval(getQuote, 10000);
