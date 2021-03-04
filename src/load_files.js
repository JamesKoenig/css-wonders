
const loadFiles = (callback, filePaths = []) => {
  if (filePaths.length === 0 ) return undefined;

  const [first, ...rest] = filePaths;
  let xhr = new XMLHttpRequest();
  xhr.open('GET', first, true);
  xhr.onload = function() {
    callback(this.response);

    //to ensure the proper order of things being mounted, load the next file
    // after the previous onload callback completes
    loadFiles(callback, rest); 
  }
  xhr.send();
}

export default loadFiles;
