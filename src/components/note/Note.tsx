import { FC, MouseEventHandler } from "react";
import { Note as NoteType } from "../../data/@types/Note";

type Props = {
	note: NoteType;
	editNote: MouseEventHandler<HTMLButtonElement>;
	deleteHandle: MouseEventHandler<HTMLButtonElement>;
};

const Note: FC<Props> = ({ note: { content, createdAt }, editNote, deleteHandle }) => {
	return (
		<div className="flex justify-between items-center py-1 px-3 bg-white dark:bg-zinc-500 rounded-xl">
			<div className="grow">
				<p className="text-xs font-thin">{createdAt}</p>
				<p className="font-medium">{content}</p>
			</div>
			<div className="flex space-x-3 py-1">
				<button onClick={editNote}>
					<span className="material-symbols-outlined align-middle">edit</span>
				</button>
				<button onClick={deleteHandle}>
					<span className="material-symbols-outlined align-middle text-red-500">delete</span>
				</button>
			</div>
		</div>
	);
};

export default Note;
