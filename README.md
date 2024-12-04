# Unhandled Errors in Node.js HTTP Server

This repository demonstrates a common error in Node.js applications: inadequate error handling in HTTP servers.

The `bug.js` file showcases a server lacking comprehensive error handling.  This can lead to unexpected crashes or incomplete responses to clients.

The `bugSolution.js` file provides a solution by implementing robust error handling to prevent these issues.

## How to Reproduce the Bug

1. Clone this repository.
2. Run `node bug.js`.
3. Observe the lack of graceful error handling (try to stop the server abruptly or trigger various error conditions).

## Solution

The improved code includes error handling mechanisms to manage various scenarios, resulting in a more stable and resilient server.