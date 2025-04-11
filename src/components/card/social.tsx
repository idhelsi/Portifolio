import { faHouse, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
    url: string
    icon: IconDefinition
}

export const Social = ({ url, icon }: Props) => {
  return (
    
      <a
        className="size-6 text-fundo text-3xl hover:text-orange-950"
        target="_blank"
        href={url}
        // href="https://www.instagram.com/idhelsi/"
      >
        <FontAwesomeIcon icon={icon} />
      </a>    
  );
};
