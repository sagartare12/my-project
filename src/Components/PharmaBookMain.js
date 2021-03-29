import React, { Component } from 'react'
import { InfoConsumer } from './Context'
import PharmaBooks from './PharmaBooks'
 class PharmaBookMain extends Component {
    render() {
        return (
            
            <div className="container">
                <div className="row ">

                    <InfoConsumer>
                           
                        {data => {
                               
                            return data.pharmaBooks.map((item) => {
                                return <PharmaBooks key={data.id} book={item} />
                                
                            })
                            
                        }}
                        
                    </InfoConsumer>

                </div>
            </div>
        )
    }
}
 export default PharmaBookMain