import React from 'react';
import sprint from './sprint2.png';
import verizon from './internet2(1).png';
import att from './verizon2.png';
import google from './google.png';
import apple from './apple.png';
import dell from './dell.png';
class Partners extends React.Component {
    render() {
        return (
            <div id='partner_list'>
                <h1 id='our_partners'>Our Partners</h1>
                <h2 id='partnerz'>We would not be able to do this if it weren't for our partners</h2>
                <table id='partner_table' border="5" cellpadding="7">
                    <tbody>
                        <tr>
                            <td><h1 class='tabletop'>Internet Providers</h1></td>
                            <td><h1 class='tabletop'>Laptop Providers</h1></td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <img class='internet_provider' alt='internet1' src={sprint}></img>
                                    <br />
                                    <img class='internet_provider' alt='internet2' src={verizon}></img>
                                    <br />
                                    <img class='internet_provider' alt='internet3' src={att}></img>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <img class='internet_provider' alt='internet1' src={google}></img>
                                    <br />
                                    <img class='internet_provider' alt='internet2' src={apple}></img>
                                    <br />
                                    <img class='internet_provider' alt='internet3' src={dell}></img>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Partners;