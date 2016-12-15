import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RaisedButton } from 'material-ui'


@connect((state) => state)
export default class extends Component {
    render() {
    let selected = this.props.selectedSubtopic;
        return (
            <div style={{
                marginTop: '110px',
                color: 'white',
                    fontSize: '30px',
                    backgroundColor: '#8C88FF',
                    width: '390px',

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
                <div>
                    {
                        selected.completed ?
                            <div style={{
                                backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/en/e/e4/Green_tick.png")',
                                zIndex: 3,
                                position: 'absolute',
                                padding: '150px 200px 200px 200px',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '80px'
                            }}>
                            </div> : ''
                    }
                </div>
                <div style={{ paddingTop: '250px' }}>
                    <RaisedButton
                        label="Let's Go"
                        primary={true}
                        style={{margin: '12px'}}
                        type="submit"
                        onClick={ ()=>console.log('Subtopic detail navigate') }
                    />
                </div>
            </div>
        )
    }

}
