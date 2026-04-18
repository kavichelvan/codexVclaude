# aws-cdk-infra

This AWS CDK app provisions a single S3 bucket.

## Prerequisites

1. Install Node.js 20 or newer.
2. Configure AWS credentials locally so the CDK CLI can access your AWS account.

## Run locally

1. Open a terminal in the repository root.
2. Change into this directory:

   `cd aws-cdk-infra`

3. Install dependencies:

   `npm install`

4. Build the TypeScript project:

   `npm run build`

5. Synthesize the CloudFormation template:

   `npm run synth`

6. Bootstrap CDK in your AWS account once per account and region:

   `npx cdk bootstrap`

7. Deploy the stack:

   `npm run deploy`

8. Confirm the output shows the generated S3 bucket name.

## What gets created

- One S3 bucket
- Public access blocked
- S3-managed encryption enabled
- SSL enforced
- Versioning enabled
- Bucket name exposed as a CloudFormation output
