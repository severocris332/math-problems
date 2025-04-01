import numpy as np
from scipy.integrate import odeint

def f(t, y):
    """ Define a differential equation. """
    return 2*y - np.cos(4*t)

t_span = (0, 10)
y0 = np.ones(1)  # Initial condition: y0

# Solve the ODE using numerical integration
solution = odeint(f, t_span, y0)

# Display the solution
print(solution)
