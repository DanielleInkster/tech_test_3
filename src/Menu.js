class Menu{
  constructor(menuFilePath) {
    this.options = (require('../hipstercoffee.json'))[0]['prices']
  }
}

let menu = new Menu('../hipstercoffee.json')
console.log(menu.options)