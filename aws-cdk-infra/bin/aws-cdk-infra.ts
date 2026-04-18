#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { AwsCdkInfraStack } from "../lib/aws-cdk-infra-stack";

const app = new cdk.App();

new AwsCdkInfraStack(app, "AwsCdkInfraStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
