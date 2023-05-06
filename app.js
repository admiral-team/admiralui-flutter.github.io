const https = require('https');
const { Octokit } = require("@octokit/rest");
const download = require('download-git-repo');
const path = require('path');
const fs = require('fs');
const express = require('express');
var cookieParser = require('cookie-parser');
const app = express();
const serveStatic = require('serve-static');
const octokit = new Octokit();

const PORT = 80;

const outputDir = './admiralui-flutter';
const repository = 'admiral-team/admiralui-flutter';
const indexPath = path.join(outputDir, 'example', 'build', 'web', 'index.html');
const indexPathWeb = path.join(outputDir, 'example', 'build', 'web');

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get('/', async (req, res, next) => {
  try {
    // Получение списка веток
    const { data: branches } = await octokit.repos.listBranches({
      owner: 'admiral-team',
      repo: 'admiralui-flutter'
    });

    // Отображение списка веток на HTML-странице
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><ul>');
    branches.forEach(branch => {
      res.write(`<li><a href="/download/${branch.name}">${branch.name}</a></li>`);
    });
    res.write('</ul></body></html>');
    res.end();
  } catch (error) {
    console.error(error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.write('Internal Server Error');
    res.end();
  }
});

app.get('/download/feature/:branch', async (req, res, next) => {
  const branch = req.params.branch;
    download(`${repository}#feature/${branch}`, outputDir, (err) => {
      if (err) {
        console.error('Error downloading repository', err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('Error downloading repository');
        res.end();
        return;
      }
      console.log('Repository downloaded successfully');

      const indexPathWeb = path.join(outputDir, 'example', 'build', 'web', 'index.html');
      if (!fs.existsSync(indexPathWeb)) {
        console.error('index.html not found');
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('Error loading index.html');
        res.end();
        return;
      }
      res.redirect('/flutterWeb');
    });
});

app.get('/flutterWeb', (req, res, next) => {
  const filePath = path.join(__dirname, 'admiralui-flutter', 'example', 'build', 'web', 'index.html');
  app.use(serveStatic(indexPathWeb));
  res.sendFile(filePath);
});

app.get('*', function(req, res) {
  res.status(404).send('Not Found');
});

const server = app.listen(PORT);