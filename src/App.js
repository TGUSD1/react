import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
    [
      {
        name: "Lama Kroma", 
        role: "Grand Master", 
        img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?",
      },
      {
        name: "Tarnue Collins", 
        role: "Dty. Grand Master", 
        img: "https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?",
      },
      {
        name: "Lemuel B. Sherman", 
        role: "Senior Warden", 
        img: "https://images.pexels.com/photos/4156467/pexels-photo-4156467.jpeg",
      },
      {
        name: "Augustine T. Davidson", 
        role: "Senior Deacon", 
        img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg",
      },
      {
        name: "Tony Ramble", 
        role: "Secretary", 
        img: "https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg",
      },
      {
        name: "Phobo Collins", 
        role: "Entered Apprentice", 
        img: "https://images.pexels.com/photos/2741701/pexels-photo-2741701.jpeg",
      },
    ]
  );
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? 
          <>
          <input type='text' 
          onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value);
          }} 
          />
          <div className='flex flex-wrap justify-center'>
            {employees.map((employee) => {
              return (
              <Employee 
                key={uuidv4()}
                name={employee.name} 
                role={employee.role} 
                img={employee.img} 
              />
              );
            })}
          </div>
          </>
        :
          <p>You cannot see the employees</p>
      }
    </div>
  );
}

export default App;
