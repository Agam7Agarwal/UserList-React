import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';

class Editdetails extends React.Component {
    constructor(props){
        super(props);

        this.changehandler = this.changehandler.bind(this);
        this.savechanges = this.savechanges.bind(this);
    }

    changehandler(e){
        const { users } = this.props;
        const id = this.props.match.params.id;
        users.map((item,i) => {
            if( i === parseInt(id) ){
                item[e.target.name] = e.target.value;
            }
            return item;
        });
    }

    savechanges(){
        this.props.savechangesaction(this.props.users);
        this.setState({
            isSaved : true,
        })
    }

    render(){
        return(
            <div className="container">
                <h3>Edit Details </h3>
                <form className="form-horizontal">
                    <div className="form-group">
                        <label className="control-label col-sm-2">FirstName:</label>
                        <div className="col-sm-8">
                            <input
                                type="text"
                                defaultValue={this.props.users[this.props.match.params.id].FirstName}
                                className="form-control"
                                id="firstname"
                                name="FirstName"
                                placeholder="Enter First Name"
                                onChange={this.changehandler}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2">Last Name:</label>
                        <div className="col-sm-8">
                            <input type="text"
                                   className="form-control"
                                   id="lastname"
                                   name="LastName"
                                   placeholder="Enter Last Name"
                                   defaultValue={this.props.users[this.props.match.params.id].LastName}
                                   onChange={this.changehandler}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2">City</label>
                        <div className="col-sm-8">
                            <input type="text"
                                   className="form-control"
                                   id="city"
                                   name="City"
                                   placeholder="Enter Your City"
                                   defaultValue={this.props.users[this.props.match.params.id].City}
                                   onChange={this.changehandler}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <Link to="/">
                                <button type="button" className="btn btn-default" onClick={this.savechanges}>Save</button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    users: reduxState.users,
});

const mapDispatchToProps = (dispatch) => ({
    savechangesaction(changedobj) {
        return dispatch({type: 'SAVE_CHANGES' , changedobj});
    }
});

let editdetailscontainer = connect(mapStateToProps,mapDispatchToProps)(Editdetails);

export default editdetailscontainer;