import numpy as np
from scipy.optimize import fsolve

def quadratic_function(x):
    return x**2 - 3*x + 4

initial_guess = [1, 2]
roots = fsolve(quadratic_function, initial_guess)
print(roots)
