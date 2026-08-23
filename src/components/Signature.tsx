interface SignatureProps {
  className?: string;
  
  // Set true when placed on a dark background (Navbar/Footer)
  invert?: boolean;
}

function Signature({ className = "", invert = false }: SignatureProps) {
  return (
    <img
      src="/images/signature-black.png"
      alt="Rafif Fernanda"
      className={`w-auto ${invert ? "invert" : ""} ${className}`}
    />
  );
}

export default Signature;