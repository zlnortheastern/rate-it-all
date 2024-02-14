export default class Rating{
  constructor(rating = 0, comment){
    this.rating = rating;
    this.comment = comment;
  }

  getRating(){
    return this.rating;
  }
  
  getComment(){
    return this.comment;
  }

}