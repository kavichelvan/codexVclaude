import * as budgets from "aws-cdk-lib/aws-budgets";
import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

export interface BillingStackProps extends cdk.StackProps {
  readonly monthlyBudgetUsd: number;
}

/**
 * Account-wide monthly cost budget via AWS Budgets (no notifications; add alerts in console if needed).
 */
export class BillingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: BillingStackProps) {
    super(scope, id, props);

    const { monthlyBudgetUsd } = props;
    const budgetName = `${this.stackName}-monthly-cost`;

    new budgets.CfnBudget(this, "MonthlyCostBudget", {
      budget: {
        budgetName,
        budgetType: "COST",
        timeUnit: "MONTHLY",
        budgetLimit: {
          amount: monthlyBudgetUsd,
          unit: "USD",
        },
      },
    });

    new cdk.CfnOutput(this, "BudgetName", {
      description: "AWS Budgets cost budget name",
      value: budgetName,
    });

    new cdk.CfnOutput(this, "MonthlyBudgetUsd", {
      description: "Configured monthly cost budget (USD)",
      value: String(monthlyBudgetUsd),
    });
  }
}
