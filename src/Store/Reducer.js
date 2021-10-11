const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_PAGE':
            return {
                ...state,
                pageNo: action.pageNo
            };
        case 'SET_SELECTED_RADIO':
            return {
                ...state,
                selectedRadio: action.selectedRadio
            };
        case 'SET_START_YEAR':
            return {
                ...state,
                startYear: action.startYear
            };
        case 'SET_END_YEAR':
            return {
                ...state,
                endYear: action.endYear
            };
        case 'SET_EXP':
            return {
                ...state,
                exp: action.exp
            };
        case 'SET_USERNAME':
            return {
                ...state,
                username: action.username
            };
        case 'SET_MOBILE':
            return {
                ...state,
                mobile: action.mobile
            };
        case 'SET_SWITCH_HOME':
            return {
                ...state,
                switchHome: action.switchHome
            };
        case 'SET_SCRONE_OPT':
            return {
                ...state,
                scrOneOpt: action.scrOneOpt
            };
        case 'SET_SCRTWO_OPT':
            return {
                ...state,
                scrTwoOpt: action.scrTwoOpt
            };
        default:
            return state;
    }
};

export default Reducer;
