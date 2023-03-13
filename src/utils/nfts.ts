import { getBooks } from "__fakeData__/books/books";
export const getNFTs = (num = 18) => {
  return getBooks(num).map((data: any, index: number) => {
    return {
      uuid: index,
      book_id: data?.id,
      read_progress: Math.floor(Math.random() * 70) + 20,
    };
  });
};
