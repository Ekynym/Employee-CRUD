import { useState } from "react";
import "./App.css";

function App() {

  const [array,setArray] = useState([])
  const [inputdata, setInputData] = useState({
    name: "",
    age: "",
    position: "",
    salary: "",
  });
  const [index,setIndex] = useState()
  const[visible,setVisible] = useState(false)

  const {name,age,position,salary} = inputdata

  const handleChange = (e) => {
    setInputData({ ...inputdata, [e.target.name]: e.target.value });
  };

  const addinputdata = () => {
    if(name==="" && age === "" && position === "" && salary === ""){
      alert("Enter details")
    }
    else{
      setArray([...array,{name,age,position,salary}])
      setInputData({name:"",age:"",position:"",salary:""})
    }
   
  }

  const deletedata =(i) => {
    let total = [...array]
    total.splice(i,1)
    setArray(total)
  }

  const updatedata = (i) => {
    let {name,age,position,salary} = array[i]
    setInputData({name,age,position,salary})
    setVisible(true)
  }

  const updateinfo = () => {
    let total=[...array]
    total.splice(index,1,{name,age,position,salary})
    setArray(total)
    setVisible(false)
    setInputData({name:"",age:"",position:"",salary:""})
  }



  return (
    <div className="App">
      <div className="Header">
        <h1>EMPLOYEE CRUD</h1>
      </div>
      <div className="input">
        <input
          type="text"
          value={inputdata.name || ""}
          name="name"
          placeholder="Employee name..."
          onChange={handleChange}
        />
        <input
          type="age"
          value={inputdata.age || ""}
          name="age"
          placeholder="Employee age..."
          onChange={handleChange}
        />
        <input
          type="text"
          value={inputdata.position || ""}
          name="position"
          placeholder="Employee position..."
          onChange={handleChange}
        />
        <input
          type="text"
          value={inputdata.salary || ""}
          name="salary"
          placeholder="Employee salary..."
          onChange={handleChange}
        />
        <button id="data" onClick={!visible ? addinputdata : updateinfo}>{!visible ? 'Add data' : 'Update data'}</button>
      </div>
      <div className="main">
        <table className="table">
          <thead>
            <tr>
              <th>E.No</th>
              <th>Employee Name</th>
              <th>Employee Age</th>
              <th>Employee Postion</th>
              <th>Employee Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           {array && array.map((item,i) => {
            return(
              <tr key={i}>
                <td>{i+1}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.position}</td>
                <td>{item.salary}</td>
                <td><button onClick={() => updatedata(i)}>Update</button>
                <button onClick={() => deletedata(i)}>Delete</button></td>
              </tr>
            )
           })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
