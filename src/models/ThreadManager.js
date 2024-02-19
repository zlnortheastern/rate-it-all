import Thread from "./Thread";
import myDB from "./MyDB.js";

export default class ThreadManager {
  constructor() {
    this.threads = [];
    this.myDB = new myDB();
  }
  async addThreadToDB(thread){
    return await this.myDB.addThread(thread);
  }

  async getThreadFromDB(){
    return await this.myDB.getThreads();
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