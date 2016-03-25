import {mount, render} from "enzyme";
import {ExampleComponent} from "../../src/index.tsx";
import {SearchkitManager} from "searchkit";
import * as React from "react";

describe("example", () => {

  beforeEach(() => {
    this.searchkit = SearchkitManager.mock()
    this.container = mount(<ExampleComponent searchkit={this.searchkit}/>)
  })

  it("should pass", () => {
    expect(this.container.text()).toBe("Example component")
  })

});
