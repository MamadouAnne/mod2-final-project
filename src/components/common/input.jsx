// extrating reusable input
const Input = ({ name, value, label, onChange, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        //setting single source of truth
        value={value}
        //we can use autoFocus instead of refs.
        //updating the state
        //autoFocus
        onChange={onChange}
        name={name}
        // ref={this.username}
        id={name}
        type="text"
        className="form-control"
      />
      {error && <div className="alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
