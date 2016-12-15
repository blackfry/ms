import * as actionTypes from './actionTypes';


export const loadDataAction = () => {
    console.log('load data action')
    return {
        type: actionTypes.LOAD_DATA,
    }
};


export const selectSubtopicAction = (selectedIndex) => {
    console.log('select action', selectedIndex)
    return {
        type: actionTypes.SELECT_SUBTOPIC,
        selectedIndex: selectedIndex
    }
};
