import BasePathLink from '@helpers/BasePathLink';

export default function Cats() {
  return (
    <div>
      This is deep page, to test this SPA.<br/>

      You should just go <BasePathLink href='/'><a>home</a></BasePathLink><br/>

      Or back to the base page at this level: <BasePathLink href='/deep'><a>here</a></BasePathLink>
    </div>
  );
}