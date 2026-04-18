import { describe, expect, it } from "vitest";
import * as cdk from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { AwsCdkInfraStack } from "../lib/aws-cdk-infra-stack";

describe("AwsCdkInfraStack", () => {
  it("creates one S3 bucket with secure defaults", () => {
    const app = new cdk.App();
    const stack = new AwsCdkInfraStack(app, "TestInfraStack");

    const template = Template.fromStack(stack);

    template.resourceCountIs("AWS::S3::Bucket", 1);

    template.hasResourceProperties("AWS::S3::Bucket", {
      PublicAccessBlockConfiguration: {
        BlockPublicAcls: true,
        BlockPublicPolicy: true,
        IgnorePublicAcls: true,
        RestrictPublicBuckets: true,
      },
      BucketEncryption: {
        ServerSideEncryptionConfiguration: [
          {
            ServerSideEncryptionByDefault: { SSEAlgorithm: "AES256" },
          },
        ],
      },
      VersioningConfiguration: { Status: "Enabled" },
    });
  });

  it("outputs the bucket name", () => {
    const app = new cdk.App();
    const stack = new AwsCdkInfraStack(app, "TestInfraStackOutputs");

    const template = Template.fromStack(stack);

    template.hasOutput("BucketName", {
      Description: "Name of the provisioned S3 bucket",
    });
  });
});

