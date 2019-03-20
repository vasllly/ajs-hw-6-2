export default function getSpecialAttack(object) {
  const result = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const value of object.special) {
    const { name, icon, description = 'Описание недоступно' } = value;
    result.push({ name, icon, description });
  }
  return result;
}
