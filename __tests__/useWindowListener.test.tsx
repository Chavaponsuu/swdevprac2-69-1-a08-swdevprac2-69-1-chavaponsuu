import { render } from "@testing-library/react";
import useWindowListener from "@/hooks/useWindowListener";

function ListenerHarness({ listener }: { listener: EventListener }) {
  useWindowListener("contextmenu", listener);
  return null;
}

describe("useWindowListener", () => {
  it("registers one window listener and removes it on unmount", () => {
    const listener = jest.fn();
    const addEventListener = jest.spyOn(window, "addEventListener");
    const removeEventListener = jest.spyOn(window, "removeEventListener");

    const { rerender, unmount } = render(<ListenerHarness listener={listener} />);
    rerender(<ListenerHarness listener={listener} />);

    expect(addEventListener).toHaveBeenCalledTimes(1);
    expect(addEventListener).toHaveBeenCalledWith("contextmenu", listener);

    unmount();

    expect(removeEventListener).toHaveBeenCalledWith("contextmenu", listener);
  });
});
