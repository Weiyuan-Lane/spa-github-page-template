import Head from 'next/head';
import Link from 'next/link';
import Page from '@layouts/main';

export default function Home() {
  return (
    <Page>
      <Head>
        <title>This is homepage title</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway"></link>
      </Head>
      <div className="bgimg w3-display-container w3-animate-opacity w3-text-white">
        <div className="w3-display-topleft w3-padding-large w3-xlarge">
          Logo
        </div>
        <div className="w3-display-middle">
          <h1 className="w3-jumbo w3-animate-top">COMING SOON</h1>
          <hr className="w3-border-grey"/>
          <p className="w3-large w3-center">35 days left</p>
          <Link href='/cats'><a>Test this SPA</a></Link>
        </div>
        <div className="w3-display-bottomleft w3-padding-large">
          Free template credits to <a href="https://www.w3schools.com/w3css/w3css_templates.asp" target="_blank">W3 Schools</a>
        </div>
      </div>
    </Page>
  );
}
