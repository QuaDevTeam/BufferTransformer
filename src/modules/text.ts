export default {
  type: 'text',
  transformer: (buffer: Uint8Array) => new TextDecoder().decode(buffer),
};
