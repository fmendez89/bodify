"use client";

import React from "react";
import { createBrowserClient } from "@/utils/supabase-browser";

import type { SupabaseClient } from "@supabase/auth-helpers-nextjs";
import type { Database } from "@/types_db";

type SupabaseContext = {
    supabase: SupabaseClient<Database>;
};

const Context = React.createContext<SupabaseContext | undefined>(undefined);

export default function SupabaseProvider({ children }: { children: React.ReactNode }) {
    const [supabase] = React.useState<SupabaseContext>(() => ({ supabase: createBrowserClient() }));
    return <Context.Provider value={supabase}>{children}</Context.Provider>;
}

export const useSupabase = () => {
    const context = React.useContext(Context);
    if (context === undefined) {
        throw new Error("useSupabase must be used inside SupabaseProvider");
    } else {
        return context;
    }
};
