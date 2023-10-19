import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import type { Database } from "@/types_db";

export const createServerClient = () =>
    createServerComponentClient<Database>({
        cookies,
    });

export const getUserSession = () =>
    createServerComponentClient<Database>({
        cookies,
    })
        .auth.getSession()
        .then((data) => data.data.session);
