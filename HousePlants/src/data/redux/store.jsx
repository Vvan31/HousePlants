import { Provider } from 'react-redux'; 
import thunk from 'redux-thunk';
import { legacy_createStore as  createStore, applyMiddleware } from 'redux';
import { root }  from '@/data/redux/plantReducer';

const store = createStore(root, applyMiddleware(thunk));

export const ReduxProvider = ({ children }) => (
    <Provider store={store}>
        {children}
    </Provider>
 )   