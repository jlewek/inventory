import Inventory from './inventory.model';

module.exports = {
    create: create,
    removeItem: removeItem,
    getItems: getItems
};

function create (req, res, next) {
    return Inventory.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

function removeItem (req, res, next) {

}

function getItems (req, res, next) {

}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if(entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}