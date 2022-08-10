import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { skillsData } from '../data/skillsData';

const Jlist=(skills)=>{
//    const posterUrl = `./images/${skills.data.Picture_1}`
//    const posterUrl = '/louis-proj22/src/images/logo.jpg'
 //   const detailUrl = skills.id
 console.log(skills.data.Picture_1)
return (
    <div className="col-lg-3 col-md-3 col-2 my-4">
      <div className="card bg-dark text-white">
        <img src={'../images/'+skills.data.Picture_1} className="img-fluid" alt='{skills.Skill_Id}' />
          <Link to={'/'} className="btn btn-primary">Show details</Link>
        <div className="card-body">
          <h5 className="card-title">Member: {skills.data.MemberId}</h5>
          {skills.data.Skill_Desc}
        </div>
      </div>
    </div>

);}

const ShowJlist = () => {
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        if(searchResults) {
          setSearchResults(skillsData);
        }    
        },[skillsData])
      
    const resultsHtml = searchResults.map((obj) => {
      return <Jlist key={obj.id} data={obj} />
    })
  
    return (
      <>
        {resultsHtml &&
          <div className="container">
            <div className="row">
              {resultsHtml}
            </div>
          </div>
        }
      </>
    );
  };
export default ShowJlist;