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
