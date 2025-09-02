import Image from "next/image";
import "@/src/styles/components/CardsRelated/MiniServiceCard.css";

import { MiniServiceCardProps } from "@/src/types/propsTypes";
  


  export default function MiniServiceCard({ imgSrc, title, description }: MiniServiceCardProps) {
    return (
      <div className="mini-card">
        <div className="mini-card-logo">
          <Image
            src={imgSrc}
            alt={title + " icon"}
            width={64}
            height={64}
            className="mini-card-logo-img"
          />
        </div>
  
        <p className="mini-card-title">{title}</p>
        <p className="mini-card-description">{description}</p>
      </div>
    );
  }