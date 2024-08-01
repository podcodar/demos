const express = require('express');

const dbUtils = require('../dbUtils');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send(dbUtils.getItems());
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;

  try {
    res.status(200).send(dbUtils.getItem(id));
  } catch (error) {
    next(error);
  }
});

router.post('/', (req, res, next) => {
  const itemProps = req.body;
  res.status(201).send(dbUtils.createItem(itemProps));
});

router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const itemProps = req.body;

  try {
    res.status(201).send(dbUtils.updateItem(id, itemProps));
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', (req, res, next) => {
  const { id } = req.params;

  try {
    res.status(200).send(dbUtils.deleteItem(id));
  } catch (error) {
    next(error);
  }
});

// Error handler
// ref: https://expressjs.com/en/guide/error-handling.html
router.use((err, req, res, next) => {
  // TODO: improve function to handle different type of errors
  console.error(err);
  res.status(404).send({ errorMessage: err.message });
});

module.exports = router;
