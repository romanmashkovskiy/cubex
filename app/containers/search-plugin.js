import React, {Component} from 'react';

class  SearchPlugin extends Component {
    constructor(props){
        super(props);
        this.onTextChanged = this.onTextChanged.bind(this);
    }

    onTextChanged(e){
        let text = e.target.value.trim();
        this.props.filter(text);
    }

    render() {
        return <input placeholder="Поиск" onChange={this.onTextChanged}/>;
    }
}

export default SearchPlugin;