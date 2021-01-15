class Media{
    constructor(name){
      this._name = name;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    get name(){
      return this._name;
    }
    get isCheckedOut(){
      return this._isCheckedOut;
    }
    get ratings(){
      return this._ratings;
    }
    set ratings(rating){
      this._ratings.push(rating);
    }
    toggleCheckOutStatus(){
      this._isCheckedOut = !this._isCheckedOut;
    }
    addRating(rating){
      this._ratings.push(rating);
    }
    getAverageRating(){
      return (this._ratings.reduce((acc, current) => acc+current)) / this._ratings.length;
    }
  }
  
  class Book extends Media{
    constructor(author, title, pages){
      super(title);
      this._author = author;
      this._pages = pages;
    }
    get autor(){
      return this._author;
    }
    get pages(){
      return this._pages;
    }
  }
  class Movie extends Media {
    constructor(title, director, runTime){
      super(title);
      this._director = director;
      this._runTime= runTime;
    }
    get director(){
      return this._driector;
    }
    get runTime(){
      return this._runTime;
    }
  }
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating());
  const speed = new Movie('Speed', 'Jan de Bont', 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isChechedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());
  
  
  
  
  