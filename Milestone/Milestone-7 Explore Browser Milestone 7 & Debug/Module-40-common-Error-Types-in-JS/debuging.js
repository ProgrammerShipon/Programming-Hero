/**
 *    What is debugging?
 *  Debugging is the process of finding and fixing errors or bugs in the source code
 *
 *  Computer programmers study the code to determine 'Why any errors occurred'
 *
 *  checks the code step by step and analyze and fix the issue
 *
 */

/**
 *    How does the debugging process work ?
 *
 *  Error Identification
 * Developers locate the exact line of codes or code module causing the bug.
 *
 *  Error analysis
 * coders analyze the error by recording all program state changes and data values
 *
 *  Fix and Validation
 * Developers fix the bug and run tests to ensure the software continues to work as expected
 *
 */

/**
 *    Some debugging techniques
 *  Using console.log() method
 *   The console.log() method displays the result in the console of the browser. If there is any mistake in the code , it generates the error the error message
 *
 * const x = 10;
 * const y = 15;
 * const z = x + y;
 * console.log(z);
 * console.log(a); // a is not intialized
 */

/**
 *    Some debugging techniques
 * Using the debugger keyword
 *  You ca also use the javascript debugger keyword. this places a halt in execution where you place the debugging keyword . Here is an example.
 *
 * function doSomething() {
      console.log("Halt!");
      debugger;
      console.log("continue");
   }
   doSomething();
 */

/**
 *    Some debugging techniques
 *
 * Backtracking
 *  - Backtracking uses different solutions until you find the right solution to the error.
 *  - It is effective for debugging.
 *  - You apply possible solutions to solve the problem in the Javascript program.
 *  - If it doesn't work you retreat and select and select another move .
 */

/**
 *    Syntax Error
 * Syntax error is triggered when you write code that is not syntactically correct.
 *  - Missing inverted commas
 *  - Missing closing parentheses
 *  - improper alignment of curly braces or other characters
 */

/**
 *  Type Error
 * Type error is created when some value doesn't turn out to be of a particular expected type.
 *  - Calling objects that are not methods.
 *  - Attempting to access properties of null or undefined objects
 *  - Treating a string as a number or vice versa
 */

/**
 *    Reference Error
 *  - forgotten  to define a value for the variable before using it.
 *  - we might be trying to use an inaccessible variable in our code
 *  - Trying to access block-scoped variables outside of their scopes.
 */

/**
 *    Internal Error
 * The internal Error occurs when an exception occurs in the javascript runtime engine. it may or may not indicate and issue  with your code .
 *  InternalError occurs in two scenarios only:
 *  - When a patch or an update to the javascript runtime carries a bug that throws exceptions
 *  - When your code contains entities that are too large for the javascript engine (e.g. too many switch cases, to large array initializers to much recursion )
 */

/**
 *    Range Error
 *  RangeError -- thrown when a value is not in an allowed range
 */
