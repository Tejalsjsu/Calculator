import React, {Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import * as API from '../api/API';
import validator from 'validator';
import className from 'classnames';
let styleError = {color:'red'}

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
            message: '',
            num1Error:'',
            num2Error: ''
        };

    componentWillMount(){
        this.setState({
            username : this.props.username,
            no1: '',
            no2: '',
            num1Error:'',
            num2Error: ''
        });
        //document.title = `Welcome, ${this.state.username} !!`;
    }

    componentDidMount(){
        document.title = `Welcome, ${this.state.username} !!`;
    }

    handleClear = () =>{
        document.getElementById('Number1').value = '';
        document.getElementById('Number2').value = '';
        document.getElementById('ErrorNum1').innerHTML = '';
        document.getElementById('ErrorNum2').innerHTML = '';
        document.getElementById('answer').innerHTML = '';
        this.state.no1 = '';
        this.state.no2='';
        this.state.message = '';
    }

    validate = () => {
        let isError = false;
        const errors = {};
        if(this.state.no1.length < 1 ){
            isError = true;
            this.state.num1Error = 'Kindly enter number';
        }
        else if(isNaN(this.state.no1)){
            isError = true;
            this.state.num1Error = "Enter a valid number";
        }
        else{
            this.state.num1Error='';
        }

        if(this.state.no2.length < 1 ){
            isError = true;
            errors.num2Error = 'Kindly enter number';
        }
        else if(isNaN(this.state.no2)){
            isError = true;
            this.state.num1Error = "Enter a valid number";
        }
        else{
            this.state.num2Error='';
        }
        if(isError){
            this.setState({
                ...this.state,
                ...errors
            });
        }
        return isError;
    }

    handleAdd = () => {
        const err = this.validate();
        if(!err) {
            API.doAdd(this.state)
                .then((res) => {
                    this.setState({
                        message: res.message
                    });
                });
        }
    };

    handleSub = () => {
        const err = this.validate();
        if(!err){
            API.doSub(this.state)
                .then((res) => {
                    this.setState({
                        message: res.message
                    });
                } );
            }
        };

    handleMultiply = () => {
        const err = this.validate();
        if(!err) {
            API.doMultiply(this.state)
                .then((res) => {

                    this.setState({
                        message: res.message
                    });
                });
        }
    };

    handleDivide = () => {
        const err = this.validate();
        if(!err) {
            if(this.state.no2 == 0 ){
                this.state.num2Error = "Divide by zero is undefined";
                document.getElementById('ErrorNum2').innerHTML = this.state.num2Error;
                document.getElementById('Number1').value = '';
                document.getElementById('Number2').value = '';
                this.state.no1 = '';
                this.state.no2='';
            } else{
            API.doDivide(this.state)
                .then((res) => {

                    this.setState({
                        message: res.message
                    });
                });
            }
        }
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
                                <div className="numberGroupClass">
                                    <input className="form-control" type="text" label="Number1" placeholder="Enter Number" id="Number1"
                                           value={this.state.no1}
                                           onChange={(event) => {this.setState ({no1: event.target.value});
                                           }}
                                    />
                                    <p id='ErrorNum1' className="help-block" style={styleError}> {this.state.num1Error? this.state.num1Error: ''}</p>
                                </div>

                                <div className="form-group">
                                    <input
                                        className="form-control" type="text" label="Number2" placeholder="Enter Number" id="Number2"
                                        value={this.state.no2}
                                        onChange={(event) => {this.setState ({ no2: event.target.value});
                                        }}
                                    />
                                    <p id='ErrorNum2' className="help-block" style={styleError}> {this.state.num2Error? this.state.num2Error: ''}</p>
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
                                    <button className="btn btn-primary" type="button" onClick={() => this.handleClear()}>
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
                                    <p id="answer">{this.state.message}</p>
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