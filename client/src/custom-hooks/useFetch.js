import {useEffect, useState} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(`Loading......`);
    const [error, setError] = useState(null);
    const handleDelete = (id) => {
      console.log(`handle delete`);
      setData(data.filter(i => i._id !== id));
    }
    const handleEdit = (user) => {
      console.log(`handle edit`);
      setData(data.filter( i => {
        if (i._id === user._id){
          i.name = user.name;
          i.email = user.email;
          i.phone = user.phone;
          i.address = user.address;
        }
        return i;
      }));
    }
    const handleCreate = (user) => {
      console.log(`handle create`);
      const dataCopy = [...data];
      console.log(dataCopy);
      dataCopy.push(user)
      setData(dataCopy);
    }
    console.log(`inside read`);
    useEffect(() => {
        fetch(url)
        .then( response => {
          if (!response.ok){
            console.log(`custom error`);
            throw new Error(`There is some error!!`);
          }
          return response.json()
        })
          .then(jsonData => {
            setData(jsonData)
            setIsLoading(null);
          })
          .catch(err => {
            setIsLoading(null);
            setError(err.message);
            console.log(err)
          });
        }
      ,[url]
      );
    return {data, isLoading, error, handleDelete, handleCreate, handleEdit};
}

export default useFetch;
// module.exports = {useRead, useCreate, useDelete};