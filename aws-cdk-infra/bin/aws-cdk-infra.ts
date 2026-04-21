#!/usr/bin/env node
import { config } from "dotenv";
import { join } from "path";
import * as cdk from "aws-cdk-lib";
import { BillingStack } from "../lib/billing-stack";
import { AwsCdkInfraStack } from "../lib/aws-cdk-infra-stack";

config({ path: join(__dirname, "..", ".env") });

const app = new cdk.App();

const account = process.env.CDK_DEFAULT_ACCOUNT;

new AwsCdkInfraStack(app, "AwsCdkInfraStack", {
  env: { account, region: process.env.INFRA_REGION || process.env.CDK_DEFAULT_REGION },
});

new BillingStack(app, "BillingStack", {
  env: { account, region: process.env.BILLING_REGION || "us-east-1" },
  monthlyBudgetUsd: Number(process.env.MONTHLY_BUDGET_USD) || 10,
});
