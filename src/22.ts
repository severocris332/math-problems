import sympy

def solve_problem():
    # Example: Solve a simple equation like x + 5 = 10
    equation = sympy.Symbol('x')
    result = sympy.solve(equation, 'x')
    return f"Solution for the equation {equation}: {result}"

solution = solve_problem()
print(solution)
