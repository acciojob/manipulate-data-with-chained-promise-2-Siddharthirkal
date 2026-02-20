  const outputDiv = document.getElementById("output");

        // Initial Promise (3-second delay)
        function getArray() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve([1, 2, 3, 4]);
                }, 3000);
            });
        }

        // Start Promise Chain
        getArray()
            .then((arr) => {
                // First Transformation: Filter even numbers
                return new Promise((resolve) => {
                    const evenNumbers = arr.filter(num => num % 2 === 0);

                    setTimeout(() => {
                        outputDiv.textContent = evenNumbers.toString();
                        resolve(evenNumbers);
                    }, 1000); // 1 second delay
                });
            })
            .then((evenNumbers) => {
                // Second Transformation: Multiply by 2
                return new Promise((resolve) => {
                    const multiplied = evenNumbers.map(num => num * 2);

                    setTimeout(() => {
                        outputDiv.textContent = multiplied.toString();
                        resolve(multiplied);
                    }, 2000); // 2 second delay
                });
            })
            .catch((error) => {
                console.log(error);
            });