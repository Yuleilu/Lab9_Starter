let form = document.querySelector('form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      let output = document.querySelector('output');
      let firstNum = document.querySelector('#first-num').value;
      let secondNum = document.querySelector('#second-num').value;
      let operator = document.querySelector('#operator').value;
      output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
    });

    let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

    // Start your code here
    // You may move this JS to another file if you wish

    document.addEventListener('DOMContentLoaded', function() {
        // 在这里编写您的代码
      
      document.getElementById('log-btn').addEventListener('click', function() {
        console.log('This is a console log message.');
      });
      
      document.getElementById('error-btn').addEventListener('click', function() {
        console.error('This is a console error message.');
      });
      
      document.getElementById('count-btn').addEventListener('click', function() {
        console.count('Console Count');
      });
      
      document.getElementById('warn-btn').addEventListener('click', function() {
        console.warn('This is a console warning.');
      });
      
      document.getElementById('assert-btn').addEventListener('click', function() {
        console.assert(false, 'Assertion failed!');
      });
      
      document.getElementById('clear-btn').addEventListener('click', function() {
        console.clear();
      });
      
      document.getElementById('dir-btn').addEventListener('click', function() {
        console.dir(document.body);
      });
      
      document.getElementById('dirxml-btn').addEventListener('click', function() {
        console.dirxml(document.body);
      });
      
      document.getElementById('group-start-btn').addEventListener('click', function() {
        console.group('Group 1');
        console.log('Inside Group 1');
      });
      
      document.getElementById('group-end-btn').addEventListener('click', function() {
        console.groupEnd();
      });
      
      document.getElementById('table-btn').addEventListener('click', function() {
        console.table([{ name: 'John', age: 30 }, { name: 'Jane', age: 28 }]);
      });
      
      document.getElementById('start-timer-btn').addEventListener('click', function() {
        console.time('Timer');
      });
      
      document.getElementById('end-timer-btn').addEventListener('click', function() {
        console.timeEnd('Timer');
      });
      
      document.getElementById('trace-btn').addEventListener('click', function() {
        console.trace();
      });
      
      document.getElementById('error-trigger-btn').addEventListener('click', function() {
        nonExistentFunction();
      });
      

      document.getElementById('error-trigger-btn').addEventListener('click', function() {
        try {
          const nonExistentVariable = someUndefinedVariable;
        } catch (error) {
          let output = document.getElementById('output');
          output.innerHTML = 'An error occurred: ' + error.message;
        } finally {
          console.log('Error handling complete.');
        }
      });
      
      document.getElementById('unexpected-error-trigger-btn').addEventListener('click', function() {
        try {
          throw new Error('Unexpected error occurred.');
        } catch (error) {
          let output = document.getElementById('output');
          output.innerHTML = 'An error occurred: ' + error.message;
        } finally {
          console.log('Error handling complete.');
        }
      });
      
    });

    class Error {
        constructor(message) {
          this.message = message;
          this.name = "Error"; // (different names for different built-in error classes)
      }
    }  
    class ValidationError extends Error {
        constructor(message) {
          super(message); // (1)
          this.name = "ValidationError"; // (2)
        }
      }
      
      function test() {
        throw new ValidationError("Whoops!");
      }
      
      try {
        test();
      } catch(err) {
        alert(err.message); // Whoops!
        alert(err.name); // ValidationError
        alert(err.stack); // a list of nested calls with line numbers for each
      }

      window.onerror = function(message, source, lineno, colno, error) {
        console.error('An error occurred:', error);
      };

      function triggerError() {
        undefinedFunction();
      }
      
      triggerError();