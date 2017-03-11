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
    var id = req.params.id;
    if (!req.param.id) {
        return handleError(res)({ msg: `Wrong or no id specified: ${id}` });
    }
    return Inventory.getItemById(id)
    .then(respondWithResult(res, 200))
    .catch(handleError(res));
}

function find (req, res, next) {
    return Inventory.find(genSearchQuery(req));
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

function genSearchQuery (req) {
    if (req.body.all) {
        return {};
    }
    return {
        $or: [
            { 'name': { $regex: req.body.query, $options: 'i' } },
            { 'room': { $regex: req.body.query, $options: 'i' } }
        ]
    }
}