import Image from "next/image";

import styles from "@/app/ui/styles.module.css";
import chroma from "@/public/img/chroma.jpg";

const Background = () => {
  return (
    <div className={styles.bgWrap}>
      <Image
        alt=""
        src={chroma}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  )
};

export default Background;
