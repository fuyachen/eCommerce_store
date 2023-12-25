"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div>
      {/* main image */}
      <div className="relative aspect-square rounded-lg overflow-hidden mb-8">
        <Image
          src={selectedImage.url}
          fill
          className="h-full w-full object-cover object-right-top"
        />
      </div>
      {/* images list */}
      <div className="grid grid-cols-4 gap-4 cursor-pointer">
        {images.map((image) => (
          <div
            className={cn(
              "max-w-xs aspect-square relative rounded-lg overflow-hidden",
              image.id === selectedImage.id
                ? "border-[2px] border-gray-500"
                : null
            )}
            key={image.id}
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image.url}
              fill
              className="h-full w-full object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
