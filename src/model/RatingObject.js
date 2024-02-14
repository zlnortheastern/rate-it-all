import Rating from "./Rating";

export default class RatingObject {

  ratings = [];

  constructor(name, objectImage, introduction){
    this.name = name;
    this.objectImage = objectImage;
    this.introduction = introduction;
  }

  addRating(rating, comment){
    this.ratings.push(new Rating(rating, comment));
  }

  getAvergeRating(){
    let sum = 0.0;

    if(this.ratings.length === 0){
      return sum;
    }

    for(let r of this.ratings){
      sum += r.getRating();
    }
    return sum/this.ratings.length;
  }

  getObjectName(){
    return this.name;
  }

  getObjectImage(){
    return this.objectImage;
  }

  getIntroduction(){
    return this.introduction;
  }
}