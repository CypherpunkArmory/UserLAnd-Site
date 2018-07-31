export const LOAD_START = 'LOAD_START';
export const LOAD_END = 'LOAD_END';
export const ERROR = 'ERROR';
export const ERROR_CLEAR = 'ERROR_CLEAR';

export const loadingSelector = state => state.loading;

export function loading(state = false, { type }) {
  switch(type) {
    case LOAD_START:
      return true;
    case LOAD_END: 
      return false;
    default:
      return state;
  }
}

export const errorSelector = state => state.error;

const initialErrorState = null;

export function error(state = initialErrorState, { type, payload }) {
  switch(type) {
    case ERROR: 
      return payload;
    case LOAD_START:
      return initialErrorState;
    default: 
      return state;
  }
}