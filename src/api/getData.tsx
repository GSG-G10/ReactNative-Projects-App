import { collection, getDocs } from 'firebase/firestore/lite';
import db from '../../firebase.config';


const getDetails = async (query: string) => {
  const check = await collection(db, query);
  const { docs } = await getDocs(check);
  const data = docs[0]._document.data.value.mapValue.fields[query].arrayValue.values;

  return data;
};

export default getDetails;