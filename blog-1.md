                        Blog Topics-1:


## 4 How do the four pillars of OOP—Inheritance, Polymorphism, Abstraction, and Encapsulation—help manage logic and reduce complexity in large-scale TypeScript projects?

# OOP in TypeScript: Managing Complexity with the Four Pillars

## Introduction

Object-Oriented Programming (OOP) is a programming paradigm that helps developers structure code in a way that is **modular, reusable, and maintainable**. In large-scale TypeScript projects, OOP plays a crucial role in managing complexity.

The four pillars of OOP—**Encapsulation, Inheritance, Polymorphism, and Abstraction**—help organize logic efficiently and reduce duplication while improving scalability.

---

## . Encapsulation — Data Protection and Control

Encapsulation is the concept of **hiding internal data and exposing only necessary functionality**. It ensures that object state is protected from unintended modification.

### Example:

```ts
class BankAccount {
    private balance: number = 0;

    deposit(amount: number) {
        this.balance += amount;
    }

    getBalance() {
        return this.balance;
    }
}                    
