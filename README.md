# AllStrings

This is an example project for using translation with NGX-translate. 
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.0.
It uses Material Beta and Covalent as UI framework.

## I18n

There are several examples of strings to be translated:

- Attributes: layout card title, subtitle, toolbar title
- Inner text: footer
- Table Data information (simple-table.component)

## Development server

Run `npm start` for a dev server, no production build included yet. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## I18N steps

### Install dependencies and basic setup
1. Install core library: `npm i -S @ngx-translate/core`
2. Install one adapter, i.e.: HttpLoader npm i -S @ngx-translate/http-loader
3. Create a folder for serving the assets and some translations, i.e.: en.json es.json
with keys values for some strings "application.name"
  - en.json Eat at Joe
  - es.json Coma en Joe

4. Configure Module for Root with a loader, using the Http loader. Adapt the call for AOT
```bash
ERROR in ./src/app/app.module.ts
Module parse failed: /home/pablo/projects/all-strings-example/node_modules/@ngtools/webpack/src/index.js!/home/pablo/projects/all-strings-example/src/app/app.module.ts Unexpected token (15:9)
You may need an appropriate loader to handle this file type.
| import { TranslateHttpLoader } from '@ngx-translate/http-loader';
| import { HttpModule, Http } from '@angular/http';
| function (http) {
|     return new TranslateHttpLoader(http, './assets/i18n/', '.json');
| }
```

```typescript
function httpFactory(http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
```

5. Use a translation pipe in a string:
    'application.title' | translate 
    (Check the application that has shows the label)
6. Init the translation with a language and default, translation.use('en'); to 'es'. Check the XHR request for the json.