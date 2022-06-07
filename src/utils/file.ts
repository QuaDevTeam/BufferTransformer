import mime from 'mime';

export const getFileType = (assetName: string) => {
  if (typeof assetName !== 'string' || !assetName.includes('.')) {
    // no extension name
    return '';
  }
  const extensionName = assetName.slice(Math.min(assetName.lastIndexOf('.') + 1, assetName.length));
  if (!extensionName) {
    return '';
  }
  return mime.getType(extensionName);
};
