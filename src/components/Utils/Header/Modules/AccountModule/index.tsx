import { useRef } from "react";
import { useToggleContext } from "../../../../../lib/context/ToggleContext";
import { useOnClickOutside } from "../../../../../lib/hooks/useOnClickOutside";

const AccountModule: React.FC<{}> = () => {
  const { dispatch } = useToggleContext();
  const wrapper = useRef<HTMLDivElement>(null);
  useOnClickOutside(wrapper, () => dispatch({ type: "ALL_FALSE" }));
  return (
    <div ref={wrapper}>
      <div>
        <form>
          <input type="email" placeholder="Email..." />
        </form>
      </div>
      Account Module
    </div>
  );
};

export default AccountModule;
