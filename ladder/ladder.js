const ladder = {
  step: 0,
  up() {
    this.step = this.step + 1.5;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    return this.step;
  }
};
module.exports = ladder;
