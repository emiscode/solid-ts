# SOLID Principles with TypeScript

“The SOLID principles tell us how to arrange our functions and data structures into classes, and how those classes should be interconnected. The use of the word “class” does not imply that these principles are applicable only to object-oriented software. A class is simply a coupled grouping of functions and data. Every software system has such groupings, whether they are called classes or not. The SOLID principles apply to those groupings.”

- Single Responsibility
    - Each software module has one, and only one, reason to change
- Open Closed
    - Allow changes by adding new code rather than changing existing code
    - A software should be open for extension but closed for modification
- Liskov Substitution
    - Use contracts that allow classes to be substituted one for another
    - Composite is a good approach when inheritance is not possible
- Interface Segregation
    - Avoid depending on things that you don`t use
    - A class should not be forced to depend on methods it won`t use
- Dependency Inversion
    - High-level policy should not depend on low-level details
    - Details should depende on policies

## Object Oriented Principles

- Coesion
    - Refers to the degree to which the elements inside a module belong together
    - Represents the clarity of the responsibilities of a module
    - Represents how the attributes and methods work in harmony in a
    - Do one thing but do it very well
- Encapsulation
    - Making the state of an object private
    - Getter and Setters do not guarantee encapsulation
    - The class decides the degree to which state can be accessed and changed
    - Classes with no encapsulation increase the coupling
- Coupling
    - Classes depending directly on other classes
    - Hard coupling is a bad idea
    - There is no need for a class to know much details of other classes
    - Soft coupling is a good idea, so do prefer using Interfaces
- Abstraction
    - Prefer contract and interfaces over conrections
    - Separate the WHAT from the HOW
    - Focus on declarative separately from the imperative
    - Focus on high-level ideas separately from the low-level details
- Inheritance
    - Prefer to inherit from contracts and interfaces over concrestions
    - It`s about reusability not hierarchy
- Polymorphism
    - It`s about taking on many shapes
    - Always allow the same high-level behavior
    - Always allow for dynamic low-level behavior at runtime
