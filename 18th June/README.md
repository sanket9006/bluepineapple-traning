### normalexpression.html

![image info](https://github.com/sanket9006/bluepineapple-traning/blob/main/others/1.PNG)

### alphabet_or_not.html

![image info](https://github.com/sanket9006/bluepineapple-traning/blob/main/others/2.PNG)
<img  src="https://github.com/sanket9006/bluepineapple-traning/blob/main/others/2.PNG)">

### Perfact_number.html

</hr>

![image info](https://github.com/sanket9006/bluepineapple-traning/blob/main/others/3.png)

## Functional programming concepts

- Immutable Data

  Avoid using list, var (dont update or change data)
  Data and Objects should not be modified after they are created

- Closure

  In clousure functions are bundled together.
  Clousure gives you access to functions outer scope (Lexical Scope)

- Referential Transparency

  The value of function depends on parameters passeed to it - Not on the global state

- Modularity

  Refers to creating function/program into small independent modules which are in-dependent. i.e. Just like components into ReactJS

- First-Class Functions

  A function is said to be first class function if it can be treated as any other variable in program. i.e. It should be such that , that function can be passed as an argument to another function + Can be assigned as value to any viriale.

- Maintainbility

## What functional programming isn't

- Loops
  - **while**
  - **do...while**
  - **for**
  - **for...of**
  - **for...in**
- Variable declarations with **var** or **let**
- Void functions
- Object mutation (for example: **o.x = 5;**)
- Array mutator methods
  - **copyWithin**
  - **fill**
  - **pop**
  - **push**
  - **reverse**
  - **shift**
  - **sort**
  - **splice**
  - **unshift**
- Map mutator methods
  - **clear**
  - **delete**
  - **set**
- Set mutator methods
  - **add**
  - **clear**
  - **delete**

Notes :-

- Code should be small (Fit on screen - Non scrollable)
- Use reduce() instead of for loop for additive calculations
- Make sure that function is pure
  - Does not access anything else other than provided arguments
  - Does not modify anything outside the loop

 <hr />

### Use `map()` insteed of `for/foreach`

```
const nums = [1,2,3,4,5,6];
const doubles = [];

for(let i = 0; i < nums.length; i++){
  doubles.push(nums[i] * 2);
}
```

```
const nums = [1, 2, 3, 4, 5, 6];
const doubles = nums.map((item) => item * 2);
```

 <hr />

### Use `reduce()` to reduce aray into single value + executes given function for each elemet

```
// Syntax

array.reduce(function(arg1 ,arg2), initial value)

numbers = [1,2,3,4,5,6]
const sum = numbers.reduce((sum, current) => sum + current ,0)
```
