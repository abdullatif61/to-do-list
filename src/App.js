import { useEffect, useState, } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import {ReactComponent as EditIcon  } from "./assets/edit.svg";
import {ReactComponent as SaveIcon  } from "./assets/save.svg";
import {ReactComponent as DeleteIcon  } from "./assets/sil.svg";




function App() {
  const [toDoList, setToDoList] = useState([])
  const [notAlma, setNot] = useState("")
  const addNote = () => {
    setToDoList(gecmisListe => [...gecmisListe, notAlma])
    setNot('')
  }
  useEffect(() => { console.log(toDoList) }, [toDoList])
  return (
    <div className="container text-center">
      <div className='row'>
        <div className='col-2 bg-danger'></div>
        <div className='col-8 '>
          <h1>Not Defterim</h1>
          <InputGroup className="mb-3 mt-3  h-50">
            <Form.Control

              placeholder="Not Ekleyebilirsiniz"
              value={notAlma}
              onChange={(e) => setNot(e.target.value)}

            />
            <Button className='btn btn-dark ' onClick={addNote} id="button-add-1">
              Ekle
            </Button>
          </InputGroup>
          <div className='mt-5'>
            {
              toDoList.map(
                (toDoItem, index) =>
                  <div key={index} className="d-flex justify-content-between">
                    <div className='d-flex'>
                      <Form.Check
                        type="checkbox"
                        className='me-2'
                      />
                      <label>
                        {toDoItem}
                      </label>

                    </div>
                    <div>
                    <EditIcon width={25} height={25} style={{cursor:"pointer"}} className={"me-2"}/>
                    <SaveIcon width={25} height={25} style={{cursor:"pointer"}} className={"me-2"}/>
                    <DeleteIcon width={25} height={25} style={{cursor:"pointer"}} className={"me-2"}/>

                    </div>

                  </div>
              )
            }

          </div>

        </div>
        <div className='col-2 bg-danger'></div>

      </div>

    </div>
  );
}

export default App;
