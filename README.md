# codexVclaude

This project is currently being created fully via Codex, and future development will continue via Claude Code.

This repository includes a Terraform infrastructure app under `aws-terraform-infra` that provisions a single S3 bucket on AWS.

## Project structure

- `aws-terraform-infra/providers.tf`: Terraform version and provider configuration
- `aws-terraform-infra/main.tf`: Terraform S3 bucket resources
- `aws-terraform-infra/variables.tf`: Terraform input variables
- `aws-terraform-infra/outputs.tf`: Terraform outputs
- `aws-terraform-infra/terraform.tfvars.example`: example variable values

## Step-by-step execution guide

1. Install Terraform 1.5 or newer.
2. Configure AWS credentials locally so Terraform can access your AWS account.
3. Open a terminal in the repository root.
4. Change into the Terraform directory with `cd aws-terraform-infra`.
5. Copy the example variables file with `Copy-Item terraform.tfvars.example terraform.tfvars`.
6. Update `terraform.tfvars` if you want a different AWS region, bucket name prefix, or tags.
7. Initialize the working directory with `terraform init`.
8. Review the execution plan with `terraform plan`.
9. Apply the infrastructure with `terraform apply`.
10. Type `yes` when Terraform asks for confirmation.
11. Confirm the output shows the generated bucket name and ARN.
