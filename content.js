// Prevent multiple injections
if (!document.getElementById('kiosk-camera-button')) {
  
  // Create the button
  const cameraButton = document.createElement('div');
  cameraButton.id = 'kiosk-camera-button';
  cameraButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
      <circle cx="12" cy="13" r="4"></circle>
    </svg>
    <span>Camera</span>
  `;
  
  // Add click handler
  cameraButton.addEventListener('click', function() {
    // Try to open the custom protocol
    window.location.href = 'kamoso://launch';
    
    // Fallback: create a hidden link and click it
    // This helps with some protocol handler implementations
    const link = document.createElement('a');
    link.href = 'kamoso://launch';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
  
  // Add button to the page
  document.body.appendChild(cameraButton);
  
  // Ensure button stays on top when new content loads
  const observer = new MutationObserver(function() {
    if (!document.getElementById('kiosk-camera-button')) {
      document.body.appendChild(cameraButton);
    }
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: false
  });
}