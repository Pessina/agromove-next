import Image from "next/image";
import React from "react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message = "",
}) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 z-50 rounded-full"
      aria-label="Contact us on WhatsApp"
    >
      <Image
        src="/images/whats-app-logo.svg"
        alt="WhatsApp Logo"
        width={60}
        height={60}
        className="w-14 h-14"
      />
    </button>
  );
};

export default WhatsAppButton;
