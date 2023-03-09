export const getAllContacts = (store) => store.contacts.items;

export const getFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts.items;
  }

  const normalizedFilter = filter.toLowerCase();

  return contacts.items.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};

export const getLoading = ({ contacts }) => contacts.isLoading;
export const getError = ({ contacts }) => contacts.error;
