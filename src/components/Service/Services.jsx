import React, { Component } from 'react';
import services from './mockData';

import './custom.css';

//import components
import ServiceGroup from './ServiceGroup.jsx'
import Search from './Search.jsx';


class Services extends Component {
   
    constructor() {
        super();
       
        this.state = {
            servicesData : services
        }
        this.cashService = JSON.parse(JSON.stringify(services));

        this.getCashService=this.getCashService.bind(this);
        this.filterByName=this.filterByName.bind(this);
    }
    
    getCashService (){
        return JSON.parse(JSON.stringify(this.cashService ));
    }



    
    render() { 
        return (
            <section id="service" className="bg-site2">
		        <div className="container">
                    <Search filter={this.filterHandeler.bind(this)} />
                      
                    { this.state.servicesData.map( (serviceCat) => <ServiceGroup key={serviceCat['id']} serviceCat={serviceCat} /> ) } 
                      
                </div>
            </section>
          );
    }

    filterHandeler(event) {
        let val=  event.target.value;
        if(val.length===0){
            this.setState({ servicesData :   this.getCashService() })
        }else{
          this.setState(this.filterByName(val))
        }
    }

    filterByName(val){

        let newServices =  this.getCashService().map( (servs) => {

            servs['sub']=servs['sub'].filter( (ser)=> {
                
                return  ser['name'].toLowerCase().search(val.toLowerCase()) >=0 ;     
            });

            return servs;
      });
      return { servicesData :newServices }
    }



}
 
export default Services;