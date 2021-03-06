import { getInteriors, setInterior } from "./database.js";

const interiors = getInteriors();

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "interiors") {
          setInterior(parseInt(event.target.value))
        }
    }
)


export const Interiors = () => {
  let html = "<h2>Interiors</h2>";

  html += '<select id="interiors">';
  html += '<option value="0">Select an Interior</option>';

  const arrayOfInteriors = interiors.map((interiors) => {
    return `<option value="${interiors.id}">${interiors.fabric}</option>`;
  });

  html += arrayOfInteriors.join("");
  html += "</select>";
  return html;
};
