#!/usr/bin/env node
import { config } from "dotenv";
import { join } from "path";
import * as cdk from "aws-cdk-lib";
import { BillingStack } from "../lib/billing-stack";
import { AwsCdkInfraStack } from "../lib/aws-cdk-infra-stack";

config({ path: join(__dirname, "..", ".env") });

const app = new cdk.App();

const env = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

new AwsCdkInfraStack(app, "AwsCdkInfraStack", { env });

new BillingStack(app, "BillingStack", {
  env,
  monthlyBudgetUsd: Number(process.env.MONTHLY_BUDGET_USD) || 10,
});
