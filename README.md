## in this project we can see when user click on the open modal button then the url on the top urlbar will change. then when user close the modal then the url will change to the previous url.

- this is done using the history api of the browser.

```js
window.history.pushState(null, null, window.location.pathname);
// this will store the current url in the history api of the browser.
window.history.pushState(null, null, "/new-url");
// this will change the url to the new url.
window.history.back();
// this will go back to the previous url.
```
