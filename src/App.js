import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout';
import {useState} from 'react';
import JobList from './components/JobList';


function App() {

  return (
    <div className='App'>
        <Routes>
          <Route path='/' element={<Layout/>}>
          </Route>
          <Route path='/jobList' element={<JobList/>}>

          </Route>
        </Routes>

    </div>
  );
}

export default App;
