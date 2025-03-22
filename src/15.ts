import sympy as sp

x = sp.Symbol('x')
expr1 = x**2 + 3*x - 7
expr2 = x**4 - 5*x**2 + 6
solution = sp.solve([expr1, expr2], [x])
print(solution)
