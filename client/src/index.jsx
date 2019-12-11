import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List.jsx';
import Language from './components/Language.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            names: [],
            select: '',
            required: false
            
        }

        this.selectLanguage = this.selectLanguage.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.action = this.action.bind(this);
    }
    handleChange(event) {
        this.getNames(event.target.value);
    }
    getNames(str) {
        var arr = str.split('\n');

        this.setState({ names: arr });

    }
    selectLanguage(input) {
        this.setState({ select: input });
    }
    handleClick(e) {
        var flag = this.allRequired(this.state.names, this.state.select);
        
        if (!flag) {
            
            alert("all field are required before submission!");
            e.preventDefault();
        } else {
            this.setState({required: true});
        }
    }
    allRequired(names, greet) {
        if ((names || []) && (greet || undefined)) {
            return true;
        } else {
            return false;
        }
    }
    action() {
        this.setState({
            required: false
        });
    }
    render() {
        return (
            <div>
                <form>
                    <textarea style={{ width: '200px', height: '150px' }} value={this.state.value} onChange={this.handleChange} placeholder="Please add names" />
                </form>
                <Language selectLanguage={this.selectLanguage} action={this.action}/>
                <button type="button" onClick={this.handleClick}>Submit!</button>
                {this.state.required ? <List string={this.state.select} list={this.state.names} /> : null}

            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('app'));