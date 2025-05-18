import math
from sympy import symbols, Eq, solve

x = symbols('x')

eq = Eq(5*x**2 + 8*x - 4, 0)

solution = solve(eq, x)
print(solution)
