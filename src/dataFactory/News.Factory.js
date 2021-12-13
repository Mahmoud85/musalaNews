import {NewsItemModel} from '@musnews/models';
const addNewsId = newsArray => {
  return newsArray.map((item: NewsItemModel, index) => {
    item.id = index;
    return item;
  });
};
const findNewsById = (news, id) => {
  return news.find(item => item.id == id);
};

const lowerCase = text => {
  return String(text).toLowerCase();
};
const itemFilter = (item: NewsItemModel, _value: string) => {
  const value = lowerCase(_value);
  return (
    lowerCase(item?.description).includes(value) ||
    lowerCase(item?.title).includes(value) ||
    lowerCase(item?.content).includes(value) ||
    lowerCase(item.source?.name).includes(value)
  );
};

export {addNewsId, findNewsById, itemFilter};
