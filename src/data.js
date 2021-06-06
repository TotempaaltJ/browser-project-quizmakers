'use strict';
/* Program Data
  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!
  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/
export const quizData = {
  currentQuestionIndex: 0,
  // the questions in the quiz
  questions: [
    {
      text: 'What are the different ways to declare a JS variable?',
      answers: {
        a: 'constant - let - variable',
        b: 'var - const - let - function',
        c: 'var - let - const',
        d: 'var - let - const',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/variables',
        },
        {
          text: 'Tyler McGinnis',
          href: 'https://ui.dev/var-let-const/',
        },
      ],
    },
    {
      text: 'What does `typeof` do?',
      answers: {
        a: 'changes the type of a primitive value',
        b: 'returns a string describing the type of a value',
        c: 'determines if a value is primitive',
        d: 'can tell the difference between arrays and objects',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        },
      ],
    },
    // Add more questions here
    {
      text: 'Which company developed JavaScript?',
      answers: {
        a: 'Netscape',
        b: 'Microsoft',
        c: 'IBM',
        d: 'Apple',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'guru99',
          href:
            'https://www.guru99.com/javascript-interview-questions-answers.html',
        },
      ],
    },
    // Add more questions here
    {
      text: 'What is this keyword in JavaScript?',
      answers: {
        a: 'This keyword refers to the object from where it was called',
        b: 'This keyword refers to the array from where it was called',
        c:
          'This keyword  does not refers to the object from where it was called',
        d: 'It is not one of the previews answers',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'guru99',
          href:
            'https://www.guru99.com/javascript-interview-questions-answers.html',
        },
      ],
    },
    // Add more questions here
    {
      text: 'What are all the looping structures in JavaScript?',
      answers: {
        a: 'if - switch',
        b: 'For - While - Do while',
        c: 'parseInt - parseFloat',
        d: 'It is not one of the previews answers',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'guru99',
          href:
            'https://www.guru99.com/javascript-interview-questions-answers.html',
        },
      ],
    },
    // Add more questions here
    {
      text: 'What is === operator in Javascript ?',
      answers: {
        a: 'Compare values',
        b: 'Compare function',
        c: 'Compare value and types',
        d: 'Compare types',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators',
        },
      ],
    },
    // Add more questions here
    {
      text: 'What are all the types of Pop up boxes available in JS?',
      answers: {
        a: 'blur - btoa',
        b: 'focus - fetch',
        c: 'onload - ondrop',
        d: 'Alert - Prompt',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'guru99',
          href:
            'https://www.guru99.com/javascript-interview-questions-answers.html',
        },
      ],
    },
    // Add more questions here
    {
      text: 'Which keywords are used to handle exceptions ?',
      answers: {
        a: 'For - switch',
        b: 'If - fetch',
        c: 'Try - Catch',
        d: 'while - do while',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'guru99',
          href:
            'https://www.guru99.com/javascript-interview-questions-answers.html',
        },
      ],
    },
    // Add more questions here
    {
      text: 'What are the data types supported by JavaScript ?',
      answers: {
        a: 'String - Number - Array - Object',
        b: 'If - fetch - Try - Catch',
        c: 'while - do while - switch - for',
        d: 'It is not one of the previews answers',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'edureka',
          href:
            'https://www.edureka.co/blog/interview-questions/javascript-interview-questions/',
        },
      ],
    },
    // Add more questions here
    {
      text: 'What is the ‘Strict’ mode in JavaScript?',
      answers: {
        a: 'Strict Mode will reload the page automatically',
        b: 'Strict Mode is a way to compile your code',
        c: 'Strict Mode adds certain compulsions to JavaScript',
        d: 'It is not one of the previews answers',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'edureka',
          href:
            'https://www.edureka.co/blog/interview-questions/javascript-interview-questions/',
        },
      ],
    },
  ],
};