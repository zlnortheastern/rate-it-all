import RatingObject from "./RatingObject";

export default class Thread {

  ratingObjects = [];

  constructor(tag = [], title = "N/A", threadImage = "imageNotFound.jpg", description) {
    this.tag = tag;
    this.title = title;
    this.threadImage = threadImage;
    this.description = description;
  }

  addRatingObject(name, image, introduction){
    this.ratingObjects.push(new RatingObject(name, image, introduction));
  }

  getTags() {
    return this.tag;
  }

  getTitle() {
    return this.title;
  }

  getThreadImage() {
    return this.threadImage;
  }

  getDescription() {
    return this.description;
  }
}