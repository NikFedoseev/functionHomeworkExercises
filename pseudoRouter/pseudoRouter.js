const Router = function() {
  this.bind = (path, type, cb) => (this[path] = { [type]: cb });

  this.runRequest = (path, type) =>
    this[path][type] ? this[path][type]() : "Error 404: Not Found";
};

module.exports = Router;
