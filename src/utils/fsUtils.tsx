

const fsUtils = {
    getAction(action?: string, version?: string, format?: string) {
      let url = "/fs/api/";
  
      if (version) {
        url += `${version}/`;
      } else {
        url += 'v1.0/';
      }
  
      url += `${action}`;
  
      if (format) {
        url += `.${format}`;
      } else {
        url += '.json';
      }
  
      return url;
    },
    getFileUploadAddress() {
      return this.getAction("uploadFile");
    }
}

export default fsUtils;