
export const getSearchString = state => state.searchString;


export const countVisibleCards = ({cards, searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;


export const countAllCards = ({cards}) => cards.length;



const reducerName = 'search';
const createActionName = name => `app/${reducerName}/${name}`;

export const SEARCH = createActionName('SEARCH');

export const createAction_changeSearchString = payload => ({ payload: payload, type: SEARCH });

export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case SEARCH:
      return action.payload;
    default:
      return statePart;
  }
}

