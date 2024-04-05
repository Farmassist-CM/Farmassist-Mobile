/** @format */

import { create } from "zustand";
import { FireAuthUser } from "../interfaces/FireAuthUser";

interface Session {
	state: boolean;
	id: string | null;
}
interface SessionState {
	session: FireAuthUser | null;
	LoginUser: (s: FireAuthUser) => void;
}

const useSessionStore = create<SessionState>((set) => ({
	session: null,
	LoginUser: (s: FireAuthUser) => set({ session: s }), // Correction ici
}));

export default useSessionStore;
