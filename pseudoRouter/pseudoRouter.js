const Router = function() {
  this.links = {}
  this.runRequest = function(url, type){
    try{
      return this.links[url][type]()
    }
    catch{
      return 'Error 404: Not Found'
    }
  }
  this.bind = function(url, type, callback){
    if(!this.links[url]){
      this.links[url] = {}
    }
    this.links[url][type] = callback
  }
};

module.exports = Router;
