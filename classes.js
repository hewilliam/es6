// class Monster {
//     constructor(object) {
//         this.health = 100,
//         this.name = object.name
//     }
//   }
  
//   const ogre = new Monster({name: doug})
  

  class Monster {
    constructor(options) {
      this.health = 100;
      this.name = options.name
    }
  }
  
  class Snake extends Monster{ //remember to use extends to grab properties from MONSTER and use SUPER in the subclass
      constructor(options) {
          super(options)
      }
      
      bite(snakey) {
          return snakey.health = snakey.health -10;
      }
  }