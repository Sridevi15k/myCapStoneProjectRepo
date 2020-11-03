// export default function carMake(model, make) {
//   let makeJeep = `
//   <option id="modeljeep" value="Select Model">Select Model</option>
//   <option id="wrangler" value="Wrangler">Early Wrangler</option>
//   <option id="grandcherokee" value="grand cherokee">Grand Cherokee</option>
//   <option id="renegade" value="Renegade">Early Renegade</option>
//   <option id="compass" value="compass">Compass</option>
//   <option id="gladiator" value="gladiator">Gladiator</option>
//   <option id="cherokee" value="Cherokee">Cherokee</option>
//   `;
//   let makeVolkswagen = `
//   <option id="modelvolkswagen" value="Select Model">Select Model</option>
//   <option id="golf" value="Golf">Golf</option>
//   <option id="passat" value="Passat">Passat</option>
//   <option id="beetle" value="Beetle">Beetle</option>
//   <option id="jetta" value="Jetta">Jetta</option>
//   <option id="tiguan" value="Tiguan">Tiguan</option>
//   <option id="atlas" value="Atlas">Atlas</option>
//   `;
//   let makeChrysler = `
//   <option id="modelchrysler" value="Select Model">Select Model</option>
//   <option id="chryslernewyorker" value="Chrysler NewYorker">Chrysler NewYorker</option>
//   <option id="grandvoyager" value="Grand Voyager">Grand Voyager</option>
//   <option id="chrysler300" value="Chrysler 300">Chrysler 300</option>
//   <option id="chryslerpacifica" value="Chrysler Pacifica">Chrysler Pacifica</option>
//   <option id="chryslervoyager" value="Chrysler Voyager">Chrysler Voyager</option>
//   <option id="dodge" value="Dodge">Dodge</option>
//   `;
//   let makeGmc = `
//   <option id="modelgmc" value="Select Model">Select Model</option>
//   <option id="yukon" value="Yukon">Yukon</option>
//   <option id="acadia" value="Acadia">Acadia</option>
//   <option id="terrain" value="Terrain">Terrain</option>
//   <option id="Canyon" value="Canyon">Canyon</option>
//   <option id="Sierra" value="Sierra">Sierra</option>
//   <option id="Savana"value="Savana">Savana</option>
//   `;

//   model.addEventListener("change", e => {
//     if (model.value === "GMC") {
//       make.innerHTML = makeGmc;
//     }

//     if (model.value === "Chrysler") {
//       make.innerHTML = makeChrysler;
//     }

//     if (model.value === "Volkswagen") {
//       make.innerHTML = makeVolkswagen;
//     }

//     if (model.value === "Jeep") {
//       make.innerHTML = makeJeep;
//     }
//   });
// }
