import React from "react";
import { useNavigate } from "react-router-dom";


const IntroLeftPanel = () => {
const navigate = useNavigate();
    return (
      <>
        <div className="absolute left-0 h-full overflow-x-hidden w-1/2 bg-gray-900 text-gray-300">
          <h1 className="text-xl underline"> Section 1: An Introduction to Programming </h1>
          <div className="text-lg">What is programming? Programming is the process of writing instructions for a computer to execute. These instructions can range from simple tasks, such as opening a program, to complex tasks, such as creating a full-fledged application. The instructions are written in a specific language that is designed for computers to understand. Think of programming like giving a friend directions on how to get somewhere. Without those directions, they would be lost! Similarly, without programming, computers are almost useless. By providing them with instructions (or code), we can make them do whatever we want - and this is the power of programming!
          </div>
          <br></br>
          <h1 className="text-xl underline"> Section 2: Different Programming Languages </h1>
          <div className="text-lg">There are many different types of programming languages available, each with its own advantages and uses. Some popular examples include Python, Java, C++, HTML/CSS and JavaScript. Each language has its own syntax (grammar) and rules which makes it unique. Additionally, some languages are compiled while others are interpreted – but more on that later! Python and Java are two of the most popular general-purpose languages used today. They have applications in web development, software engineering, machine learning and much more. Python is particularly well-known for its ease of use and readability; it’s often used by beginners because it’s easy to learn. Java is known for its versatility; it powers many mobile applications and websites today! HTML/CSS and JavaScript are two different web technologies often used together when creating websites or web applications. HTML stands for HyperText Markup Language – it helps structure the content of your website (texts, images etc). CSS stands for Cascading Style Sheets – it helps define how your website looks (colors, fonts etc). Lastly, JavaScript helps bring your website to life by allowing you to add interactivity through events such as clicks or keystrokes. C++ is another popular language mainly used for desktop applications or game development. It has an important feature called Object Oriented Programming which allows us to create classes and objects – this helps us organize our code into smaller manageable pieces which makes developing large projects much easier!
          </div>
          <br></br>
          <h1 className="text-xl underline"> Section 3: Compiled vs Interpreted Languages </h1>
          <div className="text-lg">As mentioned earlier, some languages are compiled while others are interpreted. To understand what this means exactly let's start by talking about machine code - also known as binary code - which computers actually understand. All modern day programming languages will eventually be translated into machine code so that the computer can execute them correctly; however there are two different ways in which this happens - either through compiling or interpreting the code. Compiling is a process where the source code (code written in a readable format such as Python or Java) is translated directly into machine code all at once before being executed by the computer - hence why these types of languages are referred to as compiled languages (C++ being one example). On the other hand interpreting involves translating the source code line by line while executing it at the same time; this type of language then becomes known as an interpreted language (Python being one example). In conclusion... Programming can seem intimidating at first but with enough practice anyone can become comfortable with coding! There are many different types of languages out there each having their own advantages and purposes; understanding if they're compiled or interpreted should help you decide which one best fits your needs!
            </div>
          <div className="absolute bottom-0 w-full">
              <button className=" fixed bottom-0 left-0 w-1/2 bg-red-700" onClick={() => navigate('/home')}>
                Exit
              </button>
              <button className=" fixed bottom-0 right-0 w-1/2 bg-yellow-500" onClick={() => window.location.reload()}>
                Reset
              </button>
          </div>
        </div>
      </>
    );
  };
  
  export default IntroLeftPanel;