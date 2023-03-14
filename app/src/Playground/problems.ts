const problems = {
  print_argument: {
    instructions: "Print the argument that is passed to the function.",
    starting_code: "def print_argument(arg1):\n\t",
    category: "functions",
    difficulty: 6,
    example_solution: "def print_argument(arg1):\n    print(arg1)",
    test_function: "print_argument(arg1)",
    test_cases: [
      ["This message should be printed.", "This message should be printed."],
      ["Cobra", "Cobra"]
    ]
  }
}

export default problems;