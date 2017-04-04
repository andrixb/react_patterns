import FETCH_WEATHER from '../actions/index';


export default function(state = null, action) {
    switch(action.type) {
        case 'FETCH_WEATHER':
            if ([action.payload.data] === 'undefined') {
                [action.payload.data] = 0;
            }
            console.log([action.payload.data])
            return state.concat([action.payload.data]);
            // return [action.payload.data, ...state];
    }
    return state;
}
