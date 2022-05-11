// targetting the elements
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

// url for the api
const url = "https://icanhazdadjoke.com/";

btn.addEventListener("click", () => {
  console.log("you clicked me");
  terribleDadJoke();
});

// function for the fetch api
const terribleDadJoke = async () => {
  // loading text if internet is slow
  result.textContent = "Loading Terrible Joke...";
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      "User-Agent": "learning app",
    },
  });
  //  this is equal to a then(), what happens next?
  // well we want to get the json response
  const data = await response.json();
  result.textContent = data.joke;
};

// invoking the function so it displays onload
terribleDadJoke();
