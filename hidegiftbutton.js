// @name          Hide Gift Button
// @description   Hides the gift button in Discord
// @version       1.0.0

module.exports = {
  start() {
    // Function to hide the gift button
    const hideGiftButton = () => {
      try {
        const giftButton = document.querySelector('[data-testid="gift-button"]'); // The gift button's selector
        if (giftButton) {
          giftButton.style.display = 'none'; // Hide the gift button
        }
      } catch (err) {
        console.error("Error hiding gift button:", err);
      }
    };

    // Attempt to hide the button immediately
    hideGiftButton();

    // Keep checking every second to ensure it's hidden
    const interval = setInterval(() => {
      hideGiftButton();
    }, 1000);

    // Cleanup when the plugin is disabled
    this.stop = () => {
      clearInterval(interval);
    };
  },
};
