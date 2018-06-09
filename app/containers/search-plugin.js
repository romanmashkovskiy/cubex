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
        return (
            <div className="ui small icon input">
                <input type="text" placeholder="Найти контакт" onChange={this.onTextChanged}/>
                    <i className="search icon"></i>
            </div>
            );
    }
}

export default SearchPlugin;