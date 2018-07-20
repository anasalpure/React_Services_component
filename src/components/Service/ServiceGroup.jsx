import React, { Component } from 'react';
import Service from './Service.jsx';



class ServiceGroup extends Component {
   
   

    render() {
      let serveceGr = this.props.serviceCat;
      return (
        <div className="row service-group" id="web-service">
            <header>
                <h2 className="ser-title"> <i className={ serveceGr['icone'] } ></i> { serveceGr['name'] }</h2>
                <hr className="botm-line"/>
                <p className="services-info">{ serveceGr['des'] } </p>
            </header>

            { serveceGr['sub'].map( (aService) => <Service key={aService['id']} service={aService} /> ) } 

       </div>
      );

      
    }
    
}

export default ServiceGroup;
