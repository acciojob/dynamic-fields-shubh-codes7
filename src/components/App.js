import React from "react";

const App = () => {
  const [fields, setFields] = React.useState([{ id: 1, name: "", age: "" }]);

  const handleAddMore = () => {
    const newId = fields.length + 1;
    setFields([...fields, { id: newId, name: "", age: "" }]);
  };

  const handleRemove = (idToRemove) => {
    setFields(fields.filter((field) => field.id !== idToRemove));
  };

  const handleChange = (id, key, value) => {
    const updated = fields.map((field) =>
      field.id === id ? { ...field, [key]: value } : field
    );
    setFields(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let dataToSubmit = fields.map(({name, age})=> ({name, age}))
    console.log(dataToSubmit);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div id="form">
        {fields.map(({ id, name, age }) => (
          <div key={id} id={`form-${id}`}>
            <input
              id="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => handleChange(id, "name", e.target.value)}
            />
            <input
              id="age"
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => handleChange(id, "age", e.target.value)}
            />
            <button type="button" onClick={() => handleRemove(id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <button type="button" onClick={handleAddMore}>
        Add More..
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
