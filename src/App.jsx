

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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
    // Check if the user is authenticated
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    if (storedUsername && storedPassword) {
      setIsAuthenticated(true);
      setUsername(storedUsername);
      setPassword(storedPassword);
    } else {
      setIsAuthenticated(false);
      setUsername("");
      setPassword("");
    }
  }, [filter, search]);

  const handleLogin = () => {
    // In a real application, you would perform authentication
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    // Compare entered credentials with stored credentials
    if (username === storedUsername && password === storedPassword) {
      setIsAuthenticated(true);
      setErrorMessage("");
    } else {
      setIsAuthenticated(false);
      setErrorMessage("Invalid username or password");
    }
  };

  const handleSignup = () => {
    // In a real application, you would hash and salt the password
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    // Clear authentication info from localStorage
    // localStorage.removeItem("username");
    // localStorage.removeItem("password");
    setIsAuthenticated(false);
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <div className='bg-white text-black min-h-screen m-0'>
        <Header setSearch={setSearch} />
        {/* body  */}
        <div className="flex px-14 mt-10 pb-4 gap-5 flex-wrap">
          {isAuthenticated ? (
            <div className="md:w-[60%] w-full flex flex-col gap-3">
              {data.map((val, index) => (
                <Card key={index} name={val.name} tags={val.tags} desc={val.desc} fileUrl={val.fileUrl} />
              ))}
            </div>
          ) : (
            <div className="w-full mt-32 absolute bg-slate-300 h-screen z-10 bottom-0 left-0 pt-52 books" >
            <div className="text-center border w-max py-20 px-8 rounded-sm mx-auto bg-white">
              <div className="mx-auto w-max">
              <svg width="208" height="31" viewBox="0 0 208 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.9318 10H21.4091C21.2008 8.98674 20.8362 8.09659 20.3153 7.32955C19.804 6.5625 19.179 5.91856 18.4403 5.39773C17.7112 4.86742 16.9015 4.4697 16.0114 4.20455C15.1212 3.93939 14.1932 3.80682 13.2273 3.80682C11.4659 3.80682 9.87027 4.25189 8.44034 5.14205C7.01989 6.0322 5.88826 7.34375 5.04545 9.0767C4.21212 10.8097 3.79545 12.9356 3.79545 15.4545C3.79545 17.9735 4.21212 20.0994 5.04545 21.8324C5.88826 23.5653 7.01989 24.8769 8.44034 25.767C9.87027 26.6572 11.4659 27.1023 13.2273 27.1023C14.1932 27.1023 15.1212 26.9697 16.0114 26.7045C16.9015 26.4394 17.7112 26.0464 18.4403 25.5256C19.179 24.9953 19.804 24.3466 20.3153 23.5795C20.8362 22.803 21.2008 21.9129 21.4091 20.9091H24.9318C24.6667 22.3958 24.1837 23.7263 23.483 24.9006C22.7822 26.0748 21.911 27.0739 20.8693 27.8977C19.8277 28.7121 18.6581 29.3324 17.3608 29.7585C16.0729 30.1847 14.6951 30.3977 13.2273 30.3977C10.7462 30.3977 8.53977 29.7917 6.60795 28.5795C4.67614 27.3674 3.15625 25.6439 2.0483 23.4091C0.940341 21.1742 0.386364 18.5227 0.386364 15.4545C0.386364 12.3864 0.940341 9.73485 2.0483 7.5C3.15625 5.26515 4.67614 3.54167 6.60795 2.32955C8.53977 1.11742 10.7462 0.511363 13.2273 0.511363C14.6951 0.511363 16.0729 0.724431 17.3608 1.15057C18.6581 1.5767 19.8277 2.2017 20.8693 3.02557C21.911 3.83996 22.7822 4.83428 23.483 6.00852C24.1837 7.17329 24.6667 8.50379 24.9318 10ZM46.5334 8.18182C46.3629 6.74242 45.6716 5.625 44.4595 4.82955C43.2474 4.03409 41.7607 3.63636 39.9993 3.63636C38.7114 3.63636 37.5845 3.8447 36.6186 4.26136C35.6622 4.67803 34.9141 5.25095 34.3743 5.98011C33.844 6.70928 33.5788 7.53788 33.5788 8.46591C33.5788 9.24242 33.7635 9.91004 34.1328 10.4688C34.5116 11.018 34.9946 11.4773 35.5817 11.8466C36.1688 12.2064 36.7843 12.5047 37.4283 12.7415C38.0722 12.9687 38.6641 13.1534 39.2038 13.2955L42.1584 14.0909C42.916 14.2898 43.7588 14.5644 44.6868 14.9148C45.6243 15.2652 46.5192 15.7434 47.3714 16.3494C48.2332 16.946 48.9434 17.7131 49.5021 18.6506C50.0608 19.5881 50.3402 20.7386 50.3402 22.1023C50.3402 23.6742 49.9283 25.0947 49.1044 26.3636C48.29 27.6326 47.0968 28.6411 45.5249 29.3892C43.9624 30.1373 42.0637 30.5114 39.8288 30.5114C37.7455 30.5114 35.9415 30.1752 34.4169 29.5028C32.9018 28.8305 31.7086 27.893 30.8374 26.6903C29.9756 25.4877 29.4879 24.0909 29.3743 22.5H33.0107C33.1054 23.5985 33.4747 24.5076 34.1186 25.2273C34.772 25.9375 35.5959 26.4678 36.5902 26.8182C37.594 27.1591 38.6735 27.3295 39.8288 27.3295C41.1735 27.3295 42.3809 27.1117 43.451 26.6761C44.5211 26.2311 45.3686 25.6155 45.9936 24.8295C46.6186 24.0341 46.9311 23.1061 46.9311 22.0455C46.9311 21.0795 46.6612 20.2936 46.1214 19.6875C45.5817 19.0814 44.8714 18.589 43.9908 18.2102C43.1101 17.8314 42.1584 17.5 41.1357 17.2159L37.5561 16.1932C35.2834 15.5398 33.4841 14.607 32.1584 13.3949C30.8326 12.1828 30.1697 10.5966 30.1697 8.63636C30.1697 7.00757 30.6101 5.58712 31.4908 4.375C32.3809 3.15341 33.5741 2.20644 35.0703 1.53409C36.576 0.852272 38.2569 0.511363 40.1129 0.511363C41.9879 0.511363 43.6546 0.847537 45.1129 1.51989C46.5713 2.18276 47.7266 3.09185 48.5788 4.24716C49.4406 5.40246 49.8951 6.71401 49.9425 8.18182H46.5334ZM79.5412 10H76.0185C75.8101 8.98674 75.4456 8.09659 74.9247 7.32955C74.4134 6.5625 73.7884 5.91856 73.0497 5.39773C72.3205 4.86742 71.5109 4.4697 70.6207 4.20455C69.7306 3.93939 68.8026 3.80682 67.8366 3.80682C66.0753 3.80682 64.4796 4.25189 63.0497 5.14205C61.6293 6.0322 60.4976 7.34375 59.6548 9.0767C58.8215 10.8097 58.4048 12.9356 58.4048 15.4545C58.4048 17.9735 58.8215 20.0994 59.6548 21.8324C60.4976 23.5653 61.6293 24.8769 63.0497 25.767C64.4796 26.6572 66.0753 27.1023 67.8366 27.1023C68.8026 27.1023 69.7306 26.9697 70.6207 26.7045C71.5109 26.4394 72.3205 26.0464 73.0497 25.5256C73.7884 24.9953 74.4134 24.3466 74.9247 23.5795C75.4456 22.803 75.8101 21.9129 76.0185 20.9091H79.5412C79.276 22.3958 78.7931 23.7263 78.0923 24.9006C77.3916 26.0748 76.5204 27.0739 75.4787 27.8977C74.437 28.7121 73.2675 29.3324 71.9702 29.7585C70.6823 30.1847 69.3045 30.3977 67.8366 30.3977C65.3556 30.3977 63.1491 29.7917 61.2173 28.5795C59.2855 27.3674 57.7656 25.6439 56.6577 23.4091C55.5497 21.1742 54.9957 18.5227 54.9957 15.4545C54.9957 12.3864 55.5497 9.73485 56.6577 7.5C57.7656 5.26515 59.2855 3.54167 61.2173 2.32955C63.1491 1.11742 65.3556 0.511363 67.8366 0.511363C69.3045 0.511363 70.6823 0.724431 71.9702 1.15057C73.2675 1.5767 74.437 2.2017 75.4787 3.02557C76.5204 3.83996 77.3916 4.83428 78.0923 6.00852C78.7931 7.17329 79.276 8.50379 79.5412 10Z" fill="black"/>
<path d="M93.1314 30H81.7678L86.5973 0.90909H97.5064C100.499 0.90909 102.999 1.51042 105.006 2.71307C107.014 3.91572 108.439 5.63447 109.282 7.86932C110.125 10.1042 110.29 12.7652 109.779 15.8523C109.287 18.8258 108.288 21.3684 106.782 23.4801C105.286 25.5919 103.373 27.2064 101.043 28.3239C98.7232 29.4413 96.0859 30 93.1314 30ZM90.7734 23.2955H93.6428C95.0822 23.2955 96.3653 23.0445 97.4922 22.5426C98.6286 22.0312 99.5755 21.179 100.333 19.9858C101.1 18.7831 101.654 17.1402 101.995 15.0568C102.317 13.0871 102.308 11.5672 101.967 10.4972C101.626 9.41761 100.977 8.66951 100.021 8.25284C99.0642 7.8267 97.8284 7.61364 96.3132 7.61364H93.3871L90.7734 23.2955ZM111.104 30L115.933 0.90909H128.49C130.649 0.90909 132.472 1.30208 133.959 2.08807C135.446 2.87405 136.516 4.00568 137.169 5.48295C137.822 6.96023 137.979 8.73106 137.638 10.7955C137.297 12.8788 136.544 14.6354 135.379 16.0653C134.224 17.4858 132.751 18.5653 130.962 19.304C129.181 20.0331 127.183 20.3977 124.967 20.3977H117.467L118.49 14.2614H124.399C125.327 14.2614 126.142 14.1477 126.842 13.9205C127.543 13.6837 128.111 13.3144 128.547 12.8125C128.982 12.3011 129.267 11.6288 129.399 10.7955C129.532 9.96212 129.465 9.28504 129.2 8.7642C128.935 8.2339 128.495 7.84564 127.879 7.59943C127.264 7.34375 126.501 7.21591 125.592 7.21591H122.808L119.001 30H111.104ZM130.365 16.6477L135.422 30H126.842L121.956 16.6477H130.365ZM150.94 0.90909L146.111 30H138.213L143.043 0.90909H150.94ZM162.638 0.90909L165.195 21.4205H165.422L174.797 0.90909H183.717L169.286 30H158.49L153.717 0.90909H162.638ZM181.69 30L186.519 0.90909H207.485L206.406 7.27273H193.337L192.542 12.2727H204.531L203.451 18.6364H191.462L190.667 23.6364H203.678L202.599 30H181.69Z" fill="#0F0137"/>
</svg>

              </div>
              <p className="mb-4 mt-2">Please login or sign up to access the content.</p>
              <div className="auth-form justify-center w-max mx-auto">
                <div className="flex gap-4">
                <input
                className="bg-transparent border px-4 "
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                   className="bg-transparent border px-4 "
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                </div>
                <p className="error-message">{errorMessage}</p>
                <button className="bg-green-400 mb-6 text-white px-4 py-2 mt-3 mx-auto w-max" onClick={handleLogin}>Login</button>
                <p>Don't have an account? Sign up below.</p>
                <button className="bg-green-400 text-white px-4 py-2 mx-auto w-max" onClick={handleSignup}>Sign up</button>
              </div>
            </div>
            </div>
          )}
          <div className="md:w-[35%] w-full">
            {isAuthenticated ? (
              <>
              <Sidebar setFilter={setFilter} />
              <button className="bg-red-400 text-white px-4 py-2 mt-10 mx-auto w-max" onClick={handleLogout}>Logout</button>
              </>
            ) : null
            }
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
