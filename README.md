# JavaScript Code Compiler API

This project is a simple JavaScript code compiler that accepts JavaScript code snippets via a REST API, executes them in a sandboxed environment, and returns the result or any errors encountered during execution. The project is built with Node.js and uses the `vm2` module for securely running JavaScript code. Swagger is also integrated to provide easy API documentation and testing.

## Features
- **Execute JavaScript code**: Accepts code as input and executes it in a sandboxed environment.
- **Secure Execution**: Utilizes `vm2` to prevent access to system resources and restrict global scope access.
- **Timeout Support**: Limits code execution time to avoid infinite loops or long-running scripts.
- **Swagger Documentation**: Easily test and interact with the API using Swagger UI.

## Requirements
- Node.js (version 14.x or later)
- npm

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/js-code-compiler.git
   cd js-code-compiler


## Running the Application
1. Install the dependencies:
    ```bash
    npm install
2. Run the below cmd:
    ```bash
    node app.js
    

## API Endpoints
1. POST /execute
    Example Request Body: 
    
    request = {
        "code": "const a = 5; const b = 10; a + b;"
    } 

    Responce = {"result": 15}
    Error    = {"error": "Error message"}

## Swagger Documentation
1.  Navigate to
    ```bash
    http://localhost:3000/api-docs
2.  Locate the /execute endpoint.
3.  Click the Try it out button.
3.  Enter the following code in the JSON body:
    ```bash
    {
        "code": "const a = 5; const b = 10; a + b;"
    }
4.  Click Execute.
5.  The response should appear as:
    ```bash
    {
        "result": 15
    }
