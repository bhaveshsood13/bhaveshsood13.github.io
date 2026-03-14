---
layout: page
title: Request-based Auto-Scaling using AWS Lambda
description: Serverless inference infrastructure with Terraform, Docker, and fine-grained request scaling.
img: assets/img/9.jpg
importance: 2
category: work
---

Built for Carnegie Mellon's Advanced Cloud Computing course (15-709) in February and March 2025.

### What I built

I designed a request-based auto-scaling inference service for a dogs-versus-cats classifier using AWS Lambda.

### System components

- Automated infrastructure setup with Terraform.
- Deployed Lambda functions and configured security groups and load balancers.
- Built the Docker runtime so the Lambda environment could install dependencies and download the ML model from S3.

### Outcome

The system improved scalability and performance by provisioning capacity at the request level instead of relying on coarse service-level scaling.
