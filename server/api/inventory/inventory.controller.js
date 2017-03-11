import Inventory from './inventory.model';

module.exports = {
    create: create,
    remove: remove,
    get: get,
    find: find
};

function create (req, res, next) {
    return Inventory.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

function remove (req, res, next) {
    return Inventory.removeItem(req.body)
    .then(respondWithResult(res, 200))
    .catch(handleError(res));
}

function get (req, res, next) {
    return Inventory.getItemById(req.query)
    .then(respondWithResult(res, 200))
    .catch(handleError(res));
}

function find (req, res, next) {

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