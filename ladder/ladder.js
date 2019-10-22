const ladder = {
  step: 0,
  up() {
    ++this.step
    return this
  },
  down() {
    --this.step
    return this
  },
  showStep: function() {
    return this.step
  }
};
module.exports = ladder;
