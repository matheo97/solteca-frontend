import fs from 'fs';
import { generateApi } from 'swagger-typescript-api';
import path from 'path';

generateApi({
  name: 'api.d.ts',
  url: 'http://localhost:8080/api-json',
})
  .then(({ files }) => {
    files.forEach(({ content }) => {
      fs.writeFileSync(
        path.resolve(__dirname, '../services/api.d.ts'),
        content
      );
    });
  })
  .catch((e) => console.error(e));
