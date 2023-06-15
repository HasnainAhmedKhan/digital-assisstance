import ProfileCard from "./ProfileCard";
import AlexaImage from './Images/alexa.png';
import CortanaImage from './Images/cortana.png';
import SiriImage from './Images/siri.png';
import 'bulma/css/bulma.css'
function App() {
    return(
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                <p className="title">Personal Digital Assistance</p>
                </div>
            </section>
           <div className="container">
            <section className="section">
                <div className="columns">
                    <div className="column is-3">
                    <ProfileCard 
                    title="Alexa"
                     handle="@alexa99" 
                     image={AlexaImage}
                     description="Alexa was created by amazon and help you to buy things"
                     /><br/>
                    </div>
                    <div className="column is-3">
                    <ProfileCard 
                    title="Cortana" 
                    handle="@cortana32" 
                    image={CortanaImage}
                    description="Cortana was made by microsoft.Who know what it does?"
                    /><br/>
                    </div>
                    <div className="column is-3">
                    <ProfileCard 
                    title="Siri" 
                    handle="@siri01" 
                    image={SiriImage}
                    description="Siri was made by apple and is being pushed out"
                    />
                    </div>

                </div>
            </section>

           </div>
        </div>
    );
}
export default App;