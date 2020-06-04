const temperatures = [
  {
    city: "A Coruña",
    min: 17,
    max: 23,
  },
  {
    city: "Ferrol",
    min: 15,
    max: 27,
  },
  {
    city: "Lugo",
    min: 12,
    max: 31,
  },
  {
    city: "Ourense",
    min: 18,
    max: 35,
  },
  {
    city: "Pontevedra",
    min: 18,
    max: 29,
  },
];

// Temp. menor que 20: fondo verde
// Temp. entre 20 y 30: fondo naranja
// Temp. mayor de 30: fondo rojo

/*
  <table>
    <caption>Temperaturas</caption>
    <thead>
      <th>Ciudad</th>
      <th>Mínima</th>
      <th>Máxima</th>
    </thead>
    <tr>
      <td>A Coruña</td>
      <td>17</td>
      <td>23</td>
    </tr>
    tr....
  </table>

*/

const section = document.querySelector("section.temperatures");

const table = document.createElement("table");
section.append(table);

const caption = document.createElement("caption");
caption.textContent = "Temperaturas";
table.append(caption);

const thead = document.createElement("thead");
thead.innerHTML = "<th>Ciudad</th> <th> Mínima</th > <th>Máxima</th>";
table.append(thead);

for (const temp of temperatures) {
  const tr = document.createElement("tr");

  const cityCol = document.createElement("td");
  cityCol.textContent = temp.city;
  tr.append(cityCol);

  const minCol = document.createElement("td");
  minCol.textContent = temp.min;
  minCol.classList.add(getClassName(temp.min));
  tr.append(minCol);

  const maxCol = document.createElement("td");
  maxCol.textContent = temp.max;
  maxCol.classList.add(getClassName(temp.max));
  tr.append(maxCol);

  table.append(tr);
}

function getClassName(temperature) {
  if (temperature < 20) {
    return "low";
  } else if (temperature < 30) {
    return "medium";
  } else if (temperature < 40) {
    return "high";
  }
}
