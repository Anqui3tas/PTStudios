const triangleContainer = document.getElementById("triangle-container");
const triangle = document.createElement("div");
triangle.classList.add("triangle");
triangleContainer.appendChild(triangle);
triangle.style.animation = "spin 5s linear infinite";
