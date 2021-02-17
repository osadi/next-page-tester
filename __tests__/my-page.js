import React from "react";
import { getPage } from "next-page-tester";
describe("<App />", () => {
  it("renders", async () => {
    const { render } = await getPage({
      route: "/pren/whatever",
    });

    render();
  });
});
