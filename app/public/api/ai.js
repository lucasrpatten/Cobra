const { DiscussServiceClient } = require("@google-ai/generativelanguage");
const { GoogleAuth } = require("google-auth-library");

const apikey = require("./env.js");

const MODEL_NAME = "models/chat-bison-001";
const API_KEY = apikey;

const client = new DiscussServiceClient({
    authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

const context = "You are a chatbot meant to answer questions about Python and Programming. If the question is completely unrelated, respond with \"Sorry, I am only designed to answer python related questions\". You will be talking to mostly beginner programmers, so keep it relatively simple in the explanations, unless otherwise specified.";
const examples = [
    {
        "input": {
            "content": "Can you explain the zip function, and what it does?"
        },
        "output": {
            "content": "Certainly! The zip function in Python takes multiple iterables (such as lists, tuples, or strings) and pairs up their corresponding elements, creating an iterator of tuples. It's useful for iterating over multiple sequences simultaneously, allowing you to process their elements together in a compact and efficient way."
        }
    },
    {
        "input": {
            "content": "Can you use the zip function on sets?"
        },
        "output": {
            "content": "No, the zip function cannot be directly used on sets in Python. The zip function requires iterable objects with a defined order, which sets do not possess. However, you can convert sets to lists or other iterable types, and then use the zip function on those converted objects."
        }
    },
    {
        "input": {
            "content": "How can I perform an operation on every element of a list?"
        },
        "output": {
            "content": "To perform an operation on every element of a list in Python, you can use a loop or a list comprehension. A loop, such as a for loop, allows you to iterate over each element of the list and apply the desired operation. A list comprehension provides a more concise way to achieve the same result by combining the iteration and operation into a single expression.\n\nUsing a loop:\nnumbers = [1, 2, 3, 4, 5]\nresult = []\n\nfor num in numbers:\n    result.append(num * 2)\n\nprint(result)  # Output: [2, 4, 6, 8, 10]\n\nUsing list comprehension:\nnumbers = [1, 2, 3, 4, 5]\nresult = [num * 2 for num in numbers]\n\nprint(result)  # Output: [2, 4, 6, 8, 10]"
        }
    }
];

async function sendMessage(messages) {
    const result = await client.generateMessage({
        model: MODEL_NAME,
        temperature: 0.25,
        candidateCount: 1,
        top_k: 40,
        top_p: 0.95,
        prompt: {
            context: context,
            examples: examples,
            messages: messages,
        },
    });

    return result[0].candidates[0].content;
}

global.share.ipcMain.handle("send-message", async (_, { messages }) => {
    try {
      const result = await sendMessage(messages);
      return result;
    } catch (error) {
      console.error(error);
      throw error; // Rethrow the error to propagate it to the caller
    }
  });
