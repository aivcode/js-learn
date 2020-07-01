/* to push an existing repository from the command line: 
  git remote add origin https://github.com/aivcode/js-learn.git
  git push -u origin master 
*/

// Prototypes
const Animal = function(options) { // функция явл. конструктором класса
  this.name = options.name
  this.color = options.color

  // реализовав метод в конструкторе, мы уже не сможем его модифицировать:
  this.voice = function() {
    console.log('Base voice from', this.name)
  }
}

/* 
  добавление метода через прототип
  подобная реализация даёт доступ к методу для его возможной модификации
*/
// Animal.prototype.voice = function() {
//   console.log('Base voice from', this.name)  
// }

const dog = new Animal({name: 'Rex', color: '#fff'}) // создаём экземпляр класса

const Cat = function(options) {
  // с помощью apply делегируем на this содержимое options (св-ва Animal)
  Animal.apply(this, arguments)
  this.hasTail = options.hasTail
  this.type = 'cat' 
}

const cat = new Cat({name: 'Murzik', color: '#000', hasTail: true})
console.log(cat);

