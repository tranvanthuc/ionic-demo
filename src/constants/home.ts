import history from "@/assets/home/history.svg";
import all from "@/assets/home/all.svg";
import newest from "@/assets/home/newest.svg";
import quoted from "@/assets/home/quoted.svg";
import noImage from "@/assets/no_image.png";
import { heart } from "ionicons/icons";

export const listCates = [
  {
    useSrc: true,
    useIcon: true,
    src: history,
    label: "History",
  },
  {
    useSrc: false,
    useIcon: true,
    icon: heart,
    label: "Favourite",
  },
  {
    useSrc: true,
    useIcon: true,
    src: all,
    label: "All",
  },
  {
    useSrc: true,
    useIcon: true,
    src: newest,
    label: "Newest",
  },
  {
    useSrc: true,
    useIcon: true,
    src: quoted,
    label: "Quoted",
  },
  {
    useSrc: true,
    useIcon: false,
    src: noImage,
    label: "Meat",
  },
  {
    useSrc: true,
    useIcon: false,
    src: noImage,
    label: "Seafood",
  },
  {
    useSrc: true,
    useIcon: false,
    src: noImage,
    label: "Snacks",
  },
  {
    useSrc: true,
    useIcon: false,
    src: noImage,
    label: "Vegetables",
  },
];
