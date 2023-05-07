import 'babel-polyfill'; // es6转es5兼容ie
import 'url-search-params-polyfill'; // 让ie支持new URLSearchParams()
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import './assets/js/libs/zepto.js';
import './assets/css/common/public.css';
import './assets/js/conf/global.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
let store = createStore(reducers);

class Index extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Provider store={store}>
					<App />
				</Provider>
			</React.Fragment>
		)
	}
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
	<Index />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
