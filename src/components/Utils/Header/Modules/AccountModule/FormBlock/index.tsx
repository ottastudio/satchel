import { ChangeEvent } from "react";

export interface FormBlockProps {
  id: string;
  name: string;
  label: string | boolean | undefined;
  type: "email" | "password" | "text";
  placeholder: string;
  value: string | number | string[] | undefined;
  onChange: (e: ChangeEvent<any>) => void;
  autoFocus?: boolean;
}

const FormBlock: React.FC<FormBlockProps> = ({
  id,
  name,
  label,
  type,
  placeholder,
  value,
  onChange,
  autoFocus = false
}) => {
  return (
    <div style={{ position: "relative", marginBottom: 5 }}>
      <label htmlFor="login-email">{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoFocus={autoFocus ? true : false}
      />

      <style jsx>{`
        label {
          position: absolute;
          right: 5px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 0.6rem;
          text-transform: capitalize;
        }
        input {
          -webkit-appearance: none;
          outline: none;
          width: 100%;
          background: none;
          color: currentColor;
          border: 1px solid var(--accent-low);
          height: 40px;
          font-size: inherit;
          border-radius: 0rem;
          padding: 0px 5px;
          transition: border var(--main-transition);
        }
        input:focus {
          border: 1px solid var(--accent-hight);
          border-bottom: 1px solid;
        }
        input::-webkit-input-placeholder {
          color: var(--accent-low);
        }
        input:focus::-webkit-input-placeholder {
          opacity: 0;
          transition: opacity var(--main-transition);
        }
      `}</style>
    </div>
  );
};

export default FormBlock;
