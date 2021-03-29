import React, { Component } from 'react'
import { InfoConsumer } from './Context'
import './pharmaBooks.css'





 class PharmaBooks extends Component {
    render()  {
        const {
            id,
            title,
            authorName,
            downloadLink,
            bookIcon
        } = this.props.book;

        const Link = () =>{
            
return (downloadLink);
        }

        return (
          
            <InfoConsumer>
                {data => ( 
                    <div>
                    <div className="bookItem" style={{ border: '1px solid rgb(25, 99, 168)',width:'20rem',margin:'1rem'}}>
                        <div className="itemPad">
                            <h5 className="Title"><div className="title">Book Name </div> : {title}</h5>
                            <h6 className="AuthorName"><div className="authorName">Author Name </div> : {authorName}</h6>                  
                            <a href={downloadLink} style={{width:'7rem'}} className="btn btn-outline-primary btn-sm">Download</a>
                        </div>
                    </div>
                    <hr style={{color:'Black'}}/>
                    </div>
                )

                }
                
            </InfoConsumer>
           
        )
    }
    

  
}

export default PharmaBooks