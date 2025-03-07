import { JSX } from "react";

type Props = {
    strongText?: string;
    note: string | JSX.Element;
};

const Note = ({strongText, note}: Props) => {
  return (
    <div className='italic font-light pt-2'>
        <span className='font-semibold'>{strongText} </span>
        {note}
    </div>
  );
};

export default Note;