variable "aws_region" {
  description = "AWS region where the S3 bucket will be created."
  type        = string
  default     = "us-east-1"
}

variable "bucket_name_prefix" {
  description = "Prefix used to generate the final globally unique S3 bucket name."
  type        = string
  default     = "codex-vclaude-bucket"
}

variable "tags" {
  description = "Tags applied to the S3 bucket."
  type        = map(string)
  default = {
    ManagedBy   = "Terraform"
    Project     = "codexVclaude"
    Environment = "dev"
  }
}
