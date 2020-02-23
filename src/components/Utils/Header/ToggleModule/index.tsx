const ToggleModule: React.FC<{
  onClick: () => void;
  state: boolean;
  label: JSX.Element;
}> = ({ onClick, state, label, children }) => {
  return (
    <div style={{ width: state ? 320 : 40 }}>
      <button onClick={onClick}>{label}</button>
      {state && children}

      <style jsx>{`
        div {
          position: relative;
          margin-right: -1;
          height: 40px;
          border-bottom: 1px solid;
          transition: width 300ms cubic-bezier(1, 0, 0, 1);
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
