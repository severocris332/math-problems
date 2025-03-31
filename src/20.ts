# Math problems and solutions

# Problem 1: Pythagorean theorem
a = 3.0
b = 4.0
c = (a**2 + b**2)**0.5

# Solution 1:
print(f"The solution to the problem of finding the length of the hypotenuse of a right triangle with sides {a} and {b} is: c = {c:.2f}")

# Problem 2: Area of a circle
radius = 5.0
area_circle = 3.14 * radius**2

# Solution 2:
print(f"The area of the circle with radius {radius} is: {area_circle:.2f}")

# Problem 3: Finding the roots of a quadratic equation
a = 1.0
b = 5.0
c = -6.0

# Solution 3:
import math
root1 = (-b + math.sqrt(b**2 - 4*a*c)) / (2*a)
root2 = (-b - math.sqrt(b**2 - 4*a*c)) / (2*a)

print(f"The roots of the quadratic equation {a}x^2 + {b}x + {c} are {root1:.6f}, {root2:.6f}")
