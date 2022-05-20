import React, { useEffect, useState } from 'react'
import { APIData } from '../types/apicomponents';

const APIComponent: React.FunctionComponent = () => {
  const [data, setData] = useState<APIData>();

  useEffect(() => {
    let isMounted = true;
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        if(isMounted) {
          setData(data);
        }
      });
    return () => {
      isMounted = false;
    }
  }, []);

  return (
    <div>
      {
        data && <div role="contentinfo" >Name is { data.name }</div>
      }
    </div>
  )
}

export default APIComponent