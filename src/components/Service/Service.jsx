import React from 'react';

const Service =({service})=>{ 
        
        return (
            <div className="col-md-4 col-sm-4">
                <div className="service-info text-center">
                <div className="icon ">
                    <i className={service['icone']} aria-hidden="true"></i>                
                </div>
                <div className="icon-info">
                    <h4>{service['name'] }</h4>
                    <p>{service['excerpt'] }</p>
                </div>
                </div>
            </div>
          );
}

 
export default Service;