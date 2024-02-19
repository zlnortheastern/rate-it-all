import Thread from "./Thread";

export default class ThreadManager {
  constructor() {
    this.threads = [];
  }

  addThread(tag, title, image, description, objects) {
    let thread = new Thread(tag, title, image, description);
    for (let object of objects) {
      thread.addRatingObject(object.objectName, object.objectImage, object.introduction);
    }
    this.threads.push(thread);
  }

  getThreads(){
    return this.threads;
  }

  printThreads(){
    for(let thread of this.threads){
      console.log(JSON.stringify(thread));
    }
  }
}