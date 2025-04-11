import sympy as sp

x = sp.symbols('x')
equation = 2*x + 3
solution = sp.solve(equation, x)
print(solution[0])
