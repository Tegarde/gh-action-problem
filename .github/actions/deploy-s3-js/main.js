const core = require('@actions/core');
const exec = require('@actions/exec');
//const github = require('@actions/github');

function run() {
    // 1) Get inputs
    const bucket = core.getInput('bucket', { required: true });
    const region = core.getInput('region', { required: true });
    const distFolder = core.getInput('dist-folder', { required: true });

    // 2) Upload files to bucket
    const s3Uri = `s3://${bucket}`;
    core.notice(`Deploying to ${s3Uri} on region ${region} for the folder ${distFolder}`);
    exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${region}`, { ignoreReturnCode: true });
}

run();