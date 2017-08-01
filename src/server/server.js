import express  from 'express';
import React from 'react';
//import ReactDom from 'react-dom/server';
import ReactDom from 'react-dom/server';
import App from '../client/components/App';

const app = express();

app.use((req, res) => {
	const componentHTML = ReactDom.renderToString(<App />);

	
  res.end(renderHTML(componentHTML));
});

//const assetUrl = process.env.NODE_ENV !=='production' ? 'http://localhost:8080' : '/';	
const assetUrl = 'http://localhost:8080';	

function renderHTML(componentHTML) {
	return `
		<!DOCTYPE html>
		<html lang="en">

		<head>
			<meta charset="utf-8">
			<title>Two</title>
			<link rel="stylesheet" href="${assetUrl}/src/public/assets/styles.css">
			<meta content="width=device-width, initial-scale=1" name="viewport" />
		</head>

		<body>
			<div id="react-view">${componentHTML}</div>

			<script src="${assetUrl}/src/public/assets/bundle.js"></script>
		</body>

		</html>
	`;	
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`);
});