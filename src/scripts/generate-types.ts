var fs = require('fs');
var path = require('path');
var generateApi = require('swagger-typescript-api').generateApi;

generateApi({
  name: 'api.d.ts',
  url: 'http://localhost:8080/api-json',
})
  .then(({ files }: any) => {
    files.forEach(({ content }: any) => {
      fs.writeFileSync(
        path.resolve(__dirname, '../services/api.d.ts'),
        content
      );
    });
    return;
  })
  .catch((e: any) => console.error(e));

export {};
