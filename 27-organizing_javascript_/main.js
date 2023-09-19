// MMORPG
function pokemonFactory(name, level) {
  let health = level * 2;

  const getLevel = () => level;
  const getName = () => name;
  const die = () => console.log("I'm dead!");
  const damage = (x) => {
    health -= x;
    if (health <= 0) die();
  };

  const attack = (enemy) => {
    if (level < enemy.getLevel()) {
      damage(1);
      console.log(`${enemy.getName()} has damage ${name}`);
    }

    if (level >= enemy.getLevel()) {
      enemy.damage(5);
      console.log(`${name} has damage ${enemy.getName()}`);
    }
  };

  return { attack, damage, getLevel, getName };
}

const ashPLayer = pokemonFactory("pikachu", 10);
const computerPlayer = pokemonFactory("ratata", 5);

ashPLayer.attack(computerPlayer);
computerPlayer.attack(ashPLayer);
