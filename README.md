# Kiosk Kamoso App Launcher
This is an extension created for Chromium browsers that run in kiosk modes. Really just posted on Github for easy access.
Created for Ubuntu 22.04 Jammy Jellyfish

## Prerequisites before loading extension:

If running on anything other than Ubuntu 22.04 I can not provide support for this extension

For this method, I chose to create a protocol handler as these kiosks will have limited access to network functions.

### Creating the Protocol Handler:
```

sudo nano /usr/local/bin/kamoso-protocol-handler

```
Then Paste or write the following:

```
#!/bin/bash
# Protocol handler script to launch Kamoso

# Launch Kamoso camera application
kamoso &

# Exit immediately (don't wait for kamoso to close)
exit 0

```
### Create the .desktop file
```
# Make it executable
sudo chmod +x /usr/local/bin/kamoso-protocol-handler

# Create the .desktop file
nano ~/.local/share/applications/kamoso-protocol.desktop
```
Then Paste or write the following:
```
[Desktop Entry]
Version=1.0
Name=Kamoso Protocol Handler
Comment=Handle kamoso:// protocol to launch Kamoso camera app
Exec=/usr/local/bin/kamoso-protocol-handler %u
Type=Application
Terminal=false
MimeType=x-scheme-handler/kamoso;
NoDisplay=true
```
### Registering the protocol handler:
```
# Update desktop database (OPTIONAL)
update-desktop-database ~/.local/share/applications/

# Register the protocol handler
xdg-mime default kamoso-protocol.desktop x-scheme-handler/kamoso
```

Congratulations! Now you can load the unpacked chromium extension, and you will have a camera button that should look like:

![Screenshot of the extension in action](https://i.ibb.co/TDNH3ZMg/Screenshot-2025-10-04-194559.png)

Upon clicking the button you will be prompted:

![Screenshot of the chromium prompt](https://i.ibb.co/zh03nqcx/Screenshot-2025-10-04-194757.png)

Kamoso App Launches

![Screenshot of the extension in action](https://i.ibb.co/1tkzbmwZ/Screenshot-2025-10-04-194855.png)


