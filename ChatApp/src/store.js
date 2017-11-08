import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import sagas from './sagas';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducer, initialState, applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(sagas);
  return store;
}
