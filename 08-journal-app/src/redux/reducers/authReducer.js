import { types } from '../types';

// {
//     uid: 'sdhfaksdf8safdasdf0af8s9df',
//     name: 'Daniel',
// }

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName,
            };
        case types.logout:
            return {};

        default:
            return state;
    }
};
