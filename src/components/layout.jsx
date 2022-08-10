import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import MainPage from './mainPage';
import CardsContainer from './cardsContainer';
import '../styles/layout.css';

export const Layout = () => {

  return (
      <div className="container">
        <Header/>
        <MainPage/>
        <CardsContainer/>    
      </div>
  );
};