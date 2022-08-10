import Header from './header';
import ShowJlist from './showJlist';

const JobList =()=>{
    return (
       <div>
      <Header/>  
      <div>
      <h2 style={{ textAlign: 'center' }}>Skill Lists</h2>
      </div>
       <ShowJlist/>
       </div> 
    );
}
export default JobList;