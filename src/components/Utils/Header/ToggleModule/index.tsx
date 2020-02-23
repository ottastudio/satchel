const ToggleModule: React.FC<{
  onClick: () => void;
  state: boolean;
  label: JSX.Element;
}> = ({ onClick, state, label, children }) => {
  return (
    <div
      style={{
        marginRight: -1,
        height: 40,
        width: state ? 320 : 40,
        borderBottom: "1px solid",
        position: "relative",
        transition: "width 300ms cubic-bezier(1,0,0,1)"
      }}
    >
      <button onClick={onClick}>{label}</button>

      {state && children}
      <style jsx>{`
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
