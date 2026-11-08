const text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ipsam voluptatibus, recusandae asperiores eveniet repellat excepturi, incidunt illum error eligendi nobis ad quisquam ratione reprehenderit.`;

const words = text.split(" ");
const element = document.getElementById("typing-text");

let wordIndex = 0;

function typeWriter() {
    const group = words.slice(wordIndex, wordIndex + 7).join(" ");
    let charIndex = 0;

    element.textContent = "";

    function type() {
        if (charIndex < group.length) {
            element.textContent += group[charIndex];
            charIndex++;
            setTimeout(type, 60);
        } else {
            // Wait, then disappear instantly
            setTimeout(() => {
                element.textContent = "";

                wordIndex += 7;

                if (wordIndex >= words.length) {
                    wordIndex = 0;
                }

                setTimeout(typeWriter, 300);
            }, 1200);
        }
    }

    type();
}

typeWriter();