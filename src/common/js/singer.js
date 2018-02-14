export default class Singer {
  constructor({id, name}) {
    this.id = id;
    this.name = name;
    this.avatar = require('../../assets/images/singer/' + id + '.jpg')
  }
}
