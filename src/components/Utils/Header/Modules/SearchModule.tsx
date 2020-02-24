import { Formik, Form } from "formik";

const SearchModule: React.FC<{}> = () => {
  return (
    <div>
      <Formik
        initialValues={{ search: "" }}
        onSubmit={values => alert(JSON.stringify(values, null, 2))}
      >
        {({ handleChange, values }) => (
          <Form className="form-search">
            <input
              autoFocus
              type="text"
              id="search-form"
              name="search"
              placeholder="Search..."
              spellCheck="false"
              value={values.search}
              onChange={handleChange}
            />
          </Form>
        )}
      </Formik>

      <style jsx>{`
        div :global(.form-search) {
          position: absolute;
          top: 0;
          right: 0;
          border: 1px solid;
          height: calc(100% + 1px);
          width: calc(100% - 39px);
        }
        input {
          -webkit-appearance: none;
          border: none;
          background: none;
          height: 100%;
          width: 100%;
          color: currentColor;
          font-size: inherit;
          padding: 0px 5px;
        }
      `}</style>
    </div>
  );
};

export default SearchModule;
