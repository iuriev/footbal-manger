import { ElementType, HTMLAttributes, FC } from 'react';

interface HeadingProps extends HTMLAttributes<HTMLOrSVGElement> {
  tag?: ElementType,
  text: string
}

const Heading: FC<HeadingProps> = ({ tag: Tag = 'h1', text }) => {
  return <Tag> {text}</Tag>;
};

export default Heading;
