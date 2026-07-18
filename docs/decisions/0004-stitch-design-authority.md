# 0004: Stitch design authority

Status: Accepted

## Decision

Google Stitch is the approved visual-design source. Root `DESIGN.md` is maintained from the Stitch export. Stitch screenshots are visual authority; Stitch design tokens are token authority; raw exported HTML is migration reference. Implementation may improve semantics, accessibility, performance, and code quality without replacing the design. Material design changes require explicit user approval.

## Consequences

Agents may not introduce an unrelated design system. Existing deviations must be documented. New components follow the Stitch visual language. Missing states are derived conservatively from existing components.
