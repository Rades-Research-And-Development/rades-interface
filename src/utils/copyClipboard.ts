export const copyClipboard = async (text: string) => {
    const res = await navigator.clipboard.writeText(text);
    return res;
};