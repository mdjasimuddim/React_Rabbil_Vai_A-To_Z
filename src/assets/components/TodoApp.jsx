import { useState } from "react";

const TodoApp = () => {
    const [item, setItem] = useState("");
    const [list, setList] = useState([]);
    const AddToList = () => {
        list.push(item);
        setList([...list])
    }
    const removeElement = (index) =>{
        list.splice(index, 1);
        setList([...list])
    }
  return (
    <div>
        <input className="border-2" type="text" onChange={(e) => setItem(e.target.value) } /> <br />
        <button onClick={()=>AddToList()}>Click</button>
        <table>
            <tbody>
                {
                    list.length !== 0 ? (
                        list.map((element, index)=>{
                            return (
                                <tr key={index.toString()}>
                                    <td>{element}</td>
                                    <td><button onClick={()=>removeElement(index)}>Remove</button></td>
                                </tr>
                            )
                        })
                    )
                    :(<tr></tr>) 
                }
            </tbody>
        </table>
    </div>
  )
}

export default TodoApp