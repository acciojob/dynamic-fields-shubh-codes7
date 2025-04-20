import React from "react";

const App = () => {

  const [fields, setFields] = React.useState([{id:1, name:"", age:""}])

  function handleRemove(idToRemove){
    setFields(fields.filter( field => field.id !== idToRemove))
  }

  function handleAddMore(){
    setFields([...fields, {id: fields.length+1, name:"", age:""}] )
  }

  function handleChange(id, key, value){
    const updatedFields = fields.map(field =>
      field.id === id ? { ...field, [key]: value } : field
    );
    setFields(updatedFields);
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log("Submitted!", fields)
  }


  return(
    <form onSubmit={handleSubmit}>
      {
        fields.map(({id, name, age}) => {
          return(
            <div key={id}>
              <input type="text" placeholder="Name" name="name" value = {name} onChange={(e) => handleChange(id, "name", e.target.value)}/>
              <input type="text" placeholder="Age" name="age" value = {age} onChange={(e) => handleChange(id, "age", e.target.value)}/>
              <button type="button" onClick={() => handleRemove(id)}>Remove</button>
            </div>
          )
        })
      }
      <button type="button" onClick={handleAddMore}>Add more...</button>
      <button type="submit" >Submit</button>
    </form>
  )
}
  

export default App;
