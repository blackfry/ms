import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavRow from './navrow';
import Card from './card';
import { loadDataAction } from './redux/actions';
import * as $ from 'jquery';


@connect((state) => state)
export class Main extends Component {

    componentDidMount() {
        let dispatch = this.props.dispatch;
        dispatch(loadDataAction())
    }

    render() {
        let poops = this.props;
        console.log('main props', {poops})

        let subtopics = this.props.subtopics;
        let selectedSubtopic = this.props.selectedSubtopic;

        return (
            <div style={{
                paddingLeft: '20px',
                backgroundColor: '#BA77FF',
                width: '600px',
                height: '200px'
                }}>
                <div>
                    <NavRow subtopics={subtopics}/>
                </div>
                <div>
                    {
                        $.isEmptyObject(selectedSubtopic) ? '' :
                        <Card selectedSubtopic={selectedSubtopic}/>
                    }
                </div>
            </div>
        )
    }
}