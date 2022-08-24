import { useState, useEffect } from 'react';
import { skillsData } from '../data/skillsData';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';



const Jlist=(skills)=>{
//    const posterUrl = `./images/${skills.data.Picture_1}`
//    const posterUrl = '/louis-proj22/src/images/logo.jpg'
 //   const detailUrl = skills.id

// console.log(skills.data.Picture_1)

const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Skill Description</Popover.Header>
    <Popover.Body>
      {skills.data.Skill_Desc}
    </Popover.Body>
  </Popover>
 );

return (

    <div className="col-lg-3 col-md-3 col-2 my-4">
      <div className="card bg-dark text-white" id='skillList' >
        <div className="card-title position-relative" style={{ height: '20rem' }}>
        <img src={'../images/'+skills.data.Picture_1} className="img-fluid" alt='{skills.Skill_Id}' />
        <div className="position-absolute top-50 start-50 translate-middle" >
          <OverlayTrigger trigger="focus" placement="right" overlay={popover}>
            <Button variant="success" >More Info</Button>
        </OverlayTrigger>
        </div>
        <div className="card-body">
          <h5> Member: {skills.data.MemberId}</h5>
          <p> Years of Expericens: {skills.data.Skill_Years}</p>
          <p> Charges: {skills.data.Charges}</p>
          <p> Per Unit: {skills.data.Charge_Unit}</p>
        </div>
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