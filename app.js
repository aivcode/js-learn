/* to push an existing repository from the command line: 
  git remote add origin https://github.com/aivcode/js-learn.git
  git push -u origin master 
*/

// Prototypes
const Animal = function(options) { // функция явл. конструктором класса
  this.name = options.name
  this.color = options.color

  this.voice = function() {
    console.log('Base voice from', this.name)
  }
}

const dog = new Animal({name: 'Rex', color: '#fff'}) // создаём экземпляр класса
dog.voice()
// console.log(dog);
