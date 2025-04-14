import { faHouse, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
    url: string
    icon: IconDefinition
}

export const Social = ({ url, icon }: Props) => {
  return (
    
      <a
        className="size-6 text-fundo text-3xl text-[#dfdfe4] hover:text-[#798189]"
        target="_blank"
        href={url}
        // href="https://www.instagram.com/idhelsi/"
      >
        <FontAwesomeIcon icon={icon} />
      </a>    
  );
};
