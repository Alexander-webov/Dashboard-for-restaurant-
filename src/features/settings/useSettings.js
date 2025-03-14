import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export function useSettings() {
    const { isLoading, error, data: setting } = useQuery({
        queryKey: ["setings"],
        queryFn: getSettings
    });

    return { isLoading, error, setting }
}


