import styled from "./realbox.module.css";
import { FAQ } from "utils/Faq";

export const Realbox = ({index}) => {

    const FAQData = FAQ[index];

    return(
    <div className={styled.realbox}>
        <div className={styled.nobox1}>{FAQData.number}</div>
        <div className={styled.contentbox1}>{FAQData.title}</div>
        <div className={styled.timebox1}>{FAQData.date}</div>
        <div className={styled.viewbox1}>{FAQData.view}</div>
      </div>
    );
};