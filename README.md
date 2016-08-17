# Instanabber
A simple Chrome extension to download instagram images

##Background
Instagram makes it difficult to download images directly from browser. The added difficulty in saving your own images can be frustrating, especially if you are trying to save multiple images in a short period of time. This extension helps by automatically downloading the image on the current photo page after clicking the page action icon in the OmniBar.

### Installation
You may clone this repo or simply download the contents to a location accesible by Google Chrome /path/to/instanabber. In Chrome, enter chrome://extensions in the OmniBar which will navigate you to the extensions manager. Make sure that the developer mode checkbox in the top right corner is checked. Click "Load unpacked extension..." and navigate to the directory containing the repo /path/to/instanabber/. Click select and the extension will be installed.

### Usage
When viewing an instagram photo page, a url of the form https://<span>www</span>.instagram.com/p/*, an icon will appear in the address bar. Click the icon and the full-size image will download (unless the icon is clicked while viewing the photo in a lightbox, in this case the extension will instruct you to go to the photo page in a new tab).

### Future Work
Further work may include packaging this extension so that it may be used outside of developer mode. For now, it is less of a full application or product, and more of a development exercise.

##Enjoy

#####Author: David Wayne

#####Last Updated: 2016-08-17
