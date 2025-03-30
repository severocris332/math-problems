import sympy
from sympy import symbols

x = symbols('x')
expr = x**3 - 6*x**2 + 11*x - 6
simplify_expr = sympy.simplify(expr)
print(simplify_expr)
