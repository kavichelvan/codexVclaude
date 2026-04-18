# aws-terraform-infra

This Terraform configuration provisions a single S3 bucket in AWS.

## Prerequisites

1. Install Terraform 1.5 or newer.
2. Configure AWS credentials locally so Terraform can access your AWS account.

## Run locally

1. Open a terminal in the repository root.
2. Change into this directory:

   `cd aws-terraform-infra`

3. Copy the example variables file:

   `Copy-Item terraform.tfvars.example terraform.tfvars`

4. Update `terraform.tfvars` if you want a different AWS region, bucket name prefix, or tags.

5. Initialize the working directory:

   `terraform init`

6. Review the execution plan:

   `terraform plan`

7. Apply the infrastructure:

   `terraform apply`

8. Type `yes` when Terraform asks for confirmation.

9. Confirm the output shows the generated bucket name and ARN.

## What gets created

- One S3 bucket
- A generated globally unique bucket name based on your prefix
- Versioning enabled
- S3-managed server-side encryption enabled
- Public access fully blocked
- Bucket name and ARN exposed as Terraform outputs
