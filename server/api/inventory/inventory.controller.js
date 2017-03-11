import Inventory from './inventory.model';

module.exports = {
    create: create,
    remove: remove,
    get: get,
    getAll: getAll,
    find: find
};

function create (req, res, next) {
    var newItem = new Inventory(req.body.doc);
    newItem.created = new Date();

    return newItem.save()
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
    if (!req.params.id) {
        return handleError(res)({ msg: `Wrong or no id specified: ${id}` });
    }
    return Inventory.findById(id)
    .then(respondWithResult(res, 200))
    .catch(handleError(res));
}

function getAll (req, res, next) {
    return Inventory.find({})
    .then(respondWithResult(res, 200))
    .catch(handleError(res));
}

function find (req, res, next) {
    var query = genSearchQuery(req);
    
    return Inventory.find(query)
    .then(respondWithResult(res, 200))
    .catch(handleError(res));
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
    return {
        $or: [
            { 'name': { $regex: req.body.query, $options: 'i' } },
            { 'room': { $regex: req.body.query, $options: 'i' } }
        ]
    }
}