const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "random-words5.p.rapidapi.com",
    "X-RapidAPI-Key": import.meta.env.VITE_WORDS_API_KEY,
  },
};

export const fetchWords = (length: number) => {
  try {
    return fetch(
      `https://random-words5.p.rapidapi.com/getMultipleRandom?count=1&wordLength=${length}`,
      options
    ).then((response) => response.json());
  } catch (error) {
    alert("Something went wrong");
  }
};
