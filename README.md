[![Netlify Status](https://api.netlify.com/api/v1/badges/8be578ea-3111-4528-a98f-5b19b4c1ab7e/deploy-status)](https://app.netlify.com/sites/documentor/deploys)

# Documentor

## [Prod Site](https://documentor.netlify.app/)
## [Based on Site](https://eleventy-netlify-boilerplate.netlify.app/)

## Features
* NEW: Added basic support for post authors, using a simple folder collection
* Uses the official [Eleventy Navigation](https://www.11ty.dev/docs/plugins/navigation/) plugin to build menus
* Sample pages and a blog with tag support
* Netlify CMS with editor previews (thanks [@biilmann](https://github.com/biilmann)!)
* Includes a working contact form
* CSS 2kb minified, inlined for fastest page render
* Optional pipeline for minified inline JS
* Pre-builds and minifies your HTML too
* Uses Markdown files for content
* Uses Nunjucks (or Liquid) templates for layout
* 100% Javascript framework free
* Continuous Deployment workflow via Netlify


### Setup authentication
After deploying this project, Netlify Identity will add you as a CMS user and
will email you an invite. It is not necessary to accept this invite if you wish
to use an
[OAuth provider](https://www.netlify.com/docs/identity/#external-provider-login)
(e.g. Github) to manage authentication for your CMS.
It is recommended to use this method of authentication as it removes the need
for an email & password to log in to the CMS and is generally more secure. You
will need to add an OAuth provider in your Netlify app settings under
"Settings" > "Identity" > "External providers".

Once you've added an OAuth provider, navigate to `/admin` on your site, select your provider from the
list, and you should then be logged into your CMS. Cool huh?

Now you're all set, and you can start editing content!

## Gotchas
If you change the repo that was created at deploy time from public to private, you'll need to regenerate your token,
as the token generated using the deploy to Netlify button can only access public repositories. To
regenerate your token, head to "Settings" in your Netlify site dashboard, go to the "Identity"
section, then scroll to "Services" where you'll see an "Edit settings" button. Click that and you'll
see a text link to "Generate access token in GitHub".

If you need any help with setting up Netlify CMS, you can reach out to the Netlify team in the [Netlify CMS Gitter](https://gitter.im/netlify/netlifycms).

## Local development

### 1. Clone this repository:

```
git clone https://github.com/danurbanowicz/eleventy-netlify-boilerplate.git my-blog-name
```


### 2. Navigate to the directory

```
cd my-blog-name
```

Specifically have a look at `.eleventy.js` to see if you want to configure any Eleventy options differently.

### 3. Install dependencies locally

```
npm install @11ty/eleventy
```

### 4. Edit _data/metadata.json

This file contains your site title and author details, and can be used to store any other commonly used site data.

### 5. Run Eleventy (builds the site)

```
npx @11ty/eleventy
```

Or build automatically when a template changes:
```
npx @11ty/eleventy --watch
```

Or in debug mode:
```
DEBUG=* npx @11ty/eleventy
```

