# PDF-Live-Reload

An incredibly simple and downright insecure web app for viewing a PDF file in the web browser and reloading on file change.

## But WHY!?

I've recently started using LaTeX to create documents and thought it'd be neat to be able to preview these documents on my iPad in the Safari web browser and have the page reload when the outputted PDF file has changed.

## Usage

* Install browser sync:

```
npm install -g browser-sync
```

* Start the Node.js web server:

```
cd PDF-Live-Reload
node ./bin/www
```

Run browser-sync as follows:

```
browser-sync start --proxy "http://127.0.0.1:3000" --files "/tmp/compressed.tracemonkey-pldi-09.pdf"
```

* Point your web browser to the appropriate URL e.g:

http://127.0.0.1:3001/viewer.html?file=http://127.0.0.1:3001/proxy/?file%3d%2Ftmp%2Fcompressed.tracemonkey-pldi-09.pdf

## Security

Security, What security? This web app proxies local files on your computer **do not use this in production and don't even think about putting it on the Internet**

## Future Improvements

* Add some security (aka don't let anybody request any file and certainly don't let people request files in ~/.ssh or your bash / zsh / etc environment files)

* Start browser-sync from within the Node.js server so that it doesn't have to be manually started.
