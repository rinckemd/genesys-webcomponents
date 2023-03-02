#! /usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

const versionHelper = require('./version-helper');

const name = 'common-ui-docs/genesys-webcomponents-test';
const version = versionHelper.getDeployVersion();
const build = `${process.env.BUILD_NUMBER}`;
const buildDate = new Date().toISOString();
const indexFiles = glob
  .sync(path.join(__dirname, '../dist/*.html'))
  .map(file => ({ file: path.basename(file) }));

const manifest = {
  name,
  version,
  build,
  buildDate,
  indexFiles
};

const manifestPath = path.join(__dirname, '../manifest.json');
const manifestJson = JSON.stringify(manifest, null, 2);

console.log(`Writing manifest file: ${manifestPath}`, manifestJson);
fs.writeFileSync(manifestPath, manifestJson, { encoding: 'utf8' });
