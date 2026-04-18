# codexVclaude

This project is currently being created fully via Codex, and future development will continue via Claude Code.

This repository includes a minimal AWS CDK infrastructure app under `aws-cdk-infra` that provisions a single S3 bucket.

## Project structure

- `aws-cdk-infra/bin/aws-cdk-infra.ts`: CDK app entrypoint
- `aws-cdk-infra/lib/aws-cdk-infra-stack.ts`: CDK stack definition with one S3 bucket
- `aws-cdk-infra/package.json`: CDK scripts and dependencies

## Step-by-step execution guide

1. Install Node.js 20 or newer.
2. Configure AWS credentials locally so the CDK CLI can access your AWS account.
3. Open a terminal in the repository root.
4. Change into the CDK directory with `cd aws-cdk-infra`.
5. Install dependencies with `npm install`.
6. Build the TypeScript project with `npm run build`.
7. Synthesize the CloudFormation template with `npm run synth`.
8. Bootstrap CDK in your AWS account once per account/region with `npx cdk bootstrap`.
9. Deploy the stack with `npm run deploy`.
10. Confirm the output shows the generated S3 bucket name.

## What gets created

- One S3 bucket
- Public access blocked
- S3-managed encryption enabled
- SSL enforced
- Versioning enabled
- Bucket name exposed as a CloudFormation output
