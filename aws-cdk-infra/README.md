# aws-cdk-infra

This AWS CDK app provisions a single S3 bucket and an AWS Budgets monthly cost budget (amount read from `.env`).

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

8. Confirm stack outputs (S3 bucket name from **AwsCdkInfraStack**, budget details from **BillingStack** when deployed).

## Run tests

Tests use [Vitest](https://vitest.dev/) and live under `test/`. They do not call AWS; they synthesize stacks and assert on the generated CloudFormation template.

After `npm install` (and from `aws-cdk-infra/`):

| Command | What it does |
| --- | --- |
| `npm test` | Run the full suite once (`vitest run`). |
| `npm run test:watch` | Re-run tests when files change. |
| `npm run coverage` | Run tests and generate a coverage report (text in the terminal, plus HTML and LCOV under `coverage/`). Open `coverage/index.html` in a browser to view the HTML report. |

## What gets created

### AwsCdkInfraStack

- One S3 bucket
- Public access blocked
- S3-managed encryption enabled
- SSL enforced
- Versioning enabled
- Bucket name exposed as a CloudFormation output

### BillingStack

- Monthly **account-wide** cost budget (AWS Budgets); amount comes from `MONTHLY_BUDGET_USD` in `.env` (repository default is 10 USD)
- No email or SNS notifications from CDK; add alerts in the Billing console if you need them

IAM / org note: creating or viewing budgets may require billing-related permissions in your account or organization.
