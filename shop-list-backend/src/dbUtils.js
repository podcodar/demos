const DB = {
  1: {
    id: 1,
    description: 'Arroz',
    quantity: 1,
    unit: 'kg',
  },
  2: {
    id: 2,
    description: 'Carne - Alcatra',
    quantity: 5,
    unit: 'kg',
  },
  3: {
    id: 3,
    description: 'Carne - Lombo',
    quantity: 2,
    unit: 'kg',
  },
  4: {
    id: 4,
    description: 'Carvão',
    quantity: 5,
    unit: 'kg',
  },
  5: {
    id: 5,
    description: 'Cerveja',
    quantity: 10,
    unit: 'l',
  },
  6: {
    id: 6,
    description: 'Refrigerante',
    quantity: 2,
    unit: 'l',
  },
};

let idCounter = Object.keys(DB).length;
const genNewId = () => {
  idCounter += 1;
  return idCounter;
};

const checkItemExists = (id) => {
  if (!(id in DB)) {
    throw new Error(`Item ${id} does not exist`);
  }
};

const getItems = () => Object.values(DB);

const getItem = (id) => {
  checkItemExists(id);
  return DB[id];
};

const createItem = (itemProps) => {
  const itemId = genNewId();
  DB[itemId] = { ...itemProps, id: itemId };
  return DB[itemId];
};

const updateItem = (id, newItemProps) => {
  const item = getItem(id);
  DB[id] = { ...item, ...newItemProps, id };
  return DB[id];
};

const deleteItem = (id) => {
  checkItemExists(id);
  delete DB[id];
};

module.exports = {
  createItem,
  deleteItem,
  getItem,
  getItems,
  updateItem,
};
