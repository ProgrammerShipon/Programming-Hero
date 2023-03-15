const handlePaymentInfo = async (id) => {
  const data = await fetch(`ROOMS.json`);
  const result = await data.json();
  const roomInfo = result.find((r) => r._id == id);
  displayPaymentModal(roomInfo);
};

const displayPaymentModal = (roomInfo) => {
  console.log(roomInfo);
  document.getElementById("exampleModalLabel").innerHTML = roomInfo.name;
  const modalBody = document.getElementById("random-room-info-modal-body");
  modalBody.innerHTML = ``;
};
