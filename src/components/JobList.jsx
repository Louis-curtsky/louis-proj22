import Button from '../components/Button';
import Header from './header';
import ShowJlist from './showJlist';
import { useNavigate } from "react-router-dom";
import '../styles/layout.css';

const JobList =()=>{
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      navigate(`/showMap/`);
    }
    return (
       <div style={{position:'relative'}}>
            <div>
                <div className="myMap" style={{zIndex:99}}>
            <Header title={"List of Skills"}/>
                </div>
                <div className="myMap" style={{zIndex:99}}>
                    <Button type="button" text="Map" icon="fa-solid fa-map-location-dot"  onClick={routeChange}/>
                </div>
                <div>
                    <ShowJlist/>
                </div>
            </div>  
       </div> 
    );
}
export default JobList;