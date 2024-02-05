import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import Sidebar from "./components/Sidebar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');

  const getData = async () => {
    const valRef = collection(db, 'store');
    const dataDb = await getDocs(valRef);
    const allData = dataDb.docs.map(val => ({ ...val.data(), id: val.id }));
    const filteredData = allData.filter(val => val.tags.toString().toLowerCase().includes(filter.toLowerCase()));

    // Apply search filter
    const searchedData = filteredData.filter(val =>
      val.name.toLowerCase().includes(search.toLowerCase()) ||
      val.desc.toLowerCase().includes(search.toLowerCase()) ||
      val.tags.toString().toLowerCase().includes(search.toLowerCase())
    );

    filter ? setData(searchedData) : setData(allData);
    search && setData(searchedData)
  };

  useEffect(() => {
    getData();
    console.log(search);
  }, [filter, search]);

  return (
    <>
      <div className='bg-white text-black min-h-screen m-0'>
        <Header setSearch={setSearch} />
        {/* body  */}
        <div className="flex px-14 mt-10 pb-4 gap-5">
          <div className="w-[60%] flex flex-col gap-3">
            {data.map((val, index) => (
              <Card key={index} name={val.name} tags={val.tags} desc={val.desc} fileUrl={val.fileUrl} />
            ))}
          </div>
          <div className="w-[35%]">
            <Sidebar setFilter={setFilter} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
