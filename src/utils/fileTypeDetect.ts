
export const checkFileType = (url) => {
    const extension = url.split('.').pop().toLowerCase();
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'svg'];
    const videoExtensions = ['mp4', 'mov', 'avi', 'wmv', 'mkv'];
    const pdfExtensions = ['pdf'];

    if (imageExtensions.includes(extension)) {
        return 'image';
    } else if (videoExtensions.includes(extension)) {
        return 'video';
    } else if (pdfExtensions.includes(extension)) {
        return 'pdf';
    } else {
        // Check if the dot character appears elsewhere in the URL
        const lastDotIndex = url.lastIndexOf('.');
        if (lastDotIndex > 0 && lastDotIndex < url.length - 1) {
            const name = url.slice(0, lastDotIndex);
            const newExtension = url.slice(lastDotIndex + 1).toLowerCase();
            return checkFileType(newExtension === extension ? name : url);
        } else {
            return 'unknown';
        }
    }
}
