import BasePathLink from '@helpers/BasePathLink';

export default function Cats() {
  return (
    <div>
      This is an empty page, to test this SPA.<br/>

      You should just go <BasePathLink href='/'><a>home</a></BasePathLink><br/>

      Or you can go <BasePathLink href='/deep'><a>deep</a></BasePathLink>
    </div>
  );
};
