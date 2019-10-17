const Router = function() {
  this.reqests = {};
  this.bind = function(pathname, method, cb) {
    this.reqests[method] = {};
    this.reqests[method][pathname] = cb;
  };
  this.runRequest = function(pathname, method) {
    try {
      return this.reqests[method][pathname]();
    } catch (_) {
      return "Error 404: Not Found";
    }
  };
};

module.exports = Router;
