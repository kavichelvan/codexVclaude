import { describe, expect, it } from "vitest";
import * as cdk from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { BillingStack } from "../lib/billing-stack";

describe("BillingStack", () => {
  it("creates an AWS Budgets monthly cost budget with configured USD limit", () => {
    const app = new cdk.App();
    const stack = new BillingStack(app, "TestBillingStack", {
      monthlyBudgetUsd: 10,
    });

    const template = Template.fromStack(stack);

    template.resourceCountIs("AWS::Budgets::Budget", 1);

    template.hasResourceProperties("AWS::Budgets::Budget", {
      Budget: {
        BudgetType: "COST",
        TimeUnit: "MONTHLY",
        BudgetLimit: { Amount: 10, Unit: "USD" },
      },
    });
  });

  it("outputs budget name and configured monthly budget", () => {
    const app = new cdk.App();
    const stack = new BillingStack(app, "TestBillingStackOutputs", {
      monthlyBudgetUsd: 25,
    });

    const template = Template.fromStack(stack);

    template.hasOutput("BudgetName", {
      Description: "AWS Budgets cost budget name",
    });

    template.hasOutput("MonthlyBudgetUsd", {
      Description: "Configured monthly cost budget (USD)",
      Value: "25",
    });
  });
});

