# Custom-HTML5-Video-Player

This project is a custom-styled HTML5 video player built using **HTML**, **CSS**, and **JavaScript**. It replicates basic video playback functionality with a custom user interface and added features like volume control, playback speed adjustment, skip buttons, and fullscreen toggle.

## 📁 Project Structure

```
Custom-HTML5-Video-Player/
│
├── index.html       # Main HTML file
├── style.css        # Styles for the video player
├── scripts.js       # JavaScript logic for custom controls
└── 652333414.mp4    # Sample video file
```

## 🚀 Features

- Play/Pause toggle
- Skip forward and backward (`+25s` and `-10s`)
- Volume control
- Playback speed control
- Clickable progress bar with scrub functionality
- Fullscreen toggle

## 🛠️ How It Works

### HTML (`index.html`)

- The layout consists of a `<video>` element and a set of custom controls wrapped in a `.player` container.
- Controls include buttons, sliders, and a progress bar.

### JavaScript (`scripts.js`)

- Event listeners handle user interactions such as play/pause, volume changes, skipping, and fullscreen.
- DOM manipulation is used to reflect the current state (e.g., play icon changes).
- Custom logic is implemented to update the progress bar and allow scrubbing.

### CSS (`style.css`)

- Not included here, but it's assumed to contain styles for layout, button appearance, slider design, and transitions.

## ✅ Usage

1. Clone the repository or download the files.
2. Make sure to include a video file named `652333414.mp4` in the root directory, or change the `src` in the HTML.
3. Open `index.html` in a web browser to interact with the custom video player.

## 🔧 Browser Compatibility

Supports modern browsers with HTML5 and Fullscreen API support:
- Chrome
- Firefox
- Edge
- Safari

> Note: Fullscreen behavior may vary slightly between browsers.

## 📸 Preview

![Custom HTML5 Video Player Screenshot](<HTML Video Player.png>)

## 📄 License

This project is open-source and free to use for learning and development purposes.