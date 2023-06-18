interface Problem {
    id: string;
    title: string;
    description: string;
    difficulty: number;
    starting_code: string;
    potential_solution: string;
    test_function: string;
    tests: Array<TestCase>;
}

interface TestCase {
    input: any;
    output: any;
}

declare module "./problems.json" {
    const value: Problem[];
    export default value;
}