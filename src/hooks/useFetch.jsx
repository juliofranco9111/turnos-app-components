/* import { useEffect, useState } from 'react';

export const useFetch = (url) => {
const [data, setData] = useState({});
  useEffect(async () => {

    await fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));

    console.log(data);
  }, [url]);

  console.log(data);

  return data ;
};
 */

import { useEffect, useRef, useState } from 'react';

export const useFetch = (url) => {
  const isMounted = useRef(true);

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({
      data: null,
      loading: true,
      error: null,
    });

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (isMounted.current) {
          setState({
            loading: false,
            error: null,
            data,
          });
        } else {
          console.log('setState no se llamó');
        }
      });
  }, [url]);

  return state;
};
