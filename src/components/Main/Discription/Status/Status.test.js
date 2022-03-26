import React from "react";
import { create } from "react-test-renderer";
import Status from "./Status";

describe("Status component", () => {
    test("input value should be displayed", () => {
        const component = create(<Status status="ezgame" />);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("ezgame");
    });
});