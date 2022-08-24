import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout';
import JobList from './components/JobList';
import ShowMap from './components/showMap';

function App() {

  return (
    <div className='App'>
        <Routes>
          <Route path='/' element={<Layout/>}>
          </Route>
          <Route path='/jobList' element={<JobList/>}>
          </Route>
          <Route path='/showMap' element={<ShowMap/>}>
            </Route>
            <Route path='/showtestmap' element={<ShowMap/>}>
            </Route>
        </Routes>

    </div>
  );
}

export default App;
