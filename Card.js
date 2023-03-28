import React, { Component } from 'react';



class Card extends Component {
    render() {
        return (
            <div className='allcards'>
                <div className='card1'>
                    <div className='head1'>
                        <img alt='Sedan' src={this.props.Image}/>
                        <h1>{this.props.Title}</h1>
                    </div>
                    <div className='cont'>
                        <p>{this.props.Text}</p>    
                    </div>
                    <div className='but'>
                        <button>Learn More</button>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Card;