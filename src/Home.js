import React from 'react';
import laptop from './laptop.jpg';
class Home extends React.Component {
    render() {
        return(
               <div id="text_page">
                   <h1 id='reaching_out'>Reaching Out</h1>
                   <p>Our mission statement: Our mission is to enhance and enrich the lives of people in developing nations by providing them with access to the world wide web. We achieve this through setting up computer labs within these towns and villages and lending donated and purchased laptops. Through these machines and their newfound access to the internet, they can educate themselves through free online resources and gain new career skills and knowledge.</p>
                   <img id='the_laptop' alt="laptop" src={laptop}></img>
                   <p>Reaching Out is a non-profit company that allows many people to have access to the internet who otherwise wouldn't be able to. Our service will provide free internet and laptops to people in less wealthy areas such as Africa and the Middle East. In these places internet is far less common than in first world countries like the United States. In the 21st century, the world's modern economy is steadily moving towards technology focused jobs. By providing technology to these developing countries, we can help their young ones gain valuable technology experience which they might not have otherwise received. This will help the economies of these less developed and developing countries become more modern.</p>
                   <a href='/Internet_center.stl' download>Click to download a 3d model of a laptop distribution area</a>
               </div>
        );
    }
}
export default Home;