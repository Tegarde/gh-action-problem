const core = require('@actions/core');
const exec = require('@actions/exec');
const github = require('@actions/github');

function run() {
    core.notice('Hello from my custom action');
}

run();