import { useState } from "react";
import "./App.css";

function App() {
  const [yazi, setYazi] = useState("");
  const [liste, setListe] = useState([]);

  function sil(id) {
    const yeniListe = liste.filter((item) => item.id !== id);
    setListe(yeniListe);
  }

  function ekle() {
    console.log("ekleye basıldı");
    if (!yazi) {
      alert("lüften not yazın");
      return;
    }

    const eleman = {
      id: Math.floor(Math.random() * 1000),
      value: yazi,
    };
    setListe((eskideger) => [...eskideger, eleman]);
    console.log(liste);
    setYazi("");
  }
  return (
      <div className="flex py-6 px-4 flex-col mx-auto sm:w-[600px] w-screen gap-y-3 sm:h-[600px] h-screen max-h-full overflow-auto bg-orange-300 ">
        <h1 className="text-3xl text-center text-slate-500">To Do List</h1>
        <div className="w-full mx-auto flex items-center text-center  ">
          <input
            value={yazi}
            onChange={(gelen) => setYazi(gelen.target.value)}
            className=" w-full   border-4 rounded-xl  mx-3 "
            type="text"
            placeholder="not giriniz"
          />
          <button
            className="text-xl hover:bg-slate-700 transition-all  rounded-full px-2 py-1 bg-slate-400"
            onClick={ekle}
          >
            Add
          </button>
        </div>
        <div className="w-full">
          <ul>
            {liste.map((eleman) => {
              return (
                <li className="" key={eleman.id}>
                  <div className="flex bg-slate-300    rounded-xl my-4 px-4">
                    <div className="mx-2 text-slate-600   w-full">{eleman.value}</div>
                    <div>
                      <button
                        className="text-white rounded-3xl hover:text-black transition-all  px-1 bg-red-600 "
                        onClick={() => sil(eleman.id)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
  );
}

export default App;
