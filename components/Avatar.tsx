import Image from 'next/image';

function Avatar(props) {
  return (
    <Image
      className="rounded-full"
      height={props.size || 40}
      width={props.size || 40}
      alt={props.alt}
      src={props.url}
    />
  );
}

export default Avatar;
