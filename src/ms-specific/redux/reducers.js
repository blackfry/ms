import * as actionTypes from './actionTypes';
import { subtopics, topic } from '../data';

let defaultState = {
    topic: {
        title: ''
    },
    subtopics: [
        {
            index: null,
            title: '',
            completed: null
        }
    ],
    selectedSubtopic: {}
};

const  msReducer = (state = defaultState, action) => {
    switch (action.type) {

        case actionTypes.LOAD_DATA:
            console.log('load subtopics reducer', action)
            return {
                ...state,
                subtopics: subtopics,
                topic: topic
            };

        case actionTypes.SELECT_SUBTOPIC:
            console.log('select subtopic reducer', {action})

            // let selectedSubtopic = subtopics.map((subtopic) => {
            //     if (subtopic.index == action.selectedIndex) {
            //         return subtopic
            //     }
            // });

            return {
                ...state,
                selectedSubtopic: state.subtopics[action.selectedIndex -1],
            };

        case actionTypes.UPDATE_COMPLETE_TOPIC:
            console.log('select subtopic reducer', action)
            return {
                ...state,
                initiated: true,
            };

        default:
            return state
    }
};

module.exports = {
    msReducer: msReducer
};