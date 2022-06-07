export default {
  type: 'application/json',
  transformer: <T>(buffer: Uint8Array): T => {
    return JSON.parse(new TextDecoder().decode(buffer)) as T;
  },
};
