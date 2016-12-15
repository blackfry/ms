import * as actionTypes from './actionTypes';


export const loadDataAction = () => {
    return {
        type: actionTypes.LOAD_DATA,
    }
};


export const selectSubtopicAction = (selectedIndex) => {
    return {
        type: actionTypes.SELECT_SUBTOPIC,
        selectedIndex: selectedIndex
    }
};
