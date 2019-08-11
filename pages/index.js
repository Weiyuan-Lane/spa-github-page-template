import Head from 'next/head';
import BasePathLink from '@helpers/BasePathLink';

export default function Home() {
  // <Head> adds/replace attributes in <head> DOM element, such as the <title> element
  // If <Head> is not provided, it will default to that found in `_app.js`
  return (
    <React.Fragment>
      <Head>
        <title>This is homepage title</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway"></link>
      </Head>
      <div className="bgimg w3-display-container w3-animate-opacity w3-text-white">
        <div className="w3-display-topleft w3-padding-large w3-xlarge">
          Logo
        </div>
        <div className="w3-display-middle">
          <h1 className="w3-jumbo w3-animate-top">It's Here!</h1>
          <hr className="w3-border-grey"/>
          <p className="w3-large w3-center">Yes yes yes</p>
          <BasePathLink href='/cats'><a>Test this SPA</a></BasePathLink>
        </div>
        <div className="w3-display-bottomleft w3-padding-large">
          Free template credits to <a href="https://www.w3schools.com/w3css/w3css_templates.asp" target="_blank">W3 Schools</a>
        </div>
      </div>
    </React.Fragment>
  );
};

