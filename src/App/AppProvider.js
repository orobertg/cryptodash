import React from 'react';

const cc = require('cryptocompare');
cc.setApiKey('fe34c73b27e788a0f3f1c645995818809e3a6d49f11ea3b04e3eeacdb607ffb6');


export const AppContext = React.createContext();


export class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'dashboard',
            ...this.savedSettings(),
            setPage: this.setPage,
            confirmFavorites: this.confirmFavorites
        }
    }

componentDidMount = () => {
    this.fetchCoins();
}

fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data;
    this.setState({coinList});
}

confirmFavorites = () => {
    this.setState({
        firstVisit: false,
        page: 'dashboard'
    });
    localStorage.setItem('cryptoDash', JSON.stringify({
        test: 'hello'
    }));
}


savedSettings() {
    let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
    if (!cryptoDashData) {
        return {page: 'settings', firstVisit: true}
    }
    return {};  
}

setPage = page => this.setState({page})

render(){
    return (
        <AppContext.Provider value={this.state}>
            {this.props.children}
        </AppContext.Provider>
        )
    }
}

