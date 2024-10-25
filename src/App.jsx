import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import AvailablePlayer from "./components/AvailablePlayer";
import SelectedScreen from "./components/SelectedScreen";
import SelectionScreen from "./components/SelectionScreen";

function App() {
  const [remainingCoin, setRemainingCoin] = useState(0);
  const [selected, setSelected] = useState(true);
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  useEffect(() => {
    fetch("fakedata.json").then((res) =>
      res.json().then((data) => setPlayers(data.players))
    );
  }, []);

  // console.log(players);

  const selectPlayer = (player) => {
    if (remainingCoin >= player.biddingPrice) {
      if (selectedPlayers.length < 6) {
        if (!selectedPlayers.find((sp) => sp.playerId === player.playerId)) {
          setSelectedPlayers([...selectedPlayers, player]);
          setRemainingCoin(remainingCoin - player.biddingPrice);
          toast.success("Player added successfully", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast.error("Player already selected", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            progress: undefined,
            theme: "light",
          });
        }
      } else {
        toast.error("Maximum number of player selected", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          progress: undefined,
          theme: "light",
        });
      }
    } else {
      toast.error("You don't have sufficient coin", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  // console.log(selectedPlayers);

  const addCoin = () => {
    let newCoin = remainingCoin + 6000000;
    setRemainingCoin(newCoin);
    toast.success("Coin added successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: "light",
    });
  };

  const flipComponent = () => {
    setSelected(!selected);
  };
  return (
    <>
      <div className="max-w-[1600px] mx-auto px-36 sora">
        <Navbar remainingCoin={remainingCoin} />
        <Banner addCoin={addCoin} />
        <AvailablePlayer
          flipComponent={flipComponent}
          selected={selected}
          selectedPlayersLength={selectedPlayers.length}
        />
        <div className="grid grid-cols-3 gap-6">
          {selected ? (
            <SelectionScreen
              players={players}
              selectedPlayersLength={selectedPlayers.length}
              selectPlayer={selectPlayer}
            />
          ) : (
            <SelectedScreen selectedPlayers={selectedPlayers} />
          )}
        </div>

        <ToastContainer />
      </div>
    </>
  );
}

export default App;
