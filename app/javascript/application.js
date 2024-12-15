// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

document.addEventListener("turbo:before-visit", (event) => {
    const frame = document.querySelector('turbo-frame#main-content');
    console.log(frame, frame.src);
    if (frame) {
      // Ensure the frame's source is set correctly before navigating
      frame.src = event.detail.url;
    }
  });
