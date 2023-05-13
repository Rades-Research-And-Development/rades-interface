import imageCompression from "browser-image-compression";

// export const compressImage = async (imageFile: File) => {

//     console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
//     console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

//     const options = {
//         maxSizeMB: 1,
//         maxWidthOrHeight: 1920,
//         useWebWorker: true,
//     }
//     try {
//         const compressedFile = await imageCompression(imageFile, options);
//         console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
//         console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
//         return new File([compressedFile], "data.jpg", {
//             type: 'image/jpeg',
//         });
//     } catch (error) {
//         console.log(error);
//     }
//     return new File([imageFile], "data.jpg", {
//         type: 'image/jpeg',
//     });
// }
export const compressImage = async (imageFile: File): Promise<Blob | File> => {
    try {
        console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
        console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1920,
            useWebWorker: true,
        };
        const compressedFile = await imageCompression(imageFile, options);
        console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
        const compressedImageData = new File([compressedFile], `data-${Math.random()}.jpg`, {
            type: 'image/jpeg',
        });
        return compressedImageData;
    } catch (error) {
        console.log(error);
        return imageFile;
    }
};
