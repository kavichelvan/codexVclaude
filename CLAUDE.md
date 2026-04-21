# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

AWS CDK (TypeScript) app that provisions an S3 bucket (`AwsCdkInfraStack`) and an AWS Budgets monthly cost budget (`BillingStack`). All CDK code lives under `aws-cdk-infra/`.

## Commands

All commands run from `aws-cdk-infra/`:

```bash
npm install          # install dependencies (required before anything else)
npm run build        # compile TypeScript → dist/
npm test             # run Vitest test suite once
npm run test:watch   # re-run on file changes
npm run coverage     # test + coverage report (HTML under coverage/)
npm run synth        # build + cdk synth (inspect CloudFormation output)
npm run deploy       # build + cdk deploy (both stacks)
npm run diff         # build + cdk diff
```

To run a single test file:
```bash
npx vitest run test/billing-stack.test.ts
```

CDK entry point uses `ts-node` directly (`npx ts-node --prefer-ts-exts bin/aws-cdk-infra.ts`), so `npm run build` is not strictly required for synth/deploy but `npm run synth` runs it anyway.

## Architecture

```
bin/aws-cdk-infra.ts        ← app entry; loads .env, instantiates stacks
lib/aws-cdk-infra-stack.ts  ← AwsCdkInfraStack: S3 bucket with secure defaults
lib/billing-stack.ts        ← BillingStack: AWS Budgets monthly cost budget
test/                       ← Vitest tests using aws-cdk-lib/assertions (no real AWS calls)
```

### Stack design

- Each stack is a separate class in `lib/`; `bin/aws-cdk-infra.ts` wires them together
- `BillingStack` takes a custom `BillingStackProps` extending `cdk.StackProps` with `monthlyBudgetUsd`
- Both stacks use `CfnOutput` to expose key values as CloudFormation outputs

### Environment variables (read from `aws-cdk-infra/.env`)

| Variable | Default | Notes |
|---|---|---|
| `MONTHLY_BUDGET_USD` | `10` | Monthly budget limit in USD |
| `INFRA_REGION` | `CDK_DEFAULT_REGION` | Region for S3 stack |
| `BILLING_REGION` | `us-east-1` | Must stay `us-east-1` — AWS Budgets API constraint |

### Testing

Tests synthesize stacks in memory and assert on the generated CloudFormation template — no AWS credentials required. Coverage includes `lib/**` and `bin/**`.
