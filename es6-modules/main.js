import { dogFactory, catFactory } from "./factories/dogFactory";
import "./style.css";

const dog1 = dogFactory("Doggy", "Husky");
console.log(dog1);

const cat1 = catFactory("Puss", "Parsian");
console.log(cat1);

document.querySelector("#app").innerHTML = `
  <div>
   <p>My dog name is ${dog1.name} and he is a ${dog1.breed}</p>
   <p>My cat name is ${cat1.name} and he is a ${cat1.breed}</p>
  </div>
`;
