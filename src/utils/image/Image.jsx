/* Components */
import Link from "next/link";
import { MyImage } from "./Image.style";

export default function Image({
  src,
  alt,
  width,
  height,
  classN = "",
  quality = 80,
}) {
  return (
    <Link href={`/images/${src}`} target="_blank">
      <MyImage
        src={`/images/${src}`}
        alt={alt}
        width={width}
        height={height}
        className={classN}
        quality={quality}
      ></MyImage>
    </Link>
  );
}
