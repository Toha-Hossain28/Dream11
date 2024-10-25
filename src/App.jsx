import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import AvailablePlayer from "./components/AvailablePlayer";
import SelectedScreen from "./components/SelectedScreen";
import SelectionScreen from "./components/SelectionScreen";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";

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

  const removePlayer = (p) => {
    const newSelectedPlayers = selectedPlayers.filter(
      (player) => player.playerId !== p.playerId
    );
    setSelectedPlayers(newSelectedPlayers);
    setRemainingCoin(remainingCoin + p.biddingPrice);
    toast.warning("Player removed successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: "light",
    });
  };

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

  const flipComponent = (btnName) => {
    if (btnName === "available") {
      setSelected(true);
    }
    if (btnName === "selected") {
      setSelected(false);
    }
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
        <div
          className={`${
            selected
              ? "grid grid-cols-3 gap-6 mb-20"
              : "grid grid-cols-1 gap-y-6 mb-20"
          }`}
        >
          {selected ? (
            <SelectionScreen
              players={players}
              selectedPlayersLength={selectedPlayers.length}
              selectPlayer={selectPlayer}
            />
          ) : (
            <SelectedScreen
              selectedPlayers={selectedPlayers}
              flipComponent={flipComponent}
              removePlayer={removePlayer}
            />
          )}
        </div>
        <Newsletter />

        <ToastContainer />
      </div>
      <Footer />
    </>
  );
}

export default App;
