import React, { Component } from 'react';
import './Counter.css';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: '',
            days: '',
            hours: '',
            minutes: '',
            seconds: ''
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.getTimeRemaining(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    getTimeRemaining() {
        const timeLeft = Date.parse(this.props.deadline) - Date.parse(new Date());
   
        const seconds = Math.floor((timeLeft / 1000) % 60);
        const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
        const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let years;

        if (days > 365) {
          years = Math.floor(days / 365);
          days = days % 365;
        }

        const formatteDHours = ('0' + hours).slice(-2);
        const formattedMinutes = ('0' + minutes).slice(-2);
        const formattedSeconds = ('0' + seconds).slice(-2);

        this.setState({
            years: years,
            days: days,
            hours: formatteDHours,
            minutes: formattedMinutes,
            seconds: formattedSeconds
        });
    }

    render() {
        return (
            <div id="clockdiv">
                <h1>Skynet is coming in:</h1>
                <div>
                    <span>{this.state.years}</span>
                    <div className="smalltext">Years</div>
                </div>
                <div>
                    <span>{this.state.days}</span>
                    <div className="smalltext">Days</div>
                </div>
                <div>
                    <span>{this.state.hours}</span>
                    <div className="smalltext">Hours</div>
                </div>
                <div>
                    <span>{this.state.minutes}</span>
                    <div className="smalltext">Minutes</div>
                </div>
                <div>
                    <span>{this.state.seconds}</span>
                    <div className="smalltext">Seconds</div>
                </div>
            </div>
        );
    }
}
