# BufferTransformer

Transform asset data for QuaAsset.

## Usage

Step 1: Install this package.

```bash
$ npm i @quajs/buffer-transformer
```

Step 2: Import to your project.

```ts
import { transformBuffer } from '@quajs/buffer-transformer';

const blob = transformBuffer<Blob>('asset.png', buffer);
console.log(window.URL.createObjectURL(blob));
```

## License

MIT
