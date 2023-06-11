import { headers, cookies } from "next/headers";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";

import type { Database } from "@/types_db";

export const createServerClient = () =>
    createServerComponentSupabaseClient<Database>({
        headers,
        cookies,
    });

export const getUserSession = () =>
    createServerComponentSupabaseClient<Database>({
        headers,
        cookies,
    })
        .auth.getSession()
        .then((data) => data.data.session);
