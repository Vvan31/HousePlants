import { Provider } from 'react-redux'; 
import thunk from 'redux-thunk';
import { legacy_createStore as  createStore, applyMiddleware } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react'

import { root }  from '@/data/redux/plantReducer';


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, root);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export const ReduxProvider = ({ children }) => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            {children}
        </PersistGate>
    </Provider>
 )   