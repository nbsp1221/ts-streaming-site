import React from 'react';
import NextLink from 'next/link';

interface Props {
  readonly as?: string;
  readonly href: string;
}

const NextLinkRef = React.forwardRef<HTMLAnchorElement, Props>(function NextLinkRef(props, ref) {
  const {
    as,
    href,
    ...other
  } = props;

  return (
    <NextLink as={as} href={href}>
      <a ref={ref} {...other} />
    </NextLink>
  );
});

export default NextLinkRef;