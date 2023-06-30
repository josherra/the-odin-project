const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");
admitted.textContent = "Admit: ";
refused.textContent = "Refuse: ";

// loop starts here
for (let i = 0; i < people.length; i++) {
  if (people[i].toLowerCase() != "phil" && people[i].toLowerCase() != "lola") {
    admitted.textContent += `${people[i]}, `;
  } else {
    refused.textContent += `${people[i]}, `;
  }
}

// Replace the last name in the list so there is no trailing comma.
function replaceLastComma(sentence) {
  let lastComma = sentence.lastIndexOf(",");
  let split = sentence.split("");
  split[lastComma] = ".";
  return split.join("").trim();
}

admitted.textContent = replaceLastComma(admitted.textContent);
refused.textContent = replaceLastComma(refused.textContent);
