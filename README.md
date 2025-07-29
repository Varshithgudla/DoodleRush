

#  DoodleRush

DoodleRush is a real-time, multiplayer web-based drawing and guessing game . Players take turns drawing prompts while others try to guess the correct word to score points.

---

##  Features

* Real-time multiplayer support using WebSockets
* Smooth drawing experience with canvas
* Game rounds with scoring, chat, and timers
* Fun avatars and animations
* Basic profanity filtering
* Works in modern browsers without installation

---

##  Tech Stack

###  Backend

* [Node.js](https://nodejs.org/) — Runtime environment
* [Express.js](https://expressjs.com/) — Web server framework
* [Socket.IO](https://socket.io/) — Real-time communication
* [Chance.js](https://chancejs.com/) — Random name/word generation
* [Nanoid](https://github.com/ai/nanoid) — Unique game room IDs
* [Leven](https://github.com/sindresorhus/leven) — Fuzzy matching for guesses

###  Frontend

* [EJS](https://ejs.co/) — Server-side rendering
* [Socket.IO Client](https://socket.io/docs/v4/client-api/) — Real-time updates
* [Bootstrap](https://getbootstrap.com/) — Styling and layout
* [Animate.css](https://animate.style/) — Animations
* [Howler.js](https://howlerjs.com/) — Sound effects
* [DiceBear Avatars](https://avatars.dicebear.com/) — Avatar generation
* [Varnam Transliteration API](https://github.com/varnamproject) — Input support for Indian languages

---

##  Local Development Setup

> Ensure [Node.js](https://nodejs.org/) (version 14 or later) is installed on your system.

###  Clone and Run

```bash
# Clone the repository
git clone https://github.com/Sasank111/Skribbl_clone.git

# Navigate to project directory
cd Skribblrs.io

# Install dependencies
npm install

# Start the development server
npm start
```

### Access the App

Once running, open your browser and go to:
 [http://localhost:3000](http://localhost:3000)

---

##  Screenshots

| Landing Page        | Settings Page         |
| ------------------- | --------------------- |
| ![Landing][landing] | ![Settings][settings] |

| Game Canvas   | Scoreboard        |
| ------------- | ----------------- |
| ![Game][game] | ![Scores][scores] |

---

##  Credits & Resources

* **Background Image:**
  [skribbl.io background](https://skribbl.io/res/background.png)

* **Game Design Inspirations:**
  [scribble.rs](https://github.com/scribble-rs/scribble.rs)

* **Sound Effects:**
  [freesound.org](https://freesound.org/)

---

##  Project Structure (Overview)

```
Skribblrs.io/
├── public/                 # Static assets (images, JS, CSS)
│   └── images/screenshots/ # Screenshots used in README
├── views/                  # EJS templates
├── routes/                 # Express route handlers
├── socket/                 # Socket.IO server logic
├── utils/                  # Helper functions (e.g., word generator)
├── app.js                  # Main Express app setup
├── package.json            # Project metadata and dependencies
```

---

##  License

This project is intended for learning and non-commercial purposes.
Please respect the original creators of [skribbl.io](https://skribbl.io) and other referenced libraries/resources.

---

##  Future Improvements

* In-game language support
* Mobile responsiveness
* Private/public lobbies
* Drawing tool enhancements (e.g., fill, undo)

---



[landing]: DoodleRush/public/images/screenshots/landing.jpeg
[settings]: DoodleRush/public/images/screenshots/settings.jpeg
[game]: DoodleRush/public/images/screenshots/game.png
[scores]: DoodleRush/public/images/screenshots/scores.jpeg


---

