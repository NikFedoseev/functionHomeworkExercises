const Router = function() {
  this.bind = (url, method, cb) => {
    this.url = url;
    this.method = method;
    this.cb = cb;
    
  };
  this.runRequest = (url, method) => {
    if (url === this.url && method === this.method) {
      return this.cb();
    }
    return 'Error 404: Not Found';
  }
};

module.exports = Router;
