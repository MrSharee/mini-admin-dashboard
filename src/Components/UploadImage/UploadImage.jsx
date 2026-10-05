import { IoImageOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
function UploadImage() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (!image) {
      setPreview(null);
      return;
    }

    const imageUrl = URL.createObjectURL(image);

    setPreview(imageUrl);

    return () => {
      URL.revokeObjectURL(imageUrl);
    };
  }, [image]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  return (
    <div className="relative w-50 h-40">
      <label className="bg-background border-dashed border-border border-2 rounded-lg w-full h-full flex flex-col justify-center items-center overflow-hidden cursor-pointer">
        {image ? (
          <img
            src={preview}
            alt="preview"
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="flex flex-col justify-center items-center gap-3.5">
            <IoImageOutline className="text-4xl text-text" />

            <p className="text-muted text-[10px]">برای آپلود تصویر کلیک کنید</p>

            <p className="text-muted text-[10px]">
              WEBP, JPG, PNG فرمت های مجاز
            </p>
          </span>
        )}

        <input
          className="hidden"
          type="file"
          accept="image/jpeg,image/png,image/webp"
          onChange={handleImageChange}
        />
      </label>

      {image && (
        <button
          type="button"
          onClick={handleRemoveImage}
          className="absolute top-2 right-2 z-10 text-text cursor-pointer hover:text-danger"
        >
          ×
        </button>
      )}
    </div>
  );
}
export default UploadImage;
