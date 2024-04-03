/** @format */

import { create } from "zustand";

interface Session {
	state: boolean;
	id: string | null;
}
interface SessionState {
	session: Session;
	setLogin: (s: Session) => void;
}
const useSessionStore = create<SessionState>((set) => ({
	session: {
		id: null,
		state: false,
	},
	setLogin: (s: Session) => set({ session: s }), // Correction ici
}));
