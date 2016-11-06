const Entity = require('./Entity')

class Wholesale extends Entity {
  static get getAsInfo () {
    return false
  }

  static get path () {
    return '/api_v1_master_wholesale'
  }
}

module.exports = Wholesale
