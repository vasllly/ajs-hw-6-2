import getSpecialAttack from '../src/js/script';

test('test', () => {
  const obj = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Тройной выстрел',
        icon: 'http://...',
      },
    ],
  };

  const received = getSpecialAttack(obj);
  const expected = [
    {
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      name: 'Тройной выстрел',
      icon: 'http://...',
      description: 'Описание недоступно',
    },
  ];
  expect(received).toEqual(expected);
});
