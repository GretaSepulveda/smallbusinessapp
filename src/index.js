import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDV2dQNCMzPRRHQ0lx6EUT1TJe2-77y_o4
&callback=initMap"
type="text/javascript">
</script>

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
