import { BufferTransformer, BufferTransformMethod } from '../types/transformer';

export const registerTransformer = (transformers: BufferTransformer[]) => {
  const map: Record<string, BufferTransformMethod> = {};
  transformers.forEach((item) => {
    if (Array.isArray(item.type)) {
      item.type.forEach((type) => {
        map[type] = item.transformer;
      });
    } else {
      map[item.type] = item.transformer;
    }
  });
  return map;
};
