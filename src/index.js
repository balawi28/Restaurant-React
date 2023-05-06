import axios from 'axios';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.scss';
import store from './store';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

axios.interceptors.request.use(function (config) {
	// Do something before request is sent
	config.url = 'http://localhost:8080/' + config.url;
	config.headers['Authorization'] = localStorage.getItem('JWT');
	return config;
});

// document.documentElement.style.setProperty('--light-theme', 1);

root.render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>
);
