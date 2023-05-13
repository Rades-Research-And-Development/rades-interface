import imageCompression from "browser-image-compression";


export const compressImage = async (imageFile: File): Promise<Blob | File> => {
    try {

        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1920,
            useWebWorker: true,
        };
        const compressedFile = await imageCompression(imageFile, options);
        const compressedImageData = new File([compressedFile], `data-${Math.random()}.jpg`, {
            type: 'image/jpeg',
        });
        return compressedImageData;
    } catch (error) {
        console.log(error);
        return imageFile;
    }
};
