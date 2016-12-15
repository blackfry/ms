import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as image from './assets/tick_red.png'

// class CardContainer extends Component {
//     render() {
//         return (
//             <div style={{ color: 'white', fontSize: '30px' }}>
//                 {}
//             </div>
//         )
//     }
// }

@connect((state) => state)
export default class extends Component {


    render() {
    let selected = this.props.selectedSubtopic;
        console.log('card', {selected})
        return (
            <div style={{
                color: 'white',
                fontSize: '30px',
                backgroundColor: '#8C88FF',
                width: '390',
                marginTop: '110px',
                marginLeft: '90px',
                height: '500px',
                position: 'absolute',
                zIndex: 1,
            }}>
            <div style={{
                paddingTop: '40px'
            }}>
                {selected.index}{'.   '}
                {selected.title}
            </div>
                <span>
                    {
                        selected.completed ?
                        <div style={{
                            backgroundImage: 'url('+ "https://upload.wikimedia.org/wikipedia/en/e/e4/Green_tick.png" +')',
                            zIndex: 3,
                            position: 'absolute'
                        }}>
                        </div> : ''
                    }
                </span>
                </div>
        )
    }

}
