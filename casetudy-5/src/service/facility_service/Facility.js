const lease = ["giờ", "ngày", "tháng", "năm"];
const houseList = [
  {
    id: 1,
    img: "https://i.pinimg.com/564x/0f/66/cd/0f66cdbacabd20bea166fe11b0c932be.jpg",
    title: "LOS ANGELES",
    size: 30.4,
    rentPrice: 2000000,
    numberPeople: 5,
    lease: lease[2],
    roomStandard: "sạch sẽ, thoáng mát",
    describe: "có bồn tắm hơi, có bãi đổ xe riêng",
    numberFloors: 2,
  },
  {
    id: 2,
    img: "https://i.pinimg.com/564x/bf/af/83/bfaf83b85c66c290d37910bea712e049.jpg",
    title: " DUBAI",
    size: 35,
    rentPrice: 5500000,
    numberPeople: 7,
    lease: lease[3],
    roomStandard: "có điều hòa, minibar",
    describe: "kính mặt trời, có bãi đổ xe lamborghini",
    numberFloors: 3,
  },
  {
    id: 3,
    img: "https://i.pinimg.com/564x/f7/40/76/f74076e5033b662fbf04c13837203a0d.jpg",
    title: "BAHAMAS",
    size: 41.1,
    rentPrice: 3200000,
    numberPeople: 7,
    lease: lease[2],
    roomStandard: "bồn tắm view biển, nhà đẹp",
    describe: "rộng rãi, thiết kế hiện đại hàn xẻng",
    numberFloors: 2,
  },
  {
    id: 4,
    img: "https://i.pinimg.com/564x/a7/88/fc/a788fc2d1eacb370629dd37c11ac1468.jpg",
    title: "CALIFORNIA",
    size: 34.2,
    rentPrice: 10000000,
    numberPeople: 14,
    lease: lease[2],
    roomStandard: "bếp hiện đại, có nhà mini pet, ban công view sân bay",
    describe: "thiết kế đẳng cấp vippro, siêu sang xịn mịn",
    numberFloors: 4,
  },
];
const leases = ["giờ", "ngày", "tháng", "năm"];
const service = [
  "massage",
  "karaoke",
  "thức ăn",
  "nước uống",
  "tham quan resort",
];
const roomList = [
  {
    id: 1,
    img: "https://i.pinimg.com/564x/8a/28/f9/8a28f94fdbc874a2dbd4254d7403ef0f.jpg",
    title: "STANDARD",
    size: 13,
    rentPrice: 500000,
    numberPeople: 3,
    lease: lease[1],
    freeService: service[0],
  },
  {
    id: 2,
    img: "https://i.pinimg.com/564x/30/1f/bb/301fbbc5bad2a63554482a288aa3c79e.jpg",
    title: "SUPERIOR",
    size: 20,
    rentPrice: 200000,
    numberPeople: 2,
    lease: lease[0],
    freeService: service[2],
  },
  {
    id: 3,
    img: "https://i.pinimg.com/564x/a8/ff/d7/a8ffd7c5ed1e55f64af27383a9ff924b.jpg",
    title: "DELUXE",
    size: 36.2,
    rentPrice: 880000,
    numberPeople: 4,
    lease: lease[1],
    freeService: service[4],
  },
  {
    id: 4,
    img: "https://i.pinimg.com/564x/5a/d3/91/5ad3911fc59945d8f8aab36db3f47d98.jpg",
    title: "TWIN ROOM",
    size: 29,
    rentPrice: 735000,
    numberPeople: 4,
    lease: lease[2],
    freeService: service[3],
  },
];
const villaList = [
  {
    id: 1,
    img: "https://i.pinimg.com/564x/d7/fb/60/d7fb60186152d51bdfbc1974957f432f.jpg",
    title: "OCEAN SUTIE",
    size: 85.8,
  },
  {
    id: 2,
    img: "https://i.pinimg.com/564x/62/b9/b0/62b9b094db09fef8672ce69d6c81fb10.jpg",
    title: "OCEAN STUDIO SUTIE",
    size: 40.1,
  },
  {
    id: 3,
    img: "https://i.pinimg.com/564x/cb/35/ab/cb35abfbc8483c7d7afa458cd36ac579.jpg",
    title: "OCEAN DELUXE",
    size: 43.7,
  },
  {
    id: 4,
    img: "https://i.pinimg.com/564x/a5/0a/a1/a50aa1979eea53a5f666dd32885892a5.jpg",
    title: "GARDEN DELUXE",
    size: 40.1,
  },
];
export function getAllVilla() {
  return villaList;
}
export function getAllHouse() {
  return houseList;
}

export function getAllRoom() {
  return roomList;
}
