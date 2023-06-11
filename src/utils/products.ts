import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "@/types_db";
import { Product } from "@/types";

export async function getProducts(supabase: SupabaseClient<Database>): Promise<Product[]> {
    const { data, error } = await supabase
        .from("products")
        .select("*, prices(*)")
        .eq("active", true)
        .eq("prices.active", true)
        .order("metadata->index")
        .order("unit_amount", { foreignTable: "prices" });

    if (error) {
        console.log(error.message);
    }

    return data as Product[];
}
