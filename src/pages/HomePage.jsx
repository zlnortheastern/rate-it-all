import React, { Component } from "react";
import BaseTemplate from "../templates/BaseTemplate";
import CategoryList from "../components/CategoryList";
import ThreadList from "../components/ThreadList";
import ThreadManager from "../models/ThreadManager";


export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.threadManager = new ThreadManager();

    this.state = {
      threads:[],
    };
  }

  refreshInteractions = async () => {
    this.setState({ threads: await this.threadManager.getThreadFromDB()});
  };

  async componentDidMount() {
    console.log("IndexPage.componentDidMount()", "Fetching interactions...");
    await this.refreshInteractions();
  }

  render() {
    return (
      <div>
        <BaseTemplate>
          <div className="row gx-3">
            <div className="col-2">
              <div className="p-3">
                <CategoryList />
              </div>
            </div>
            <div className="col">
              <div className="p-3">
                <ThreadList threads={this.state.threads}/>
              </div>
            </div>
          </div>
        </BaseTemplate>
      </div>
    );
  }
}