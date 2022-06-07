export default (buffer: Uint8Array, fileType: string | null) =>
  new Blob([buffer], {
    ...(fileType
      ? {
          type: fileType,
        }
      : {}),
  });
