import Image from "next/image";
import Link from "next/link";
import "@/src/styles/components/CardsRelated/ServiceCard.css";
import { ServiceCardProps } from "@/src/types/propsTypes";



export default function ServiceCard({ imgSrc, name, description}: ServiceCardProps) {
  return (
    <div className="service-card">
      {/* Logo */}
      <div className="service-card-logo">
        <Image
          src={imgSrc}
          alt={name + " logo"}
          width={64}
          height={64}
          className="object-contain"
        />
      </div>

      {/* Name */}
      <p className="service-card-name">{name}</p>

      {/* Description */}
      <p className="service-card-description">{description}</p>

      {/* Learn More Link */}
      <Link href={`/services/${name}`} className="service-card-link">
        Learn more
      </Link>
    </div>
  );
}
