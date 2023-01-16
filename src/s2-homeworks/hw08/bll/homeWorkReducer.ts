import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

const compareFooAZ = (a: UserType, b: UserType) => {
    return a.name > b.name ? 1 : -1
}

const compareFooZA = (a: UserType, b: UserType) => {
    return a.name < b.name ? 1 : -1
}

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    const copyState = [...state];
    switch (action.type) {
        case 'sort': { // by name
            return action.payload === 'up' ? copyState.sort(compareFooAZ) : copyState.sort(compareFooZA)
        }
        case 'check': {
            return state.filter(element => element.age >= action.payload);
        }
        default:
            return state
    }
}
