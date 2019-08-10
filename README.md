# Single Page Application (SPA) + Static Web Pages for Github Pages with React components

(What a mouthful!)

This template was my attempt to use something that I already utilise at work, but for Github Pages. I was reading that Next.js could serve as a [static page generator](https://nextjs.org/learn/excel/static-html-export), and inspired by [middleman-gh-pages](https://github.com/edgecase/middleman-gh-pages), I wanted to create something really easy to use when utilised with Github Pages.

Case in point, here's a [demo for this SPA](https://weiyuan-lane.github.io/spa-github-page-template/) directly from this repo, which you can clone to local and deploy too. 

The framework behind this project is Next.js, but I've tooled it such that React knowledge is required to use it. If you would like to learn more on Next.js, do take a look at the [documentation](https://nextjs.org/docs#automatic-code-splitting)

# Installation

Clone this repository and install the development dependendies
```
git clone https://github.com/Weiyuan-Lane/spa-github-page-template.git
npm install
```

Make sure that you initialise your repository's origin after running the following
```
rm -rf .git
```


# Development

Run the following to start a development instance locally at port 3000
```
npm start
```

To add or remove views, look at the `pages` directory. 

Just like a static HTML app serves the `/` route from `pages/index.html` and `/another` route from `pages/another.html`, this JavaScript SPA has its corresponding `/` route from `pages/index.js` and `/another` from `pages/another.js`.

----

For SPA routing, I have written a wrapper around `next/link`, which makes `Link` easier to use for publish (use it to avoid the complexity in the `Publish` section below)

```javascript
import BasePathLink from '@helpers/BasePathLink';

export default function Home(){
  return (
    <BasePathLink href='/'><a>Test this SPA</a></BasePathLink>
  );
}
```

# Publish
Before publishing, do take a look at `next.config.js` for a crucial setting, depending on how you use Github Pages. 

If you are serving this application from the root of your host (e.g. `https://weiyuan-lane.github.io`), no change is required. ( See more here: [Users and Organisations Pages](https://help.github.com/en/articles/user-organization-and-project-pages#user-and-organization-pages-sites) )

But if you're serving from a subpath, like this repository ( [https://weiyuan-lane.github.io/spa-github-page-template/](https://weiyuan-lane.github.io/spa-github-page-template/) ), you will have to change the value of `basePath` as seen below
```javascript
/*****************************************************************************
 * SET YOUR CONFIGURATION HERE
 *****************************************************************************/

 // Set base path if your static app does not start from root
const basePath = ''; // change to '/spa-github-page-template' for example above
```

Once the above is done, and you're ready to publish, run the following command:

```
npm run publish
```

Viola! The static app is now published to the `gh-pages` branch. 

If this is your first time, simply go to the settings page of the repository, and select the source under the Github Pages category as `gh-pages`, and your page should be live in a few minutes.

----

If you need to update your Github Pages site, you can run the `npm run publish` command again to perform the update.

