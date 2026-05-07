                    Blog topic -2
## 1.Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing.
= TypeScript is designed to provide type safety and prevent runtime errors by checking types during development. However, the any type breaks this safety system, while unknown helps maintain strict type checking.

## Why any is a “Type Safety Hole”

The any type disables TypeScript’s type checking. Once a variable is marked as any, you can:

1.Assign any value to it
2.Call any method on it
3.Access any property without error
## Why unknown is the Safer Choice

The unknown type is similar to any, but with one important difference:
## What is Type Narrowing?

Type narrowing is the process of refining a variable from a broader type (like unknown) into a more specific type (like string or number) using checks.

