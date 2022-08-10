import { useNavigate } from "react-router-dom";

const CardsContainer = () => {
    let navigate = useNavigate();
    const routeChange = () => {
        navigate('/jobList/');
    }
    return (
<div className="cards">
    <div className="card1">
                <a href="#" onClick={routeChange}>
                <span className="material-symbols-outlined">search</span>
                    <h3>Browse Services</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo cumque odit. Nostrum, et ducimus?</p>
                </a>
    </div>
    <div className="card2">
                <a href="http://www.byol.me">
                <span className="material-symbols-outlined">handyman</span>
                    <h3>Provide Services</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo cumque odit. Nostrum, et ducimus?</p>
                </a>
    </div>
    <div className="card3">
                <a href="#">
                <span className="material-symbols-outlined">menu_book</span>
                    <h2>Stories from users</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo cumque odit. Nostrum, et ducimus?</p>
                </a>
    </div>
</div>
);}

export default CardsContainer;