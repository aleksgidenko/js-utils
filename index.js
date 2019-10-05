'use strict'

function get (obj, path, def = undefined) {
  path = path.replace(/\[(-?\d+)\]/g, '.$1').split('.')
  return path.reduce((o, k) => {
    return (o && o[k]) ? o[k] : def
  }, obj)
}

module.exports = {
  get
}
