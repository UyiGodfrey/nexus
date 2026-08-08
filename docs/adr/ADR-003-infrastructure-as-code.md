# ADR-003: Infrastructure as Code Strategy

## Status

Accepted

## Date

2026-08-08

## Context

NEXUS requires a repeatable and auditable method for provisioning and managing cloud infrastructure.

The platform will contain multiple environments and a growing collection of infrastructure resources, including networking, identity, Kubernetes, databases, load balancing, storage, security controls, monitoring, and supporting services.

Managing these resources manually through the cloud provider console would make infrastructure difficult to reproduce, review, audit, test, and maintain.

NEXUS therefore requires an Infrastructure as Code strategy that supports version control, repeatability, automation, reusable components, environment separation, change review, and infrastructure lifecycle management.

The primary alternatives considered are Terraform, AWS CloudFormation, Pulumi, and manual infrastructure management.

## Decision

Terraform will be used as the primary Infrastructure as Code tool for NEXUS.

Terraform configuration will be stored in Git and managed using the same engineering practices applied to application code.

Infrastructure changes will eventually follow a controlled workflow:

```text
Developer
    ↓
Terraform Change
    ↓
Git
    ↓
Pull Request
    ↓
Validation
    ↓
Security / Policy Checks
    ↓
Terraform Plan
    ↓
Review / Approval
    ↓
Terraform Apply
    ↓
Cloud Infrastructure
```

## Architecture

Terraform will use reusable modules for common infrastructure components.

The project will progressively organize infrastructure into:

```text
infrastructure/
└── terraform/
    ├── modules/
    │   ├── vpc/
    │   ├── eks/
    │   ├── rds/
    │   ├── iam/
    │   └── ...
    │
    └── environments/
        ├── dev/
        ├── qa/
        ├── staging/
        └── production/
```

The exact structure may evolve as the platform becomes more mature.

## Infrastructure Principles

NEXUS Terraform infrastructure will follow these principles:

1. **Declarative Infrastructure**  
   Desired infrastructure state will be defined as code.

2. **Version Control**  
   Infrastructure changes will be tracked through Git.

3. **Reusable Modules**  
   Common infrastructure patterns will be implemented as reusable modules.

4. **Environment Isolation**  
   Development, QA, staging, and production will have appropriate separation.

5. **Immutable and Repeatable Provisioning**  
   Infrastructure should be reproducible from version-controlled configuration.

6. **Plan Before Apply**  
   Changes should be reviewed through Terraform plans before being applied where appropriate.

7. **Least Privilege**  
   Terraform execution identities should receive only the permissions necessary to perform their tasks.

8. **Secrets Protection**  
   Sensitive values must not be hard-coded into Terraform configuration.

9. **Drift Detection**  
   The platform should identify differences between declared infrastructure and actual infrastructure.

10. **Automated Validation**  
    Terraform code should eventually undergo formatting, validation, security scanning, testing, and policy checks.

## State Management

Terraform state is a critical component of infrastructure management.

NEXUS will not treat Terraform state as ordinary source code.

The project will progressively implement managed remote state with appropriate:

- access controls
- encryption
- concurrency protection
- backup and recovery
- environment isolation

Local state may be used during early development and experimentation.

## Alternatives Considered

### AWS CloudFormation

CloudFormation provides deep AWS integration and is a capable Infrastructure as Code solution.

It was not selected because Terraform provides broader multi-provider capabilities and is useful for demonstrating infrastructure engineering concepts that can transfer beyond AWS.

### Pulumi

Pulumi provides Infrastructure as Code using general-purpose programming languages.

It was not selected because Terraform's declarative model, ecosystem, module system, and widespread industry adoption align better with the project's learning and portfolio objectives.

### Manual Cloud Console

Manual provisioning may be useful for isolated experimentation and troubleshooting.

It was rejected as the primary infrastructure management approach because it does not provide sufficient repeatability, version control, automation, or auditability.

## Consequences

### Positive Consequences

Using Terraform will allow NEXUS to demonstrate:

- Infrastructure as Code
- reusable infrastructure modules
- cloud automation
- infrastructure testing
- infrastructure security
- environment management
- infrastructure change review
- drift detection
- automated provisioning

Terraform also provides a foundation for integrating infrastructure into the project's CI/CD and GitOps workflows.

### Negative Consequences

Terraform introduces additional concepts and operational responsibilities, including:

- state management
- provider management
- module design
- dependency handling
- state locking
- drift
- infrastructure lifecycle management

These complexities are accepted because they are representative of real-world infrastructure engineering.

## Cost Management

Infrastructure will be provisioned incrementally.

NEXUS will avoid creating expensive resources before they are required.

The project will use:

- resource tagging
- budgets and alerts
- environment-specific sizing
- automated cleanup where appropriate
- explicit infrastructure destruction procedures

## Decision Outcome

Terraform is accepted as the primary Infrastructure as Code technology for NEXUS.

Infrastructure will be progressively migrated from simple initial configurations toward reusable, tested, secure, and automated Terraform modules and environment configurations.