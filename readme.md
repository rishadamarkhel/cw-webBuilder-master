# Basic Web Builder

This is the marketing page builder. This site is built and maintained by the San Francisco Marketing team for Cushman & Wakefield.

This site is built using Foundation 6 and their [ZURB Template](https://github.com/zurb/foundation-zurb-template). Check out their [docs](http://foundation.zurb.com/sites) to learn more about their amazing framework and get started on your own foundation 6 site.

**NOTE**

If viewing this project locally, follow these instructions: In order to edit this project you can do one of following two things: Follow the installation instructions below to utilize the framework and dev environment used to build this site **(recommended)** or create a *copy* of the production site `production/index.html`, append it with the date, and edit the html/css within that folder. It is recommended that you setup your dev environment and edit the framework files to utilize the features below:

- Handlebars HTML templates with Panini
- Sass compilation and prefixing
- JavaScript concatenation
- Built-in BrowserSync server
- For production builds:
  - CSS compression
  - JavaScript compression
  - Image compression

## Installation

To use this project as intended, your computer needs:

- [NodeJS](https://nodejs.org/en/) (0.12 or greater)
- [Git](https://git-scm.com/)

You can install this software by utilizing the terminal.

### Using the CLI

Install the [Foundation CLI](http://foundation.zurb.com/sites/docs/installation.html) with this command:

```bash
npm install foundation-cli --global
```

Now `cd` to to this project name

```bash
cd ~/path/to/folder/basicWebBuilder
```

Then run the following commands:

```bash
npm install
bower install
```

Then start your project by running

```bash
foundation watch
```

This will start running the various tasks dictated in the gulpfile.babel.js file. Once the terminal has completed these the project will be opened up in your default browser useing BrowserSync at the following url:

```
http://localhost:8000
```

When editing the various files in this project, the browser will be updated on save.

When you are ready to deploy your updated project run the following command:

```bash
foundation build
```

Copy the files in the `dist` folder into the `production` folder in a date-labeled folder to keep a tidy archive of versions. Also be sure to update the [`CHANGELOG.md`](CHANGELOG.md) file with any and all changes you made along with the date these were made.

### Need Help?

Contact [Gustavo Youngberg](mailto:gustavo.youngberg@cushwake.com) if you need any assistance. Some of the requirements to run and develop sites like this one may require approval from IT to gain access and utilize the terminal for development.
