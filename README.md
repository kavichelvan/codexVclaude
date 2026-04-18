# codexVclaude

This project is currently being created fully via Codex, and future development will continue via Claude Code.

This repository includes an SST infrastructure app under `aws-cdk-sst-infra` that provisions a single S3 bucket on AWS.

## Project structure

- `aws-cdk-sst-infra/sst.config.ts`: SST app definition with one S3 bucket
- `aws-cdk-sst-infra/package.json`: SST scripts and dependencies
- `aws-cdk-sst-infra/tsconfig.json`: TypeScript configuration
- `aws-cdk-sst-infra/README.md`: folder-level execution guide

## Step-by-step execution guide

1. Install Node.js 20 or newer.
2. Configure AWS credentials locally so SST can access your AWS account.
3. Open a terminal in the repository root.
4. Change into the SST directory with `cd aws-cdk-sst-infra`.
5. Install dependencies with `npm install`.
6. Optionally verify the configuration with `npm run typecheck`.
7. Deploy a development stage with `npm run deploy -- --stage dev`.
8. Confirm SST prints the `bucketName` output after deployment.
9. Use `npm run dev` for live development.
10. Remove a non-production stage with `npm run remove -- --stage dev`.
