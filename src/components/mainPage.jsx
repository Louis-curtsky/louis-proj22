import frontDesk from '../images/pexels-andrea-piacquadio-3771087.jpg';

const MainPage=()=> {
    return (
    <div className="welcomeContainer">
        <div className="herobox1">
            <h1>Welcome</h1>
            <div>
                <p>
                        Our minds are not meant to be working or productive all the time. Even if we never give ourselves time to rest, our minds will eventually start sabotaging the process – we start working slower and making more mistakes. Eventually, we might experience more negative consequences, physically and emotionally, like burnout.
                        Free time is important to help shield our minds from the negative effects of overworking and to make us truly productive. It increases our productivity on the long term and also helps us maintain a more sustainable pace of working. So why not leave your house cleaning, unimportant errant to someone can help you.
                </p>
            </div>
                <a href="test-page.html" className="mybutton">Book Online</a>
        </div>
        <div className="herobox2">
                <img src={frontDesk} width="350rm" alt="person servicing"/>
        </div>    
    </div>
    );
}
export default MainPage;
