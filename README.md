# Mini App Scaffolding for Super Apps

Creates a new minimalistic Mini App scaffold for developers. The Mini App is intended for organizations powered by the Canopie Super App Platform.
You can get the full documentation for UI components, SDK usage and more detail on how Mini Apps work at the [documentation page](https://docs.canopie.io/)

## Requirements
- Be registered with developer credentials on the Super App platform for the organization you're building the Mini App for
- The Super App (aka host app) on your mobile phone that you're developing for
- The Canopie compiler binary [ LINK TBD ]

## Configuring your Mini App - app.json

The app.json file provides major configurations of your Mini App.
```json
{
  "name": "my-mini-app",
  "version": "1.0.0",
  "description": "My Description",
  "author": "CANOPIE PTY LTD",
  "debug": true,
  "pages": [
    "pages/home/home"
  ],
  "permissions": {
    "scope.userInfo": {
      "description": "Your <platform> YYY information to provide you with customized XXX"
    }
  },
  "dependencies": {
    "material": "^11.0.0",
    "canopie/cwc": "^1.0.0",
    "canopie/sdk": "^1.0.0"
  }
}
```

Please see the documentation page for more details on each field. At a minimum the changes needed to get started will most likely be:

| Field  | Description  |
|---|---|
|name|A globally unique name for your Mini App. It must only contain characters [a-zA-Z], numbers [0-9], dashes and underscores [-_] with a max length of 50 characters. The actual display name of the Mini App can be set in the Developer Portal.|
|pages|An array that links to each page. You can see the default home page nested in the `pages` directory. You **cannot** change `pages` but children underneath that directory is ok.|
|permissions| This is specific to the organization you build the Mini App for. It usually involves requesting permissions to native host features like the camera or user scopes.|

## Styling and Theming

By default, Mini Apps use the Material style themes. You can find supporting classes on the theming [guide](https://material.io/develop/web/theming/theming-guide). The `app.json` file above shows a dependency on Material UI 11.

Styles are written in [Sass](https://sass-lang.com/) and support import functionality. So you can put pure stylesheets like common stylesheets under `assets/styles` and import them into the sheet using them. Additionally, `.scss` files can import standard `.css` as well with the import syntax.

e.g. In `home.scss`:
```scss
@use "../../assets/styles/mdc-typography.scss";
@use "./home.css";
```

## Compiling

Compiling a Mini App will produce a QR code which you can scan with the Super App. Scanning the QR code allows you to launch a non production version of the Mini App for development and testing.

In order to mark the Mini App for review and eventual release to production, you will need to go to the developer portal and find the right build number to go through the [release lifecycle](https://docs.canopie.io/review/).

At this time, there isn't a UI preview yet but it's being worked on.

In case the QR code doesn't automatically pop up after compile, you can check the `.canopie` cache folder for the QR code's png.



```bash
# Authenticate with the portal first
./canopie auth login

# Compile
./canopie compile --appId=<Mini App Id> <src dir>
```

`<src dir>` can be a relative path to your Mini App folder.