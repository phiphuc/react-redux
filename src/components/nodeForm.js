import React, { Component } from 'react';
import { connect} from 'react-redux';

class nodeForm extends Component {

    constructor(props){
        super();
        this.state = {
            noteTitle: '',
            noteContent: ''
        }
    }
    isChange  = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name+' '+ value);
        this.setState({
            [name]: value
        })
    }
    save = (title, content) => {
        let item = {};
        item.title = title;
        item.content = content;
        // day len app
        console.log(item);
        this.props.addDataStore(item);
    }
    render() {
        return (
            <div className="col-4">
                <h3>Sua noi dung note</h3>
                <div className="form-group">
                    <label htmlFor="noteTitle">Tieu de note</label>
                    <input onChange={ (event) => this.isChange(event) } type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="noteTtitle" placeholder="Tieu de note" />
                </div>
                <div className="form-group">
                    <label htmlFor="noteContent">Noi dung note</label>
                    <textarea onChange={ (event) => this.isChange(event) }  className="form-control" name="noteContent" id="noteContent" rows={3} defaultValue={""} />
                </div>
                <button onClick = { () => this.save(this.state.noteTitle, this.state.noteContent)} type="submit" className="btn btn-primary">Submit</button>   
            </div>
        );
    }
}

// const mapStateToProps = (state, ownProps) => {
//     return {
//         prop: state.prop
//     }
// }

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (item) => {
            dispatch({type:'ADD',item})
        }
    }
}

export default connect(null, mapDispatchToProps)(nodeForm)