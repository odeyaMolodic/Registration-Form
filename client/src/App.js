import logo from './images.png';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const TITLE = 'Homework'

function App() {

  /*const[user, setUser] = useState({
    name: "", age: "", address: ""
  });


  let name, value;

  const handleSubmit = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({...user, [name]:value});
  }

  const PostData = async (e) => {
    e.preventDefault();
    const {name, age, address} = user;
    const res = await fetch("/Submit",{
      method:"POST",
      body: JSON.stringify({
        name,age,address
      })
    });

  }*/
  
  return (
    <div className="App">

      <title>{TITLE}</title>
      <img src={logo} className="App-logo" alt="logo" />

      <header className="App-header">

        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Full name</Form.Label>
            <Form.Control type="name" placeholder="Enter name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAge">
            <Form.Label>Age</Form.Label>
            <Form.Control type="age" placeholder="Enter age" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="address" placeholder="Enter address" />
          </Form.Group>
          
          <style type="text/css">
            {`
            .btn-flat {
              background-color: brown;
              color: white;
            }

            `}
          </style>

          <Button variant="flat" type="submit" /*onClick={PostData}*/>
            Submit
          </Button>
        </Form>
      </header>
    </div>
  );
}

export default App;
