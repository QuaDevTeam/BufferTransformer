import { registerTransformer } from './utils/register';
import { getFileType } from './utils/file';
import { BlobTranformMethod, BufferTransformMethod } from './types/transformer';
import JsonTransformer from './modules/json';
import BlobTransformer from './modules/blob';
import TextTransformer from './modules/text';

const transformers = registerTransformer([JsonTransformer, TextTransformer]);

export interface TransformParams {
  name: string;
  buffer: Uint8Array;
}

export const transformBuffer = <T>(params: TransformParams): T => {
  const { name, buffer } = params;
  if (!name) {
    throw new TypeError('Name should be a non-empty string.');
  }
  if (!buffer) {
    throw new TypeError('Buffer should not be empty.');
  }
  // find transformer
  const fileType = getFileType(name);
  let transformer: BufferTransformMethod | BlobTranformMethod = BlobTransformer;
  if (fileType) {
    const fileMainType = fileType.includes('/') ? fileType.slice(0, fileType.indexOf('/')) : fileType;
    transformer = transformers[fileType] || transformers[fileMainType] || BlobTransformer;
  }
  return transformer(buffer, fileType);
};
