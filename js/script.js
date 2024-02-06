function fetchDefinition1() {
  const wordInput = document.getElementById("wordInput").value;
  const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const definitionResult = document.getElementById("definitionResult");

      console.log(data);
      if (data.length > 0) {
        const definition = data[0].meanings[0].definitions[0].definition;
        const synonyms = data[0].meanings[0].synonyms;
        definitionResult.innerHTML = `<p><strong>Definition:</strong> ${definition}</p>`;
      } else {
        definitionResult.innerHTML = "<p>No definition found.</p>";
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      const definitionResult = document.getElementById("definitionResult");
      definitionResult.innerHTML = "<p>Error fetching definition.</p>";
    });
}
