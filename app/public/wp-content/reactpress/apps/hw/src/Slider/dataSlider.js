import { v4 as uuidv4 } from "uuid";
import SliderImg1 from "../assets/img/sliderImg1.png";
import SliderImg2 from "../assets/img/sliderImg2.png";
import SliderImg3 from "../assets/img/sliderImg3.png";

const dataSlider = [
  {
    id: uuidv4(),
    title:
      "Build strong patient relationships and always stay connected with our smart patient profiles.",
    subTitle:
      "Share prescriptions and medical records with your patients over whatsapp.",
    subSubTitle:
      "Our automated Whatsapp/SMS appointment reminders can help reduce your costly no-shows.",
    image: SliderImg1,
  },
  {
    id: uuidv4(),
    title: "One workspace to manage your entire medical practice",
    subTitle: "No matter how many different clinics you visit.",
    subSubTitle:
      "Get notified about patient appointments and track your income with our monthly reports.",
    image: SliderImg2,
  },
  {
    id: uuidv4(),
    title: "“If you can’t measure it, you can’t improve it” - Peter Drucker",
    subTitle: null,
    subSubTitle:
      "Our intelligent dashboard analytics help you turn insights into actions",
    image: SliderImg3,
  },
];

export default dataSlider;
