import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { reducer } from './reducers';

const persistConfig = {
  // blacklist: ['form'], //if you don't want to store in local storage
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

const middleware = applyMiddleware(thunk);
const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);
export { store, persistor };
