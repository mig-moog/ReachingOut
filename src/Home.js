import React from 'react';
import laptop from './laptop.jpg';
class Home extends React.Component {
    render() {
        return(
               <div id="text_page">
                   <h1>Reaching Out</h1>
                   <p>Our mission statement: Our mission is to enhance and enrich the lives of people in developing nations by providing them with access to the world wide web. We achieve this through setting up computer labs within these towns and villages and lending donated and purchased laptops. Through these machines and their newfound access to the internet, they can educate themselves through free online resources and gain new career skills and knowledge.</p>
                   <img alt="laptop" src={laptop}></img>
               </div>
        );
    }
}
export default Home;