
        function calculate() {
            const numberA = parseFloat(document.getElementById("number_a").value);
            const numberB = parseFloat(document.getElementById("number_b").value);
            const operation = document.getElementById("ops").value;
            let result;

            switch (operation) {
                case "add":
                    result = numberA + numberB;
                    break;
                case "subtract":
                    result = numberA - numberB;
                    break;
                case "divide":
                    result = numberA / numberB;
                    break;
                case "multiply":
                    result = numberA * numberB;
                    break;
                default:
                    result = "Invalid operation";
            }

            document.getElementById("answer").textContent = result;
        }
  

/*This code will create a functional calculator form with the JavaScript code embedded within the HTML file. Simply copy and paste this code into an HTML file, and then open it in a web browser to use the calculator.*/