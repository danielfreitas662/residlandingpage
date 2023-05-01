const address = process.env.NEXT_PUBLIC_CONTENT_ADDRESS;
const sas = process.env.NEXT_PUBLIC_SAS_TOKEN;
export const catalog = {
  home: {
    video1: address + 'dji_fly_20230331_135102_119_1680283255605_quickshot.mp4' + sas,
    video2: address + 'IMG_6359.MOV' + sas,
    piccard1: address + 'IMG_5602.jpeg' + sas,
    piccard2: address + 'IMG_5368.jpeg' + sas,
  },
};
