import * as React from "react";
import * as ReactDOM from "react-dom";

import {
  SearchkitManager,SearchkitProvider,
  SearchBox, Hits, RefinementListFilter, Pagination,
  MenuFilter, HitsStats, SortingSelector, NoHits,
  ItemList, CheckboxItemList, ItemHistogramList,
  Tabs, TagCloud, Toggle, Select
} from "searchkit";

import {ExampleComponent} from "../../../src/index";

const host = "http://demo.searchkit.co/api/movies"
const searchkit = new SearchkitManager(host)
const _ = require("lodash")

class App extends React.Component<any, any> {

  render() {
    return (
      <SearchkitProvider searchkit={searchkit}>
        <div>
          <ExampleComponent/>
        </div>
      </SearchkitProvider>
    );
  }

}

ReactDOM.render(<App/>, document.getElementById("root"))
