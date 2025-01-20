# React useEffect Cleanup Function Issue

This repository demonstrates a common issue with the React `useEffect` hook's cleanup function not being called when the component unmounts.  The example shows a simple counter component where the cleanup function should log 'Unmounted!' to the console when the component is removed from the DOM.  However, under certain circumstances, this might not happen.

## Problem
The provided code uses a `useEffect` hook with an empty dependency array `[]`. This is expected to run only once when the component mounts and again when it unmounts to perform cleanup.  The cleanup function in this case should log 'Unmounted!' to the console, ensuring that any resources or timers created within the `useEffect` are properly released.

## Solution
The solution involves understanding when the cleanup function is not called and the possible reasons for it.  In the `bugSolution.js` file, we demonstrate a fix which would make the component's behavior more reliable.

## How to Reproduce
1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install the necessary dependencies.
4. Run `npm start` to start the development server.
5. Observe the console output for the 'Mounted!' and 'Unmounted!' messages. Note any inconsistencies.
