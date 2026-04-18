# aws-cdk-sst-infra

This SST app provisions a single S3 bucket in AWS.

## Prerequisites

1. Install Node.js 20 or newer on your machine.
2. Configure AWS credentials in the shell profile you plan to use for deployment.

## Run locally

1. Open a terminal in the repository root.
2. Change into this directory:

   `cd aws-cdk-sst-infra`

3. Install dependencies:

   `npm install`

4. Optionally typecheck the config:

   `npm run typecheck`

5. Deploy a development stage:

   `npm run deploy -- --stage dev`

6. Confirm SST prints the `bucketName` output after deployment.

## Useful commands

- Start SST dev mode:

  `npm run dev`

- Remove a non-production stage:

  `npm run remove -- --stage dev`

## Notes

- The app name is `aws-cdk-sst-infra`.
- The `production` stage is protected from accidental removal.
- Non-production stages use `remove`, while `production` uses `retain`.
