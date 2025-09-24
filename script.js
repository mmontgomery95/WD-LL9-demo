// ----------------------------
// 🎵 Setlist Generator
// ----------------------------

const songs = [
    "No Body European Tour Intro",
    "A Marrow Escape",
    "The Final Pulse",
    "Shadow Over the Stage",
    "Encore: Lights Out"
  ];
  
  function generateSetlist() {
// Create generateSetList() function here
    console.log("Button clicked");
    // Clear the setlist before adding new items
    const setlistElement = document.getElementById('setlist');
    setlistElement.innerHTML = '';
    // Add each song to the setlist
    for (let song of songs) {
      const li = document.createElement('li');
      li.innerText = song;
      setlistElement.appendChild(li);
    }
  }
  
  document.getElementById("generateSetlist").addEventListener("click", generateSetlist);
  
  // ----------------------------
  // ⏳ Countdown Timer
  // ----------------------------

  const tourStart = new Date("2025-08-01T20:00:00");
  const countdown = document.getElementById("countdown");
  
  function updateCountdown() {
    // create variables define date
    let diff;
  
    if (diff <= 0) {
    // Create conditional for if statement under this line
    }
  // convert time difference in milliseconds under this line
  // --------------
  // update the text on your webpage using interpolation under this line
  }
  
  const timer = setInterval(updateCountdown, 1000);
  
  // ----------------------------
  // 🛠️ Feature Scaffolds
  // ----------------------------
  
  // 1️⃣ VIP Ticket Winner Generator
  document.getElementById("vipWinner").innerHTML = `
    <h3>VIP Ticket Winner</h3>
    <button id="pickWinner">Pick Winner</button>
    <div id="winnerOutput"></div>
  `;
  
  document.getElementById("pickWinner").addEventListener("click", () => {
    // Add your code here
  });
  
  // 2️⃣ Fan Favorite Showdown
  document.getElementById("fanFavorite").innerHTML = `
    <h3>Fan Favorite Showdown</h3>
    <button id="vote">Vote</button>
    <div id="voteCount">Votes: 0</div>
  `;
  
  document.getElementById("vote").addEventListener("click", () => {
    // Add your code here
  });
  
  // 3️⃣ Tour Date Spotlight
  document.getElementById("tourHighlight").innerHTML = `
    <h3>Tour Date Spotlight</h3>
    <ul>
    <li id="cityOslo">Oslo</li>
    <li id="cityBerlin">Berlin</li>
    <li id="cityLondon">London</li>
    </ul>
  `;

  // Sample event listener for one city
  document.getElementById("cityOslo").addEventListener("click", () => {
    // Add your code here
  });
  
  // Students will need to add one for each remaining city (Berlin and London)
  
  // 4️⃣ On the Road Again
  document.getElementById("nextTourStop").innerHTML = `
    <h3>On the Road Again</h3>
    <div id="nextStop"></div>
  `;
  
  // This logic can run on page load or refresh
  function displayNextTourStop() {
    // Add your code here
  }
  
  // 5️⃣ Entry Checkpoint
  document.getElementById("emailCheck").innerHTML = `
    <h3>Entry Checkpoint</h3>
    <input type="email" id="emailInput" placeholder="Enter email">
    <button id="checkEmail">Check</button>
    <div id="emailResult"></div>
  `;
  
  document.getElementById("checkEmail").addEventListener("click", () => {
    // Add your code here
  });
  
  // 6️⃣ Band Bio Toggle
  document.getElementById("bioToggle").innerHTML = `
    <h3>Band Bio Toggle</h3>
    <button id="toggleBio">Show/Hide Bio</button>
    <p id="bio" style="display:none;">Skullcapz is a heavy metal band from Norway, known for their dark, intense sound and high-energy shows.</p>
  `;

  document.getElementById("toggleBio").addEventListener("click", () => {
    // Add your code here
  });  