import RatingObject from "./RatingObject";

export default class Thread {

  ratingObjects = [];

  constructor(tag = [], title = "N/A", threadImage = "imageNotFound.jpg", description) {
    this.threadTag = tag;
    this.threadTitle = title;
    this.threadImage = threadImage;
    this.threadDescription = description;
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