import React, { Component } from 'react';
import ServiceGroup from './ServiceGroup.jsx'
import services from './mockData';
import './custom.css';

class Services extends Component {
 
    constructor() {
        super();
        this.state = {
            servicesData : services
        }
    }


    
    render() { 
        return (
            <section id="service" className="bg-site2">
		        <div className="container">
                      
                    { this.state.servicesData.map( (serviceCat) => <ServiceGroup key={serviceCat['id']} serviceCat={serviceCat} /> ) } 
                      
                </div>
            </section>
          );
    }
}
 
export default Services;