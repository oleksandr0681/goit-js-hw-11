'use strict';

import axios from 'axios';

export default function getImagesByQuery(query) {
  const parameters = {
    params: {
      key: '55507124-55cf7e8db58c14a0702f34115',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    },
  };

  return new Promise((resolve, reject) => {
    axios
      .get('https://pixabay.com/api', parameters)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
}
