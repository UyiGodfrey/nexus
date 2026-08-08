# ADR-002: Primary Cloud Platform

## Status

Accepted

## Date

2026-08-08

## Context

NEXUS requires a cloud platform capable of supporting a production-oriented cloud-native application and its associated DevOps engineering platform.

The platform must support networking, identity and access management, compute, containerization, Kubernetes, databases, object storage, DNS, load balancing, monitoring, encryption, security controls, scalability, Infrastructure as Code, disaster recovery, and cost management.

The project also aims to develop transferable cloud engineering knowledge rather than only knowledge of individual vendor services.

Several cloud strategies were considered, including AWS, Microsoft Azure, Google Cloud Platform, and a multi-cloud architecture.

## Decision

AWS will be used as the primary cloud platform for NEXUS.

AWS-specific services will be used where they provide appropriate managed capabilities, while architectural decisions will be based on general cloud engineering principles.

The project will emphasize understanding the underlying cloud concepts so that equivalent services in other cloud providers can be understood and evaluated.

## Initial AWS Service Mapping

| Capability | AWS Service |
|---|---|
| Cloud networking | Amazon VPC |
| Identity and access management | AWS IAM |
| Kubernetes | Amazon EKS |
| Container registry | Amazon ECR |
| Compute | Amazon EC2 |
| Managed relational database | Amazon RDS |
| Object storage | Amazon S3 |
| DNS | Amazon Route 53 |
| Load balancing | Elastic Load Balancing |
| Monitoring | Amazon CloudWatch |
| Encryption and key management | AWS KMS |
| Audit logging | AWS CloudTrail |

This mapping may evolve as the platform architecture becomes more mature.

## Alternatives Considered

### Microsoft Azure

Azure provides a comprehensive enterprise cloud platform with strong capabilities in identity, compute, networking, containers, databases, security, and monitoring.

It was not selected as the primary platform because AWS provides a suitable ecosystem for the project's intended architecture and learning objectives.

### Google Cloud Platform

Google Cloud provides strong capabilities in Kubernetes, networking, data platforms, and cloud-native engineering.

It was not selected as the primary platform because AWS provides sufficient capabilities for NEXUS while allowing the project to maintain a single primary cloud implementation.

### Multi-Cloud

A multi-cloud architecture would provide exposure to multiple cloud providers.

However, it would substantially increase:

- infrastructure complexity
- operational complexity
- networking complexity
- identity management complexity
- monitoring requirements
- cost
- maintenance overhead

The additional complexity is not justified at the current stage of the project.

Multi-cloud concepts may be explored later where they provide a meaningful engineering benefit.

## Consequences

### Positive Consequences

NEXUS will provide practical experience with:

- AWS networking
- IAM
- cloud security
- Kubernetes
- managed databases
- container registries
- object storage
- DNS
- load balancing
- monitoring
- encryption
- audit logging
- cloud automation
- Infrastructure as Code

The architecture will also provide a foundation for comparing AWS services with equivalent capabilities in Azure and GCP.

### Negative Consequences

NEXUS will initially depend on AWS-specific infrastructure and services.

This creates some degree of vendor coupling and introduces cloud costs.

Cost controls, budgets, resource tagging, infrastructure destruction procedures, and environment management will therefore be incorporated into the project.

## Cost Management

Because NEXUS is an educational and portfolio project, cloud resources must be provisioned incrementally and monitored carefully.

The project will prioritize:

- free-tier or low-cost resources where appropriate
- automated cleanup
- resource tagging
- budgets and alerts
- minimal production-scale resources during development
- explicit destruction procedures for temporary environments

## Decision Outcome

AWS is accepted as the primary cloud platform for NEXUS.

The project will focus deeply on AWS while maintaining an understanding of the underlying cloud concepts and their equivalents across other major cloud providers.