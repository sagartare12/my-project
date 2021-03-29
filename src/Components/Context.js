import React, { Component } from 'react'
import { pharmacyBooks } from './booksData'

const InfoContext = React.createContext();
 class InfoProvider extends Component {

    state= {
        pharmaBooks:pharmacyBooks,
    }
    render() {
        return (
            
            <InfoContext.Provider
                value={{
                    pharmaBooks : this.state.pharmaBooks,
                    title : this.state.title,
                    authorName : this.state.authorName,
                    downloadLink : this.state.downloadLink,
                    bookIcon : this.state.bookIcon
                }}>
                    {this.props.children}
            </InfoContext.Provider>
        )
    }
}

const InfoConsumer = InfoContext.Consumer;
export   { InfoProvider , InfoConsumer}