# Guidelines on how to never ever write BUGS (in ECMAScript)

## Utils and tooling

0. format code (following a coding style)
1. use a linter (like `eslint`)
2. write tests (do not forget edge cases)
3. use `debugger` keyword rather than `console.log` to debug your code,
   checkout `node inspect` tooling and REPL
4. use TypeScript if you have the choice :)
5. use a VCS (like Git), you need to be able to maipulate your code history

## Good practices

1. don't use global variables, and declare as `const` if you can
2. do not fail silently (by returning `undefined`, `null` or `NaN`),
   always prefer explicit errors
3. do not build things on top of an hack, follow the specifications
4. if you solve a bug, you write a test (to prevent regressions)
5. ensure you distribute your program in a way that make it stills work on
   another computer (with a different environment)
6. setup process of code review by peers, this is really important :)
