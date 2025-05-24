import numpy as np

def calculate_expression(expression):
    result = eval(expression)
    return result

expression = "3 + 5 * (2 - 1)"
print(calculate_expression(expression))
