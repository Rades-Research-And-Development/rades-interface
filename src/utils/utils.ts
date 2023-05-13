export const searchByName = (listData: any[], searchValue: string) => {
  if (searchValue.length > 0) {
    const searchResult = listData.filter((item) =>
      item.name.toLocaleLowerCase().match(searchValue.toLowerCase())
    );
    return searchResult;
  } else {
    return listData;
  }
};

export const getRoute = (pathname: string) => {
  const str = pathname.split("/");
  return `/${str[1]}`;
};

export const generateNonce = () => {
  const nonceBytes = 16;
  const randomBytes = new Uint8Array(nonceBytes);
  window.crypto.getRandomValues(randomBytes);
  const timestampBytes = 8;
  const timestamp = new Uint8Array(timestampBytes);
  const secondsSinceEpoch = Math.floor(Date.now() / 1000);
  const timestampView = new DataView(timestamp.buffer);
  timestampView.setBigUint64(0, BigInt(secondsSinceEpoch));
  const nonceBuffer = new Uint8Array(nonceBytes + timestampBytes);
  nonceBuffer.set(randomBytes, 0);
  nonceBuffer.set(timestamp, nonceBytes);
  return Array.prototype.map.call(nonceBuffer, x => ('00' + x.toString(16)).slice(-2)).join('');
}
