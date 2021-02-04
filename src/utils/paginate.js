import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  // calculating the starting index of the items on the page.
  const startIndex = (pageNumber - 1) * pageSize;
  // _.slice(items, startIndex)
  //_.take()
  //we have to convert items array to a lodash wrapper
  // this will return a lodash object
  //this pagination on the client side.
  return _(items).slice(startIndex).take(pageSize).value();
}
