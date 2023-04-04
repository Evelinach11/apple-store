export const isAuthentificate = (token) => {
  if (!token) {
    return false;
  }
  return true;
};

export const fetchUserData = (id) => {
  if (!id) {
    return { name: "Guest", surname: "Guest", bonus: "0" };
  }
  //test data
  return { name: "Евеліна", surname: "Чолак", bonus: "100" };
};
