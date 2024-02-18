import React, { Component } from "react";
import BaseTemplate from "../templates/BaseTemplate";
import CategoryList from "../components/CategoryList";
import ThreadList from "../components/ThreadList";
export default class HomePage extends Component {
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
                <ThreadList />
              </div>
            </div>
          </div>
        </BaseTemplate>
      </div>
    );
  }
}