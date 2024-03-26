import { useEffect, useRef, useState } from "react";
import Note from "../note/Note";
import { Note as NoteType } from "../../data/@types/Note";

const Main = () => {
	const [notes, setNotes] = useState<NoteType[]>(() => {
		const data = localStorage.getItem("notes");

		let notesLocal: NoteType[] = [];
		if (data) {
			notesLocal = JSON.parse(data);
		}

		return notesLocal;
	});

	useEffect(() => localStorage.setItem("notes", JSON.stringify(notes)), [notes]);

	const inputCreateNoteRef = useRef<HTMLInputElement>(null);

	function saveNote() {
		if (inputCreateNoteRef.current) {
			const newNote: NoteType = {
				content: inputCreateNoteRef.current.value,
				createdAt: new Date().toLocaleDateString("pt-BR") + " - " + new Date().toLocaleTimeString("pt-BR"),
			};
			setNotes((prevNotes) => [newNote, ...prevNotes]);
			inputCreateNoteRef.current.value = "";
		}
	}

	function editHandle(note: string, index: number) {
		deleteHandle(index);
		if (inputCreateNoteRef.current) {
			inputCreateNoteRef.current.value = note;
		}
	}

	function deleteHandle(index: number) {
		setNotes((prevNotes) => {
			const newNotes = [...prevNotes];
			newNotes.splice(index, 1);
			return newNotes;
		});
	}

	return (
		<main className="space-y-4 p-3 h-72 overflow-y-scroll">
			<label className="flex flex-col gap-1">
				<p className="text-xs font-semibold ">Note:</p>
				<div className="flex flex-col sm:flex-row rounded-xl overflow-hidden">
					<input
						type="text"
						ref={inputCreateNoteRef}
						className="px-2 py-2 grow dark:bg-zinc-500 outline-none"
						placeholder="Create a note"
						required
					/>
					<input
						type="button"
						value="Save note"
						onClick={saveNote}
						className="px-6 py-2 text-sm font-medium text-white bg-green-500"
					/>
				</div>
			</label>
			<div className="space-y-1 overflow-x-hidden">
				{notes.map((note, index) => (
					<Note
						key={note.content + index}
						note={note}
						editNote={() => {
							editHandle(note.content, index);
						}}
						deleteHandle={() => deleteHandle(index)}
					/>
				))}
			</div>
		</main>
	);
};

export default Main;
