export type BufferTransformMethod = <T>(buffer: Uint8Array) => T | any;

export type BlobTranformMethod = (buffer: Uint8Array, type: string | null) => Blob;

export interface BufferTransformer {
  type: string | string[];
  transformer: BufferTransformMethod;
}
