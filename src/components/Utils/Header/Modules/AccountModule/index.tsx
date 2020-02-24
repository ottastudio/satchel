import { useRef } from "react";
import { useTransition, config, animated } from "react-spring";
import { useToggleContext } from "../../../../../lib/context/ToggleContext";
import { useOnClickOutside } from "../../../../../lib/hooks/useOnClickOutside";

import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";
import Note from "./Note";

const AccountModule: React.FC<{}> = () => {
  const { dispatch } = useToggleContext();
  const wrapper = useRef<HTMLDivElement>(null);
  useOnClickOutside(wrapper, () => dispatch({ type: "ALL_FALSE" }));

  const items = [
    { label: "login", element: FormLogin },
    { label: "register", element: FormRegister },
    { label: "note", element: Note }
  ];

  const transitions = useTransition(items, item => item.label, {
    config: config.gentle,
    from: { opacity: 0, transform: "translateY(50%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    leave: { opacity: 0, transform: "translateY(50%)" },
    trail: 150
  });
  return (
    <div ref={wrapper} className="account-module">
      {transitions.map(({ item, props, key }) => (
        <animated.div style={props} key={key}>
          <item.element />
        </animated.div>
      ))}

      <style jsx global>{`
        .account-module {
          padding-top: 5px;
        }
        .form-container {
          position: relative;
          margin-bottom: 0px;
          padding-right: 5px;
        }
        .form-container > button {
          height: 100%;
          border: none;
          background: none;
          color: currentColor;
          font-size: inherit;
          cursor: pointer;
          padding: 0;
          outline: none;
          position: absolute;
          right: 1px;
          top: 0;
          transform: translateX(100%);
          width: 79px;
          border: 1px solid;
          color: var(--accent-low);
        }
        .form-container > button:disabled {
          color: var(--accent-low);
        }
        .form-container > button:disabled:hover {
          text-decoration: none;
        }
        .form-container > button:hover,
        .form-container > button:focus {
          color: var(--accent-high);
          text-decoration: underline;
        }

        .account-notes {
          color: var(--accent-low);
          font-size: 0.8rem;
          margin-right: 5px;
        }
      `}</style>
    </div>
  );
};

export default AccountModule;
