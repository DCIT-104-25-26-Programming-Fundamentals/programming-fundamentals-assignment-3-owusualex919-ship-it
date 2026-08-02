// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');


function readMatrix(rows, cols) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        const line = readlineSync.question(`Enter row ${i + 1}: `);
        const values = line.split(' ').map(Number);
        matrix.push(values);
    }
    return matrix;
}

function printMatrix(matrix, label) {
    console.log();
    console.log(label);
    for (let i = 0; i < matrix.length; i++) {
        let rowText = "";
        for (let j = 0; j < matrix[i].length; j++) {
            rowText += matrix[i][j].toString().padStart(5);
        }
        console.log(rowText);
    }
}

function transposeMatrix(original, rows, cols) {
    const result = [];
    for (let j = 0; j < cols; j++) {
        const newRow = [];
        for (let i = 0; i < rows; i++) {
            newRow.push(original[i][j]);
        }
        result.push(newRow);
    }
    return result;
}

function addMatrices(a, b, rows, cols) {
    const result = [];
    for (let i = 0; i < rows; i++) {
        const newRow = [];
        for (let j = 0; j < cols; j++) {
            newRow.push(a[i][j] + b[i][j]);
        }
        result.push(newRow);
    }
    return result;
}

function multiplyMatrices(a, b, m, n, p) {
    const result = [];
    for (let i = 0; i < m; i++) {
        const newRow = [];
        for (let j = 0; j < p; j++) {
            let sum = 0;
            for (let k = 0; k < n; k++) {
                sum += a[i][k] * b[k][j];
            }
            newRow.push(sum);
        }
        result.push(newRow);
    }
    return result;
}

function main() {
    // ---------------- PART A: TRANSPOSE ----------------
    console.log("PART A - TRANSPOSE");
    const rowsA = readlineSync.questionInt("Enter number of rows: ");
    const colsA = readlineSync.questionInt("Enter number of columns: ");

    const matrixA = readMatrix(rowsA, colsA);
    printMatrix(matrixA, "Original Matrix:");

    const transposed = transposeMatrix(matrixA, rowsA, colsA);
    printMatrix(transposed, "Transposed Matrix:");

    // ---------------- PART B: ADDITION ----------------
    console.log();
    console.log("PART B - ADDITION");
    const rowsAdd = readlineSync.questionInt("Enter number of rows: ");
    const colsAdd = readlineSync.questionInt("Enter number of columns: ");

    console.log("Matrix 1:");
    const addA = readMatrix(rowsAdd, colsAdd);
    console.log("Matrix 2:");
    const addB = readMatrix(rowsAdd, colsAdd);

    printMatrix(addA, "Matrix A:");
    printMatrix(addB, "Matrix B:");

    const sumMatrix = addMatrices(addA, addB, rowsAdd, colsAdd);
    printMatrix(sumMatrix, "Sum Matrix (A + B):");

    // ---------------- PART C: MULTIPLICATION ----------------
    console.log();
    console.log("PART C - MULTIPLICATION");
    const m = readlineSync.questionInt("Enter rows of Matrix A: ");
    const n = readlineSync.questionInt("Enter columns of Matrix A (rows of Matrix B): ");
    const p = readlineSync.questionInt("Enter columns of Matrix B: ");

    console.log("Matrix A:");
    const mulA = readMatrix(m, n);
    console.log("Matrix B:");
    const mulB = readMatrix(n, p);

    printMatrix(mulA, "Matrix A:");
    printMatrix(mulB, "Matrix B:");

    const productMatrix = multiplyMatrices(mulA, mulB, m, n, p);
    printMatrix(productMatrix, "Product Matrix (A x B):");
}

main();