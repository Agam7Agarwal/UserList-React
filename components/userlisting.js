import React from 'react';
import { BrowserRouter as Router , Link } from 'react-router-dom';
import {connect} from 'react-redux';
import fetchapiuser from '../action/async/fetch_user'

class Userlisting extends React.Component{

    componentDidMount() {
        console.log(this.props.users)
        if(!this.props.users.length){
        this.props.fetchuser();
        }
    }

    render(){
        const { users } = this.props;
        return(
            <div>
                <h3> User Details</h3>
                <table className="table table-striped shrink">
                    <thead>
                    <th> FirstName </th>
                    <th> LastName </th>
                    <th> City </th>
                    </thead>
                    <tbody>
                    { users && users.map((item, i) =>
                        <tr key={i}>
                            <td>{item.FirstName}</td>
                            <td>{item.LastName}</td>
                            <td>{item.City}</td>
                            <td><Link to={`/edit/${i}`}>Edit</Link></td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        )
    }
}


const mapStateToProps = (reduxState) => ({
    users: reduxState.users,
});

const mapDispatchToProps = (dispatch) => ({
     fetchuser() {
        return dispatch(fetchapiuser());
    }
});

const Userlistingcontainer = connect(mapStateToProps, mapDispatchToProps)(Userlisting);

export default Userlistingcontainer;