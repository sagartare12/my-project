import React from 'react'



const Job = (props) => {

    const {img,details}=props.cont;

    return (
        <div>
            
       
            <section className="jobs">
                
                <img src={img} alt="Ro"/>
                <p>{details}</p>
              
            </section>
              <hr />
            

        </div>
        
    );
}

export default Job