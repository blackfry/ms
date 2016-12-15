import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSubtopicAction } from './redux/actions';


class SubtopicItem extends Component {

    handleSelect = () => {
        let selectedIndex = this.props.index;
        // console.log('click', {pop})
        let dispatch = this.props.dispatch;
        dispatch(selectSubtopicAction(selectedIndex))
    };

    render() {
        return (
            <div style={{
                float: 'left'
            }}>
            <div
                style={{
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#50D2C2',
                    textAlign: 'center',
                    marginLeft: '10px',
                    color: 'white'
                }}
                onClick={()=>this.handleSelect()}
            >
                <div style={{ paddingTop: '15px' }}>
                    {this.props.index}
                </div>
            </div>
                </div>
        )
    }

}


@connect((state) => state)
export default class extends Component {

    composeSubtopics = () => {
        let subtopics = this.props.subtopics;
        return subtopics.map((subtopic) => {
            return (
                <SubtopicItem
                    {...this.props}
                    {...subtopic}
                />
            )
        })
    };
f
    render() {
    let poops = this.props
        console.log('navrow', {poops})
        if(typeof this.props != 'undefined') {
            let topic = this.props.topic
            return (
                <div>
                    <div style={{
                        fontSize: '25px',
                        paddingTop: '35px',
                        paddingBottom: '50px',
                        color: 'white'}}>
                        {topic.title}
                    </div>
                    <div >
                        { this.composeSubtopics() }
                    </div>
                </div>
            )
        }
    }
}