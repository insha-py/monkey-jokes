// Array of jungle-themed jokes with a monkey twist
const jokes = [
    "Why don't monkeys use smartphones? They can't stop monkeying around!",
    "What do you call a monkey with a banana in each ear? Absolutely anything—it can't hear you!",
    "Why did the monkey become a musician? It had the ape-titude for it!",
    "What’s a monkey’s favorite dance? The banana shake!",
    "Why did the monkey take its banana to the doctors? It wasn’t peeling good.",
    "Why do monkeys love the jungle? It's a-peeling!",
    "Why wasn’t the cactus invited to hang out with the mushrooms? He wasn’t a fungi.",
    "Why can't a nose be 12 inches long? Because then it would be a foot.",
    "How much do rainbows weigh? Not much. They’re actually pretty light.",
    "Why do squid swim in salt water? Because pepper makes them sneeze",
    "How do you raise a baby elephant? With a crane",
    "Why did the hen break up with the chicken? Cause he had a side chick",
    "What do you call an emo cow? Mooooooo-dy cow",
    "What's the difference between spring rolls and summer rolls? Their seasoning."
];

// Set a fixed greeting
const greetingMessage = "Hi prithvij, ready for some monkey business?";
document.getElementById("greeting").innerText = greetingMessage;

// Display a random joke and animate the friend's face
function generateJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    document.getElementById("joke").innerText = jokes[randomIndex];

    // Add spinning animation to the friend's face
    const friendFace = document.getElementById("friend-face");
    friendFace.classList.add("spin");
    setTimeout(() => {
        friendFace.classList.remove("spin");
    }, 1000);
}

// Generate the first joke on page load
generateJoke();

