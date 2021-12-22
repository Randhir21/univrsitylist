import './App.css';
import { useState } from 'react';
import university from './university.json';
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link';


function App() {

  return (
    <div className="App">
      {
        university.map((curElem)=>{
            return(
              <div >
              <List className='list1'>
               
                  <Link href={curElem.web_pages}>{curElem.name}-- {curElem.country}</Link>
                
              </List>
              </div>
            );
        })
      }
    </div>
  );
}

export default App;
