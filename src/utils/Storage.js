class Storage {
  /**
   * Get value at key from local storage
   * @param {String} key
   * @returns {Promise<any>}
   */
  get(key) {
    // Wrap callback in a Promise
    return new Promise((resolve, reject) => {
      let callback = result => {
        if (chrome.runtime.lastError) {
          reject(result);
        }
        resolve(result[key]);
      };
      chrome.storage.local.get(key, callback);
    });
  }

  /**
   * Set value at key in local storage
   * @param {String} key
   * @param {*} value
   * @returns {Promise<boolean>}
   */
  set(key, value) {
    // Wrap callback in a Promise
    return new Promise((resolve, reject) => {
      let callback = result => {
        if (chrome.runtime.lastError) {
          reject(result);
        }
        resolve(result);
      };
      chrome.storage.local.set(
        {
          [key]: value
        },
        callback
      );
    });
  }
}

export default Storage;
