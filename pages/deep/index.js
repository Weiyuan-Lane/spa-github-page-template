import BasePathLink from '@helpers/BasePathLink';

export default function Deep() {
  return (
    <div>
      This is deep page, to test this SPA.<br/>

      You should just go <BasePathLink href='/'><a>home</a></BasePathLink><br/>

      Or another page at this level: <BasePathLink href='/deep/another'><a>here</a></BasePathLink><br/>

      Or even deeper!!! <BasePathLink href='/deep/deeper'><a>Here</a></BasePathLink>
    </div>
  );
}