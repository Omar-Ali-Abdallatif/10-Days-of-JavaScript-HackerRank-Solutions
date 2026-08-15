# 10 Days of JavaScript — HackerRank Solutions

![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HackerRank](https://img.shields.io/badge/HackerRank-10%20Days%20of%20JavaScript-00EA64?style=for-the-badge&logo=hackerrank&logoColor=white)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

A complete collection of my solutions for the **HackerRank — 10 Days of JavaScript** challenge. This repository covers JavaScript fundamentals, ES6 features, regular expressions, error handling, object-oriented programming, and DOM manipulation through practical coding exercises.

> The goal of this repository is to document my learning journey, improve my problem-solving skills, and provide clear, organized solutions for every challenge.

---

## Table of Contents

- [About the Challenge](#about-the-challenge)
- [Topics Covered](#topics-covered)
- [Repository Structure](#repository-structure)
- [Challenge Solutions](#challenge-solutions)
- [DOM Projects](#dom-projects)
- [Getting Started](#getting-started)
- [Running the Solutions](#running-the-solutions)
- [Key Skills Practiced](#key-skills-practiced)
- [Notes](#notes)
- [Author](#author)
- [License](#license)

---

## About the Challenge

**10 Days of JavaScript** is a HackerRank tutorial series designed to introduce and reinforce essential JavaScript concepts through short daily challenges.

The exercises in this repository include:

- Variables and data types
- Arithmetic operators
- Functions and recursion
- Conditional statements
- Loops and arrays
- Objects and classes
- Inheritance
- Higher-order and arrow functions
- Template literals
- Bitwise operators
- Regular expressions
- Error handling
- Dates
- DOM events and interactive web components

---

## Topics Covered

| Category | Concepts |
|---|---|
| JavaScript Basics | `let`, `const`, data types, operators, input/output |
| Control Flow | `if...else`, `switch`, loops |
| Functions | Function declarations, recursion, arrow functions |
| Data Structures | Arrays, objects, `Set` |
| Object-Oriented Programming | Classes, constructors, prototypes, inheritance |
| Modern JavaScript | Rest parameters, spread syntax, template literals |
| Problem Solving | Sorting, filtering, comparisons, bitwise operations |
| Validation | Regular expressions |
| Error Handling | `try...catch`, `throw`, custom errors |
| Browser Development | HTML, CSS, DOM selection, event listeners |

---

## Repository Structure

```text
10-Days-of-JavaScript/
├── Binary Calculator/
│   ├── css/
│   │   └── binaryCalculator.css
│   ├── js/
│   │   └── binaryCalculator.js
│   └── index.html
│
├── Button/
│   ├── css/
│   │   └── button.css
│   ├── js/
│   │   └── button.js
│   └── index.html
│
├── Buttons Container/
│   ├── css/
│   │   └── buttonsGrid.css
│   ├── js/
│   │   └── buttonsGrid.js
│   └── index.html
│
├── Problems/
│   ├── ArithmeticOperators.js
│   ├── Arrays.js
│   ├── ArrowFunctions.js
│   ├── Bitwise.js
│   ├── Classes.js
│   ├── ConditionalStatements.js
│   ├── CountObjects.js
│   ├── DataTypes.js
│   ├── date.js
│   ├── Functions.js
│   ├── Inheritance.js
│   ├── LetandConst.js
│   ├── Loops.js
│   ├── RectangleObject.js
│   ├── RegExp.js
│   ├── RegExp2.js
│   ├── Switch.js
│   ├── TemplateLiterals.js
│   ├── Throw.js
│   └── TryAndCatch.js
│
├── LICENSE
└── README.md
```

> Folder and file names above follow the structure shown in the project. If an `index.html` file has a different name locally, update the structure accordingly.

---

## Challenge Solutions

### Day 0 — Hello, World! and Data Types

- Reading and processing input
- Converting strings into numbers
- Performing integer and decimal addition
- Concatenating strings

**File:** `Problems/DataTypes.js`

### Day 1 — Arithmetic Operators, Functions, and Let/Const

- Calculating the area and perimeter of a rectangle
- Calculating a factorial using recursion
- Using `const` with `Math.PI`
- Calculating the area and perimeter of a circle

**Files:**

- `Problems/ArithmeticOperators.js`
- `Problems/Functions.js`
- `Problems/LetandConst.js`

### Day 2 — Conditional Statements, Switch, and Loops

- Returning a grade based on a score
- Grouping letters using a `switch` statement
- Printing vowels first, followed by consonants

**Files:**

- `Problems/ConditionalStatements.js`
- `Problems/Switch.js`
- `Problems/Loops.js`

### Day 3 — Arrays, Try/Catch, and Throw

- Finding the second-largest distinct number in an array
- Reversing a string safely with `try...catch`
- Throwing errors for zero and negative values

**Files:**

- `Problems/Arrays.js`
- `Problems/TryAndCatch.js`
- `Problems/Throw.js`

### Day 4 — Classes, Count Objects, and Rectangle Object

- Creating a `Polygon` class
- Calculating a polygon's perimeter
- Counting objects whose `x` and `y` properties are equal
- Returning a rectangle object with area and perimeter properties

**Files:**

- `Problems/Classes.js`
- `Problems/CountObjects.js`
- `Problems/RectangleObject.js`

### Day 5 — Inheritance, Template Literals, and Arrow Functions

- Extending a `Rectangle` class with a `Square` class
- Calculating rectangle sides using tagged template literals
- Modifying array values using an arrow function

**Files:**

- `Problems/Inheritance.js`
- `Problems/TemplateLiterals.js`
- `Problems/ArrowFunctions.js`

### Day 6 — Bitwise Operators and JavaScript Dates

- Finding the maximum value of `a & b` that is less than `k`
- Converting a date string into its weekday name

**Files:**

- `Problems/Bitwise.js`
- `Problems/date.js`

### Day 7 — Regular Expressions

- Matching strings that start and end with the same vowel
- Validating names that begin with an accepted title

**Files:**

- `Problems/RegExp.js`
- `Problems/RegExp2.js`

---

## DOM Projects

### Button Counter

A simple interactive button that increments its displayed value after every click.

**Technologies:** HTML, CSS, JavaScript, DOM Events

**Directory:** `Button/`

### Buttons Grid

A `3 × 3` button grid. Clicking the center button rotates the outer button values clockwise while keeping the center value fixed.

**Technologies:** HTML, CSS, JavaScript, Arrays, DOM Manipulation

**Directory:** `Buttons Container/`

### Binary Calculator

An interactive calculator that performs arithmetic operations on binary numbers.

**Supported operations:**

- Addition (`+`)
- Subtraction (`-`)
- Multiplication (`*`)
- Integer division (`/`)
- Clear (`C`)

The calculator converts binary operands to decimal, performs the selected operation, and displays the result in binary format.

**Technologies:** HTML, CSS, JavaScript, DOM Events, Number Conversion

**Directory:** `Binary Calculator/`

---

## Getting Started

### Prerequisites

To run the JavaScript problem solutions, install:

- [Node.js](https://nodejs.org/) — version 14 or later is recommended
- A code editor such as [Visual Studio Code](https://code.visualstudio.com/)
- A modern browser for the DOM projects

### Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/10-Days-of-JavaScript.git
cd 10-Days-of-JavaScript
```

Replace `YOUR-USERNAME` with your GitHub username.

---

## Running the Solutions

### Run a Problem with Node.js

```bash
node Problems/Arrays.js
```

You can replace `Arrays.js` with the name of any solution file.

### Run a DOM Project

1. Open the required project directory.
2. Open its HTML file directly in a browser.
3. For a better development experience, use the **Live Server** extension in Visual Studio Code.

Example:

```text
Binary Calculator/index.html
```

---

## Key Skills Practiced

By completing these challenges, I practiced:

- Translating problem statements into working algorithms
- Writing reusable JavaScript functions
- Applying ES6+ syntax and features
- Working with arrays, objects, sets, and classes
- Using inheritance and prototypes
- Validating text using regular expressions
- Handling runtime errors safely
- Manipulating HTML elements through the DOM
- Responding to browser events with event listeners
- Organizing source code into a clear project structure

---

## Notes

- Each file represents a separate HackerRank challenge or concept.
- Some files may include local test cases using `console.log()`.
- HackerRank may provide its own input/output boilerplate; submit only the required function when the platform requests it.
- The solutions are intended for learning and reference. Try solving each challenge independently before reviewing the implementation.

---

## Author

**Omar Ali Abdullatif*

Computer Science student interested in software testing, problem solving, and web development.

- GitHub: [Follow Me](https://github.com/Omar-Ali-Abdallatif)
- LinkedIn: [Follow Me](https://www.linkedin.com/in/omar-ali-abdallaltif/)

---

## License

This project is available under the [MIT License](LICENSE).

---

<div align="center">
  <strong>If this repository helped you, consider giving it a star!</strong>
  <br><br>
  Made with JavaScript and continuous learning.
</div>
