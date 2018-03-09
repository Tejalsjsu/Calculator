import React, {Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import * as API from '../api/API';
class Welcome extends Component {

    static propTypes = {
        username: PropTypes.string.isRequired
        // ,
        // no1: PropTypes.string.isRequired,
        // no2: PropTypes.string.isRequired,
    };

    state = {
            username: '',
            no1: '',
            no2: '',
            result: '',
            message: ''
        };

    componentWillMount(){
        this.setState({
            username : this.props.username,
            no1: '',
            no2: ''
        });
        //document.title = `Welcome, ${this.state.username} !!`;
    }

    componentDidMount(){
        document.title = `Welcome, ${this.state.username} !!`;
    }

    handleAdd = () => {
        // if(userData.no1 == undefined || userData.no1 == undefined ){
        //     this.setState({ no1:document.getElementById('Number1').value ,
        //         no1:document.getElementById('Number2').value});
        // } else {
        //     this.setState({
        //         no1: userData.no1,
        //         no2: userData.no2
        //     });
        // }
        console.log(this.state);
        API.doAdd(this.state)
            .then((res) => {

                this.setState({
                    message: res.message
                });
            } );
    };

    handleSub = () => {
        API.doSub(this.state)
            .then((res) => {

                this.setState({
                    message: res.message
                });
            } );
    };


    handleMultiply = () => {
        API.doMultiply(this.state)
            .then((res) => {

                this.setState({
                    message: res.message
                });
            } );
    };

    handleDivide = () => {
        API.doDivide(this.state)
            .then((res) => {

                this.setState({
                    message: res.message
                });
            } );
    };

    render(){
        return(
            <div className="row justify-content-md-center">
                <div className="col-md-3">
                    <div className="alert alert-warning" role="alert">
                        {this.state.username}
                    </div>
                    {/*<Link to="/login">Logout</Link>*/}
                </div>

                <div className="container-fluid">
                    <div className="row justify-content-md-center">
                        <div className="col-md-3">
                            <form>
                                <div className="form-group">
                                    <h3>Calculator</h3>
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="text" label="Number1" placeholder="Enter Number" id="Number1"
                                           value={this.state.no1}
                                           onChange={(event) => {this.setState ({no1: event.target.value});
                                           }}
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        className="form-control" type="text" label="Number2" placeholder="Enter Number" id="Number2"
                                        value={this.state.no2}
                                        onChange={(event) => {this.setState ({ no2: event.target.value});
                                        }}
                                    />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary" type="button" onClick={() => this.handleAdd()}>
                                        +
                                    </button> &nbsp;
                                    <button className="btn btn-primary" type="button" onClick={() => this.handleSub()}>
                                        -
                                    </button>&nbsp;
                                    <button className="btn btn-primary" type="button" onClick={() => this.handleMultiply()}>
                                        *
                                    </button>&nbsp;
                                    <button className="btn btn-primary" type="button" onClick={() => this.handleDivide()}>
                                        /
                                    </button>&nbsp;
                                    <button className="btn btn-primary" type="button" onClick={() => this.handleSubmit()}>
                                        Clear
                                    </button>&nbsp;
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col-md-3">
                            {this.state.message && (
                                <div className="alert alert-warning" role="alert">
                                    {this.state.message}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default withRouter(Welcome);