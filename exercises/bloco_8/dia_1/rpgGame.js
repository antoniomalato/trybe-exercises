const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
  const min = 15;
  const max = dragon.strength

  const dragonDMG = Math.floor((Math.random() * (max - min) + min))

  return dragonDMG
};
console.log(dragonDamage('dragon'))

const warriorDamage = () => {
  const min = warrior.strength;
  const max = min * warrior.weaponDmg;

  const warriorDMG = Math.floor((Math.random() * (max - min) + min))
  return warriorDMG
}
console.log(dragonDamage('warrior'))


const mageAttack = () => {
  const mageMana = mage.mana;
  const minDmg = mage.intelligence;
  const maxDmg = minDmg * 2;
  const turnStats = {
    manaSpent: 0,
    damageDealt: 'Not enough mana...',
  };

  if (mageMana > 15) {
    const mageDamage = Math.floor((Math.random() * (maxDmg - minDmg)) + minDmg);
    turnStats.manaSpent = 15;
    turnStats.damageDealt = mageDamage;
    return turnStats;
  }
    return turnStats;
};

console.log(mageAttack('mage'))