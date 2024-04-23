import { getInitials } from "@/utils/strings";
import Image from "next/image";

interface AvatarProps {
  src?: string;
  alt?: string;
  initials?: string;
}

export const Avatar = (props: AvatarProps) => {
  return (
    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 me-2">
      {props.src ? (
        <Image src={props.src} alt={props.alt ?? ""} width={40} height={40} />
      ) : props.initials ? (
        <span className="font-medium text-gray-600 dark:text-gray-300">
          {getInitials(props.initials)}
        </span>
      ) : null}
    </div>
  );
};
