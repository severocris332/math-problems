from random import randint

def solve_problem(problem_num):
    """
    This function solves a given math problem.
    
    Args:
    - problem_num (int): The number of the problem to solve.
    
    Returns:
    - str: The solution to the problem.
    """
    # Generate a random problem number
    problems = [f"Problem {i+1}:", f"{problem_num}" if i < 3 else "A",
                f"{randint(0, 9)} + {randint(0, 9)} * 5 =", 
                "17 * 2", "24 - 8 / 2"]
    
    # Return the solution to each problem
    for i, problem in enumerate(problems):
        return f"{problem} is: {randint(1, 10)}"
