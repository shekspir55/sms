import { metadata } from "./layout";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-1 font-mono bg-gray-300 bg-pattern">
        <div className="">
          <div className="container">
            <div className="row">
              <div className="col-md justify-center flex flex-col">
                <h1 className="h1">
                  <b>{metadata.title}</b>
                </h1>
                <h2 className="h3 mt-4">{metadata.description}</h2>
                <h3 className="h1 mt-4 font-bold">
                  Special deal{" "}
                  <i>
                    <s>20$</s>
                  </i>{" "}
                  10$
                </h3>
                <button className="mt-4 middle none center rounded-lg bg-blue-500 py-3.5 px-7 font-sans text-sm font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none text-xl">
                  REGISTER
                </button>
              </div>
              <div className=" mt-4 col-md d-none d-lg-block flex flex-col">
                <img className="floating" src="/telegram.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <div className="container">
        <div className="card">
          <img src="thumbnail.png" alt="" />
        </div>
      </div> */}
    </>
  );
}
