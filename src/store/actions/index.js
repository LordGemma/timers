export {
    userData
} from './userData';

export {
    getAllTimers
} from './timers';

export const CLEAR_STORE = 'CLEAR_STORE';

export const clearStore = () => ({
    type: CLEAR_STORE
});