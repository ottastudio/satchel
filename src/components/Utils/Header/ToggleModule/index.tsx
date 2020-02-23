const ToggleModule: React.FC<{
  onClick: () => void;
  state: boolean;
  label: JSX.Element;
  name: string;
}> = ({ onClick, state, label, children, name }) => {
  return (
    <div
      className={
        state ? "module-wrapper module-wrapper__active" : "module-wrapper"
      }
    >
      <button aria-hidden="true" name={`toggle-${name}`} onClick={onClick}>
        {label}
      </button>
      {state && children}

      <style jsx>{`
        .module-wrapper {
          position: relative;
          margin-right: -1px;
          width: 40px;
          height: 40px;
          border-bottom: 1px solid;
          transition: width 300ms cubic-bezier(1, 0, 0, 1);
        }
        .module-wrapper__active {
          width: 320px;
        }
        button {
          width: 40px;
          height: 40px;
          background: none;
          border: none;
          color: currentColor;
          font-size: inherit;
          overflow: hidden;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid;
        }
      `}</style>
    </div>
  );
};

export default ToggleModule;
