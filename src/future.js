import React from 'react';
import sat from './sat.png';
class Future extends React.Component{
    render(){
        return(
            <div id='text_page2'>
                <h1 id='future_header'>Our plans for the future</h1>
                <p>In the near future, satellites will be able to beam down internet to almost anywhere on the Earth's surface. This will allow us to connect to the internet from many places where we otherwise not be able to connect. This will allow us to give so many young people internet access. With satellites we will not have to build lots of infastructure to connect these people to the world wide web.</p>
                <img id='satellite' alt='satellite' src={sat}></img>
            </div>
        );
    }
}
export default Future;