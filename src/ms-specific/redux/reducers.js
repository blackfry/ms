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
            completed: null,
            colour: '#50D2C2'
        }
    ],
    selectedSubtopic: {}
};

const  msReducer = (state = defaultState, action) => {
    switch (action.type) {

        case actionTypes.LOAD_DATA:
            return {
                ...state,
                subtopics: subtopics,
                topic: topic
            };

        case actionTypes.SELECT_SUBTOPIC:
            return {
                ...state,
                selectedSubtopic: state.subtopics[action.selectedIndex -1],
            };

        case actionTypes.UPDATE_COMPLETE_TOPIC:
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