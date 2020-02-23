import { useToggleContext } from "../../../../lib/context/ToggleContext";
import { useRef } from "react";
import { useSpring, useTransition, useChain, animated } from "react-spring";
import { useOnClickOutside } from "../../../../lib/hooks/useOnClickOutside";

const ToggleModule: React.FC<{
  onClick: () => void;
  state: boolean;
  label: JSX.Element;
}> = ({ onClick, state, label, children }) => {
  const { dispatch } = useToggleContext();
  const springRef = useRef();
  const proping = useSpring({
    ref: springRef,
    config: { mass: 1, tension: 500, friction: 50 },
    from: { width: 40, height: 40, border: "1px solid" },
    to: {
      width: state ? 320 : 40,
      height: state ? 400 : 40,
      border: "1px solid"
    }
  });
  const transRef = useRef();
  const transitions = useTransition(state, null, {
    ref: transRef,
    config: { mass: 1, tension: 500, friction: 50 },
    from: { opacity: 0, borderTop: "1px solid" },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  useChain([springRef, transRef]);

  const wrapper = useRef();
  useOnClickOutside(wrapper, () => dispatch({ type: "ALL_FALSE" }));

  return (
    <div ref={wrapper} style={{ position: "relative" }}>
      <animated.div style={proping}>
        <button disabled={state ? true : false} onClick={onClick}>
          {label}
        </button>
        {transitions.map(
          ({ item, key, props }) =>
            item && (
              <animated.div key={key} style={props}>
                {children}
              </animated.div>
            )
        )}
      </animated.div>

      <style jsx>{`
        div {
          margin-right: -1px;
        }
        button {
          width: 38px;
          height: 38px;
          background: none;
          border: none;
          color: currentColor;
          font-size: inherit;
          overflow: hidden;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default ToggleModule;
