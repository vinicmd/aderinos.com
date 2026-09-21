"use client";

import styles from "@/components/phone/phone.module.css";
import Image from "next/image";
import { CONSTANTS } from "@/util/constants";
import { formatTelephone } from "@/util/format-telephone";
import { triggerConversion } from "@/util/google-conversion";
import Link from "next/link";

const handleClick = () => {
  triggerConversion();
};

export const Phone = () => {
  return (
    <div className={styles.contactContainer}>
      <Link
        onClick={() => handleClick()}
        className={styles.contact}
        href={`tel:${CONSTANTS.telephone}`}
      >
        <Image
          width={20}
          height={20}
          src="/assets/telephone.svg"
          className={styles.telephone}
          alt="telephone icon"
        />{" "}
        {formatTelephone(CONSTANTS.telephone)}
      </Link>
    </div>
  );
};
