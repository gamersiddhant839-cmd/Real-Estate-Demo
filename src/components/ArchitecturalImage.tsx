import React, { useState } from 'react';
import { Home } from 'lucide-react';

interface ArchitecturalImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  aspectRatioClass?: string;
  priority?: boolean;
  monogram?: string;
}

export const ArchitecturalImage: React.FC<ArchitecturalImageProps> = ({
  src,
  alt,
  className = '',
  aspectRatioClass = 'aspect-[16/10]',
  priority = false,
  monogram = 'V',
  ...rest
}) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-[#F2EFE9] select-none ${aspectRatioClass} ${className}`}
    >
      {/* Elegant neutral loading shimmer background */}
      {!hasLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#F2EFE9] via-[#E8E4DC] to-[#F2EFE9] animate-pulse flex items-center justify-center">
          <span className="font-serif text-[#A37E4C]/40 text-2xl tracking-widest uppercase">
            {monogram}
          </span>
        </div>
      )}

      {/* Fallback architectural container if image URL is unreachable */}
      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#F7F5F0] p-6 text-center border border-[#E5E0D5]">
          <div className="w-12 h-12 rounded-full border border-[#A37E4C]/30 flex items-center justify-center text-[#A37E4C] mb-3">
            <Home className="w-5 h-5 opacity-70" />
          </div>
          <span className="font-serif text-lg tracking-wide text-[#14171A]">{alt}</span>
          <span className="text-xs text-[#7A828E] mt-1 tracking-widest uppercase">
            Valmont Private Estates
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          referrerPolicy="no-referrer"
          onLoad={() => setHasLoaded(true)}
          onError={() => {
            setHasError(true);
            setHasLoaded(true);
          }}
          className={`w-full h-full object-cover transition-all duration-700 ease-out ${
            hasLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          {...rest}
        />
      )}
    </div>
  );
};
