import React from 'react';

 


const Search =(props)=>{ 
       
        return (
            <div className="col search">
                <input  type="text"  onChange={props.filter}  className="form-control" placeholder="search in services" />
            </div>
          );
}


export default Search;
